import { useState, useEffect, useRef, useCallback } from 'react';

export interface AudioState {
  isSpeaking: boolean;
  isSupported: boolean;
  error: string | null;
}

export interface UseAudioReturn extends AudioState {
  speak: (text: string, options?: { rate?: number; pitch?: number; volume?: number }) => void;
  stop: () => void;
  autoSpeak: (text: string, delay?: number, options?: { rate?: number; pitch?: number; volume?: number }) => void;
  hasInteracted: boolean;
}

export const useAudio = (): UseAudioReturn => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const autoSpeakTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 标记用户已与页面交互，允许播放音频
  useEffect(() => {
    const handleInteraction = () => setHasInteracted(true);

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  useEffect(() => {
    // 清理未完成的语音和定时器
    return () => {
      window.speechSynthesis.cancel();
      if (autoSpeakTimeoutRef.current) {
        clearTimeout(autoSpeakTimeoutRef.current);
      }
    };
  }, []);

  const speak = useCallback((text: string, options?: { rate?: number; pitch?: number; volume?: number }) => {
    if (!isSupported) {
      console.warn('Speech synthesis not supported');
      return;
    }

    if (!text) return;

    // 取消之前的定时器
    if (autoSpeakTimeoutRef.current) {
      clearTimeout(autoSpeakTimeoutRef.current);
      autoSpeakTimeoutRef.current = null;
    }

    try {
      // 停止当前正在播放的音频
      window.speechSynthesis.cancel();
      setError(null);

      // 给一个小延迟，确保 cancel 完成后再开始新的播放
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = options?.rate ?? 0.9;
        utterance.pitch = options?.pitch ?? 1;
        utterance.volume = options?.volume ?? 1;

        utterance.onstart = () => {
          console.log('Speech started:', text);
          setIsSpeaking(true);
        };

        utterance.onend = () => {
          console.log('Speech ended:', text);
          setIsSpeaking(false);
        };

        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event.error);
          // 只有非中断错误才设置错误状态
          if (event.error && event.error !== 'interrupted') {
            setError(`Speech error: ${event.error}`);
          }
          setIsSpeaking(false);
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }, 50); // 50ms 延迟确保 cancel 完成
    } catch (error) {
      console.error('Failed to speak:', error);
      setIsSpeaking(false);
      setError('Failed to speak');
    }
  }, [isSupported]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    if (autoSpeakTimeoutRef.current) {
      clearTimeout(autoSpeakTimeoutRef.current);
      autoSpeakTimeoutRef.current = null;
    }
    setIsSpeaking(false);
  }, []);

  const autoSpeak = useCallback((text: string, delay = 500, options?: { rate?: number; pitch?: number; volume?: number }) => {
    // 清除之前的自动播放
    if (autoSpeakTimeoutRef.current) {
      clearTimeout(autoSpeakTimeoutRef.current);
      autoSpeakTimeoutRef.current = null;
    }

    // 延迟播放，以便浏览器允许自动播放
    autoSpeakTimeoutRef.current = setTimeout(() => {
      try {
        speak(text, options);
      } catch {
        // 浏览器可能阻止自动播放，静默失败
        console.log('Auto-play blocked by browser');
      }
    }, delay);
  }, [speak]);

  return {
    isSpeaking,
    isSupported,
    error,
    speak,
    stop,
    autoSpeak,
    hasInteracted,
  };
};
