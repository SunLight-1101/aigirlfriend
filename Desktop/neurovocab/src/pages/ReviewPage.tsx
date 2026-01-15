import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CyberButton, CyberCard, ProgressBar } from '../components/ui';
import { useAppStore } from '../store/appStore';
import { useAudio } from '../hooks/useAudio';
import { playSound } from '../utils/speech';

interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export const ReviewPage: React.FC = () => {
  const {
    todayWords,
    currentIndex,
    nextWord,
    addToRetryQueue,
    updateWordStatus,
    getTodayProgress,
  } = useAppStore();

  const { speak, autoSpeak } = useAudio();
  const currentWord = todayWords[currentIndex];
  const [options, setOptions] = useState<QuizOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { completed, total } = getTodayProgress();

  // 生成多选题选项
  useEffect(() => {
    if (!currentWord) return;

    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(false);

    // 获取干扰项（从其他单词中随机选择）
    const distractors = todayWords
      .filter(w => w.word !== currentWord.word)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => ({ text: w.chinese_definition, isCorrect: false }));

    // 正确答案
    const correctOption: QuizOption = { text: currentWord.chinese_definition, isCorrect: true };

    // 打乱选项顺序
    const allOptions: QuizOption[] = [...distractors, correctOption]
      .sort(() => Math.random() - 0.5);

    setOptions(allOptions);

    // 自动播放发音
    autoSpeak(currentWord.word);
  }, [currentWord, todayWords, autoSpeak]);

  const handleOptionClick = (index: number) => {
    if (showResult || selectedOption !== null) return;

    const option = options[index];
    setSelectedOption(index);
    setShowResult(true);
    setIsCorrect(option.isCorrect);

    if (option.isCorrect) {
      playSound('success');
    } else {
      playSound('error');
    }
  };

  const handleNext = () => {
    playSound('click');

    if (isCorrect) {
      // 正确：标记为复习中
      updateWordStatus(currentWord.word, 'reviewing');
    } else {
      // 错误：添加到重试队列
      addToRetryQueue(currentWord);
    }

    setShowResult(false);
    setSelectedOption(null);
    nextWord();
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
              {'>'} 阶段B: 系统检查
            </h2>
            <span className="text-cyan-400 font-mono text-xs md:text-sm">
              [{currentIndex + 1}/{total}]
            </span>
          </div>
          <ProgressBar progress={(completed / total) * 100} variant="system" />
        </div>

        {/* 测验卡片 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWord.word}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <CyberCard variant="primary" className="min-h-[400px] md:min-h-[500px]" mobile>
              {/* 单词和音标 */}
              <div className="text-center mb-6 md:mb-8">
                <motion.h1
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-2 md:mb-3 text-cyan-high"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {currentWord.word}
                </motion.h1>
                <p className="text-pink-300 font-mono text-base md:text-xl">
                  {currentWord.phonetic}
                </p>
              </div>

              {/* 播放按钮 */}
              <div className="flex justify-center mb-6 md:mb-8">
                <motion.button
                  onClick={handleReplay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-cyan-500/50
                    bg-cyan-500/10 flex items-center justify-center
                    hover:bg-cyan-500/20 hover:border-cyan-400
                    transition-all duration-200 mobile-touch-target
                    shadow-[0_0_20px_rgba(6,182,212,0.3)]
                    hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                >
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>

              {/* 题目提示 */}
              <div className="text-center mb-6 md:mb-8">
                <p className="text-sm font-mono text-cyan-300/60 mb-2">
                  :: 选择正确的中文释义 ::
                </p>
              </div>

              {/* 选项列表 */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {options.map((option, index) => {
                  let variant: 'primary' | 'secondary' | 'success' | 'danger' = 'secondary';
                  let disabled = false;

                  if (showResult) {
                    disabled = true;
                    if (option.isCorrect) {
                      variant = 'success';
                    } else if (selectedOption === index && !option.isCorrect) {
                      variant = 'danger';
                    }
                  } else if (selectedOption === index) {
                    variant = 'primary';
                  }

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleOptionClick(index)}
                      disabled={disabled}
                      whileHover={!showResult && selectedOption === null ? { scale: 1.02 } : {}}
                      whileTap={!showResult && selectedOption === null ? { scale: 0.98 } : {}}
                      className={`
                        w-full p-4 md:p-5 rounded-lg border-2 text-left
                        font-mono text-sm md:text-base transition-all duration-200
                        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                        ${variant === 'secondary'
                          ? 'border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-500/50 text-cyan-100'
                          : variant === 'success'
                          ? 'border-green-500 bg-green-500/20 text-green-100'
                          : variant === 'danger'
                          ? 'border-red-500 bg-red-500/20 text-red-100'
                          : 'border-pink-500/50 bg-pink-500/10 hover:bg-pink-500/20 text-pink-100'
                        }
                      `}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span className="text-xs md:text-sm font-bold opacity-70">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span>{option.text}</span>
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* 结果反馈 */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`mb-6 md:mb-8 p-4 border-2 rounded-lg text-center ${
                      isCorrect
                        ? 'border-green-500/50 bg-green-500/10'
                        : 'border-red-500/50 bg-red-500/10'
                    }`}
                  >
                    <div className={`font-mono text-base md:text-lg mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                      {isCorrect ? '[正确] 数据验证通过' : '[错误] 数据验证失败'}
                    </div>
                    {!isCorrect && (
                      <div className="text-sm md:text-base text-cyan-100">
                        正确答案: {currentWord.chinese_definition}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 下一步按钮 */}
              {showResult && (
                <CyberButton onClick={handleNext} variant="primary" className="w-full mobile">
                  [继续] 下一个
                </CyberButton>
              )}
            </CyberCard>
          </motion.div>
        </AnimatePresence>

        {currentIndex === total - 1 && showResult && (
          <div className="text-center text-xs font-mono text-cyan-300/50 mt-6 md:mt-8">
            [即将进入阶段C: 安全协议]
          </div>
        )}
      </div>
    </div>
  );
};
