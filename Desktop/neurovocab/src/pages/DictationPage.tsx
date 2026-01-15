import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CyberButton, CyberCard, CyberInput, ProgressBar } from '../components/ui';
import { useAppStore } from '../store/appStore';
import { useAudio } from '../hooks/useAudio';
import { playSound } from '../utils/speech';

export const DictationPage: React.FC = () => {
  const {
    todayWords,
    currentIndex,
    nextWord,
    addToRetryQueue,
    getTodayProgress,
    retryQueue,
  } = useAppStore();

  const { speak, autoSpeak } = useAudio();
  const currentWord = todayWords[currentIndex];
  const [userInput, setUserInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isRetry, setIsRetry] = useState(false);

  const { completed } = getTodayProgress();
  const displayTotal = todayWords.length + retryQueue.length;
  const displayProgress = completed + (isRetry ? todayWords.length : 0);

  // 只有在进入新单词时才自动播放和重置状态
  useEffect(() => {
    if (currentWord && !showResult) {
      setShowResult(false);
      setUserInput('');
      setIsRetry(retryQueue.length > 0 && currentIndex === 0);
      // 自动播放发音
      autoSpeak(currentWord.word);
    }
  }, [currentWord, retryQueue, currentIndex, showResult, autoSpeak]);

  const handleReplay = () => {
    playSound('click');
    if (currentWord) {
      speak(currentWord.word);
    }
  };

  const handleSubmit = () => {
    if (!currentWord) return;

    const trimmedInput = userInput.trim().toLowerCase();
    const isWordCorrect = trimmedInput === currentWord.word.toLowerCase();

    console.log('handleSubmit - currentWord:', currentWord.word, 'isCorrect:', isWordCorrect);

    setIsCorrect(isWordCorrect);
    setShowResult(true);

    if (isWordCorrect) {
      playSound('success');
      // 正确：标记为已掌握
      useAppStore.getState().updateWordStatus(currentWord.word, 'mastered');
      console.log('handleSubmit - word marked as mastered');
    } else {
      playSound('error');
      // 错误：添加到重试队列
      addToRetryQueue(currentWord);
      console.log('handleSubmit - word added to retry queue');
    }
  };

  const handleNext = () => {
    console.log('handleNext CLICKED! showResult:', showResult, 'currentWord:', currentWord?.word, 'isRetry:', isRetry);
    playSound('click');
    setShowResult(false);
    setUserInput('');
    console.log('Calling nextWord...');
    nextWord();
    console.log('nextWord() returned, new showResult should be false');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !showResult) {
      handleSubmit();
    }
  };

  if (!currentWord) {
    return null;
  }

  return (
    <div className="min-h-screen cyber-grid p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* 顶部进度栏 */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-pink-400 font-mono text-xs md:text-sm">
              {isRetry ? '> 阶段C: 安全协议 [重试队列]' : '> 阶段C: 安全协议'}
            </h2>
            <span className="text-cyan-400 font-mono text-xs md:text-sm">
              [{displayProgress + 1}/{displayTotal}]
            </span>
          </div>
          <ProgressBar
            progress={(displayProgress / displayTotal) * 100}
            variant={isRetry ? 'download' : 'system'}
          />

          {/* 重试队列指示 */}
          {retryQueue.length > 0 && !isRetry && (
            <div className="mt-2 p-2 bg-pink-500/10 border border-pink-500/30 text-center rounded-lg">
              <span className="text-pink-300 font-mono text-sm">
                ⚠ 错误单词将加入重试队列 [{retryQueue.length}]
              </span>
            </div>
          )}
        </div>

        {/* 听写卡片 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWord.word}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <CyberCard variant={isRetry ? 'secondary' : 'primary'}>
              {/* 音频控制 */}
              <div className="flex justify-center mb-6 md:mb-8">
                <motion.button
                  onClick={handleReplay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full border-2 border-cyan-500/50
                    bg-cyan-500/10 flex items-center justify-center
                    hover:bg-cyan-500/20 hover:border-cyan-400
                    transition-all duration-200 mobile-touch-target
                    shadow-[0_0_20px_rgba(6,182,212,0.3)]
                    hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                >
                  <svg className="w-10 h-10 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>

              {/* 提示信息（不显示单词本身） */}
              <div className="text-center mb-6">
                <p className="text-sm font-mono text-cyan-300/60 mb-2">
                  :: 听音频输入单词 ::
                </p>
                <p className="text-pink-300 font-mono text-sm">
                  [提示: {currentWord.definition}]
                </p>
              </div>

              {/* 终端风格输入框 */}
              <div className="mb-6">
                <CyberInput
                  variant="terminal"
                  value={userInput}
                  onChange={(e) => {
                    setUserInput(e.target.value);
                    if (!showResult) playSound('typing');
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="输入拼写..."
                  disabled={showResult}
                  error={showResult && !isCorrect ? '拼写错误' : undefined}
                  className="text-center text-xl"
                />
              </div>

              {/* 结果显示 */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className={`p-4 border-2 mb-6 rounded-lg ${
                      isCorrect
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-red-500 bg-red-500/10'
                    }`}
                  >
                    {isCorrect ? (
                      <div className="text-center">
                        <div className="text-green-400 font-mono text-lg mb-2">
                          ACCESS GRANTED
                        </div>
                        <div className="text-3xl font-bold text-cyan-400">
                          {currentWord.word}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="text-red-400 font-mono text-lg mb-2">
                          ACCESS DENIED
                        </div>
                        <div className="text-sm text-cyan-300/60 mb-2">
                          你的答案: <span className="text-red-300">{userInput}</span>
                        </div>
                        <div className="text-lg font-bold text-cyan-400">
                          正确拼写: {currentWord.word}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 按钮 */}
              {!showResult ? (
                <CyberButton onClick={handleSubmit} variant="primary" className="w-full mobile">
                  [提交] 验证
                </CyberButton>
              ) : (
                <CyberButton onClick={handleNext} variant="primary" className="w-full mobile">
                  [继续] 下一个
                </CyberButton>
              )}
            </CyberCard>
          </motion.div>
        </AnimatePresence>

        {/* 键盘提示 */}
        {!showResult && (
          <div className="mt-4 text-center">
            <p className="text-xs font-mono text-cyan-300/50">
              [按 Enter 键提交]
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
