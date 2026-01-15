import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CyberButton, CyberCard, ProgressBar } from '../components/ui';
import { useAppStore } from '../store/appStore';
import { useAudio } from '../hooks/useAudio';
import { playSound } from '../utils/speech';

export const LearnPage: React.FC = () => {
  const {
    todayWords,
    currentIndex,
    nextWord,
    prevWord,
    getTodayProgress,
  } = useAppStore();

  const { speak, autoSpeak } = useAudio();
  const currentWord = todayWords[currentIndex];
  const { completed, total } = getTodayProgress();

  useEffect(() => {
    // 自动播放发音
    if (currentWord) {
      autoSpeak(currentWord.word);
    }
  }, [currentWord, autoSpeak]);

  const handleNext = () => {
    playSound('click');
    nextWord();
  };

  const handlePrev = () => {
    playSound('click');
    prevWord();
  };

  const handleReplay = () => {
    playSound('click');
    if (currentWord) {
      speak(currentWord.word);
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
              {'>'} 阶段A: 数据上传
            </h2>
            <span className="text-cyan-400 font-mono text-xs md:text-sm">
              [{currentIndex + 1}/{total}]
            </span>
          </div>
          <ProgressBar progress={(completed / total) * 100} variant="upload" />
        </div>

        {/* 单词卡片 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWord.word}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <CyberCard variant="holographic" mobile>
              {/* 单词和音标 */}
              <div className="text-center mb-4 md:mb-6">
                <motion.h1
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-1 md:mb-2 text-cyan-high"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {currentWord.word}
                </motion.h1>
                <p className="text-pink-300 font-mono text-sm md:text-lg">
                  {currentWord.phonetic}
                </p>
              </div>

              {/* 播放按钮 */}
              <div className="flex justify-center mb-4 md:mb-6">
                <motion.button
                  onClick={handleReplay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-cyan-500/50
                    bg-cyan-500/10 flex items-center justify-center
                    hover:bg-cyan-500/20 hover:border-cyan-400
                    transition-all duration-200 mobile-touch-target
                    shadow-[0_0_20px_rgba(6,182,212,0.3)]
                    hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>

              {/* 英文释义 */}
              <div className="mb-2 md:mb-3">
                <div className="text-xs font-mono text-cyan-300/70 mb-1">:: DEFINITION ::</div>
                <p className="text-sm md:text-lg text-white">{currentWord.definition}</p>
              </div>

              {/* 中文释义 */}
              <div className="mb-2 md:mb-3">
                <div className="text-xs font-mono text-cyan-300/70 mb-1">:: 中文释义 ::</div>
                <p className="text-sm md:text-lg text-cyan-100">{currentWord.chinese_definition}</p>
              </div>

              {/* 搭配短语 */}
              <div className="mb-2 md:mb-3">
                <div className="text-xs font-mono text-pink-300/70 mb-2">:: 搭配短语 ::</div>
                <div className="space-y-1.5 md:space-y-2">
                  {currentWord.collocations.map((collocation, idx) => (
                    <div
                      key={idx}
                      className="p-2 md:p-3 glass-card rounded-lg border border-cyan-500/20"
                    >
                      <p className="text-green-300 font-mono text-xs md:text-sm mb-1">
                        {collocation.phrase}
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {collocation.translation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 同义词 */}
              <div className="mb-2 md:mb-3">
                <div className="text-xs font-mono text-pink-300/70 mb-2">:: SYNONYMS ::</div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {currentWord.synonyms.map((synonym, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 md:px-3 py-1 text-xs md:text-sm font-mono border border-pink-500/30
                        text-pink-200 bg-pink-500/10 rounded-lg"
                    >
                      [{synonym.word}] <span className="text-gray-400 text-xs">({synonym.translation})</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* 例句 */}
              <div>
                <div className="text-xs font-mono text-green-300/70 mb-1">:: EXAMPLE ::</div>
                <p className="text-sm md:text-base text-white mb-1">{currentWord.example_sentence}</p>
                <p className="text-green-200 text-xs md:text-sm">{currentWord.example_translation}</p>
              </div>
            </CyberCard>
          </motion.div>
        </AnimatePresence>

        {/* 操作按钮 */}
        <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
          <div className="flex gap-3 md:gap-4 mobile-stack">
            <CyberButton
              onClick={handlePrev}
              variant="secondary"
              className={currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
              disabled={currentIndex === 0}
              mobile
            >
              {'<'} 上一个
            </CyberButton>
            <CyberButton
              onClick={handleNext}
              variant="primary"
              className="flex-1 mobile"
            >
              {currentIndex === total - 1 ? '[进入] 系统检查' : '[下载完成] 继续'}
            </CyberButton>
          </div>
          {currentIndex === total - 1 && (
            <div className="text-center text-xs font-mono text-cyan-300/50">
              [即将进入阶段B: 系统检查]
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
