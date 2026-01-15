import React from 'react';
import { motion } from 'framer-motion';
import { CyberButton, CyberCard } from '../components/ui';
import { useAppStore } from '../store/appStore';
import { playSound } from '../utils/speech';

export const SettingsPage: React.FC = () => {
  const { dailyGoal, setDailyGoal, initializeDailySession, words, setCurrentStage, getLearnedWords } = useAppStore();
  const [tempGoal, setTempGoal] = React.useState(dailyGoal.toString());

  const handleStart = () => {
    const goal = parseInt(tempGoal);
    if (isNaN(goal) || goal < 1 || goal > 50) {
      alert('请输入有效的目标数量 (1-50)');
      return;
    }
    playSound('click');
    setDailyGoal(goal);
    initializeDailySession();
  };

  const handleGoToArchive = () => {
    playSound('click');
    setCurrentStage('archive');
  };

  const availableWords = words.filter(
    w => w.status === 'unlearned' || w.status === 'learning'
  );

  const learnedCount = getLearnedWords().length;

  return (
    <div className="min-h-screen cyber-grid p-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg"
      >
        {/* 标题 */}
        <motion.h1
          className="text-5xl font-bold text-center mb-2 text-cyan-400 text-cyan-high"
          animate={{ opacity: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          NEUROVOCAB
        </motion.h1>
        <p className="text-center text-pink-400 mb-8 font-mono text-sm">
          {'>'} IELTS EDITION v2.0
        </p>

        {/* 设置卡片 */}
        <CyberCard variant="holographic">
          <h2 className="text-xl font-bold mb-6 text-cyan-400">系统设置</h2>

          {/* 每日目标设置 */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-mono text-cyan-300/80">
              每日下载配额 (单词数)
            </label>
            <div className="flex gap-4 items-center">
              <input
                type="number"
                min="1"
                max="50"
                value={tempGoal}
                onChange={(e) => setTempGoal(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-md rounded-lg
                  border-2 border-cyan-500/30 font-mono text-cyan-400 text-center text-xl
                  focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)]
                  outline-none transition-all"
              />
              <span className="text-sm font-mono text-cyan-300/60">WORDS/DAY</span>
            </div>
          </div>

          {/* 系统信息 */}
          <div className="mb-6 p-4 glass-card rounded-lg">
            <div className="text-sm font-mono text-cyan-300/70 mb-2">系统状态</div>
            <div className="flex justify-between text-sm font-mono mb-1">
              <span>可用词汇:</span>
              <span className="text-green-400">{availableWords.length}</span>
            </div>
            <div className="flex justify-between text-sm font-mono mb-1">
              <span>已掌握:</span>
              <span className="text-pink-400">
                {words.filter(w => w.status === 'mastered').length}
              </span>
            </div>
            <div className="flex justify-between text-sm font-mono">
              <span>已学习:</span>
              <span className="text-cyan-300">
                {learnedCount}
              </span>
            </div>
          </div>

          {/* 开始按钮 */}
          <CyberButton
            onClick={handleStart}
            variant="primary"
            className="w-full mb-3"
          >
            [初始化神经连接]
          </CyberButton>

          {/* 历史档案按钮 */}
          <CyberButton
            onClick={handleGoToArchive}
            variant="secondary"
            className="w-full"
          >
            [进入] 神经档案
          </CyberButton>
        </CyberCard>

        {/* 底部状态 */}
        <div className="mt-8 text-center">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-xs font-mono text-cyan-300/50"
          >
            :: 等待用户输入 ::
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
