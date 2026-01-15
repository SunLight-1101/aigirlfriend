import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CyberButton, CyberCard } from '../components/ui';
import { useAppStore } from '../store/appStore';
import { playSound } from '../utils/speech';

export const CompletePage: React.FC = () => {
  const {
    resetDailySession,
    loadNextBatch,
    getRemainingWordsCount,
    todayWords,
    words,
  } = useAppStore();

  const [isOverclocking, setIsOverclocking] = useState(false);
  const [showOverclockEffect, setShowOverclockEffect] = useState(false);

  const handleReset = () => {
    playSound('click');
    resetDailySession();
  };

  const handleOverclock = () => {
    playSound('success');
    setIsOverclocking(true);
    setShowOverclockEffect(true);

    // 超频动画效果
    setTimeout(() => {
      const success = loadNextBatch();
      setIsOverclocking(false);

      if (!success) {
        // 没有更多单词了
        playSound('error');
      }
    }, 1500);
  };

  const masteredToday = todayWords.filter(w => w.status === 'mastered').length;
  const totalMastered = words.filter(w => w.status === 'mastered').length;
  const totalWords = words.length;
  const progressPercentage = ((totalMastered / totalWords) * 100).toFixed(1);
  const remainingWords = getRemainingWordsCount();

  return (
    <div className="min-h-screen cyber-grid p-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg"
      >
        {/* 超频效果覆盖层 */}
        <AnimatePresence>
          {showOverclockEffect && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onAnimationComplete={() => setShowOverclockEffect(false)}
              className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.5, 0], opacity: [1, 1, 0] }}
                transition={{ duration: 1.5 }}
                className="text-6xl md:text-8xl font-bold text-pink-400 text-pink-high"
              >
                OVERCLOCK
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 标题 */}
        <motion.h1
          className="text-4xl font-bold text-center mb-2 text-green-400 text-green-high"
          animate={{ opacity: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          系统完成
        </motion.h1>
        <p className="text-center text-pink-400 mb-8 font-mono text-sm">
          {'>'} SESSION COMPLETE
        </p>

        {/* 完成卡片 */}
        <CyberCard variant="holographic">
          <div className="text-center space-y-6">
            {/* 状态图标 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-24 h-24 mx-auto rounded-full border-4 border-green-500/50
                flex items-center justify-center"
            >
              <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            {/* 统计信息 */}
            <div className="space-y-4">
              <div className="p-4 glass-card rounded-lg">
                <div className="text-sm font-mono text-cyan-300/70 mb-1">今日掌握</div>
                <div className="text-3xl font-bold text-green-400">
                  {masteredToday} / {todayWords.length}
                </div>
              </div>

              <div className="p-4 glass-card rounded-lg">
                <div className="text-sm font-mono text-cyan-300/70 mb-1">总进度</div>
                <div className="text-2xl font-bold text-cyan-400">
                  {totalMastered} / {totalWords} ({progressPercentage}%)
                </div>
              </div>

              {/* 进度条 */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-pink-400 via-cyan-400 to-green-400"
                />
              </div>
            </div>

            {/* 状态等级 */}
            <div className="flex justify-center gap-2">
              <span className="px-3 py-1 text-xs font-mono border border-green-500/30 text-green-400 bg-green-500/10 rounded-lg">
                LEVEL: {Math.floor(totalMastered / 10) + 1}
              </span>
              <span className="px-3 py-1 text-xs font-mono border border-cyan-500/30 text-cyan-400 bg-cyan-500/10 rounded-lg">
                RANK: {totalMastered >= 20 ? 'ELITE' : totalMastered >= 10 ? 'ADEPT' : 'NOVICE'}
              </span>
            </div>
          </div>
        </CyberCard>

        {/* 超频按钮 */}
        {remainingWords > 0 && (
          <div className="mt-8">
            <motion.button
              onClick={handleOverclock}
              disabled={isOverclocking}
              whileHover={!isOverclocking ? { scale: 1.02 } : {}}
              whileTap={!isOverclocking ? { scale: 0.98 } : {}}
              className={`
                w-full py-4 px-6 rounded-lg font-mono text-base md:text-lg
                border-2 transition-all duration-200 relative overflow-hidden
                ${isOverclocking
                  ? 'opacity-70 cursor-wait border-pink-500/30'
                  : 'border-pink-500/50 hover:border-pink-400 cursor-pointer'
                }
              `}
            >
              {/* 背景发光效果 */}
              {!isOverclocking && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                />
              )}

              {/* 扫描线效果 */}
              {!isOverclocking && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    y: ['-100%', '100%'],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="h-1 bg-white/20" />
                </motion.div>
              )}

              <span className="relative z-10 flex items-center justify-center gap-2 text-pink-300">
                {isOverclocking ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-pink-400 border-t-transparent rounded-full"
                    />
                    <span>LOADING NEXT BLOCK...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>[超频] INITIALIZE OVERCLOCK</span>
                  </>
                )}
              </span>
            </motion.button>
            <div className="text-center mt-2 text-xs font-mono text-pink-400/60">
              [剩余单词: {remainingWords} | 加载下一批 {Math.min(20, remainingWords)} 个]
            </div>
          </div>
        )}

        {/* 返回按钮 */}
        <div className="mt-6">
          <CyberButton onClick={handleReset} variant="primary" className="w-full">
            [返回] 主菜单
          </CyberButton>
        </div>

        {/* 底部状态 */}
        <div className="mt-8 text-center">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs font-mono text-green-400/50"
          >
            :: 会话已保存 ::
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
