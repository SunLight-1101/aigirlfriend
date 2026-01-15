import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CyberButton, CyberCard } from '../components/ui';
import { useAppStore } from '../store/appStore';
import { playSound, speakWord } from '../utils/speech';
import type { WordProgress } from '../store/appStore';

export const ArchivePage: React.FC = () => {
  const { getLearnedWords, setCurrentStage } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWord, setSelectedWord] = useState<WordProgress | null>(null);

  const learnedWords = getLearnedWords();

  // 过滤搜索结果
  const filteredWords = useMemo(() => {
    if (!searchQuery.trim()) return learnedWords;
    const query = searchQuery.toLowerCase();
    return learnedWords.filter(
      word =>
        word.word.toLowerCase().includes(query) ||
        word.chinese_definition.includes(query) ||
        word.definition.toLowerCase().includes(query)
    );
  }, [learnedWords, searchQuery]);

  // 状态统计
  const stats = useMemo(() => {
    return {
      learning: learnedWords.filter(w => w.status === 'learning').length,
      reviewing: learnedWords.filter(w => w.status === 'reviewing').length,
      mastered: learnedWords.filter(w => w.status === 'mastered').length,
      total: learnedWords.length
    };
  }, [learnedWords]);

  const handleBackToSettings = () => {
    playSound('click');
    setCurrentStage('settings');
  };

  const handleWordClick = (word: WordProgress) => {
    playSound('click');
    setSelectedWord(word);
  };

  const handleCloseModal = () => {
    playSound('click');
    setSelectedWord(null);
  };

  const handleSpeak = (word: string) => {
    playSound('click');
    speakWord(word);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'learning':
        return 'border-yellow-500/30 bg-yellow-500/10 text-yellow-300';
      case 'reviewing':
        return 'border-pink-500/30 bg-pink-500/10 text-pink-300';
      case 'mastered':
        return 'border-green-500/30 bg-green-500/10 text-green-300';
      default:
        return '';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'learning':
        return '学习中';
      case 'reviewing':
        return '复习中';
      case 'mastered':
        return '已掌握';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen cyber-grid p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* 标题和返回按钮 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4 md:gap-0">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 text-cyan-high mb-1">
              {'>'} 神经档案
            </h1>
            <p className="text-xs md:text-sm font-mono text-cyan-300/60">
              NEURAL ARCHIVE :: 已学习词汇库
            </p>
          </div>
          <CyberButton onClick={handleBackToSettings} variant="secondary" mobile>
            [返回] 主菜单
          </CyberButton>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          <CyberCard variant="primary" className="text-center" mobile>
            <div className="text-xl md:text-2xl font-bold text-cyan-400">{stats.total}</div>
            <div className="text-xs md:text-sm font-mono text-cyan-300/70">总计</div>
          </CyberCard>
          <CyberCard variant="secondary" className="text-center" mobile>
            <div className="text-xl md:text-2xl font-bold text-yellow-300">{stats.learning}</div>
            <div className="text-xs md:text-sm font-mono text-yellow-300/70">学习中</div>
          </CyberCard>
          <CyberCard variant="secondary" className="text-center" mobile>
            <div className="text-xl md:text-2xl font-bold text-pink-300">{stats.reviewing}</div>
            <div className="text-xs md:text-sm font-mono text-pink-300/70">复习中</div>
          </CyberCard>
          <CyberCard variant="holographic" className="text-center" mobile>
            <div className="text-xl md:text-2xl font-bold text-green-400">{stats.mastered}</div>
            <div className="text-xs md:text-sm font-mono text-green-300/70">已掌握</div>
          </CyberCard>
        </div>

        {/* 搜索框 */}
        <div className="mb-4 md:mb-6">
          <input
            type="text"
            placeholder="搜索单词、中文释义或英文定义..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 md:py-3 bg-white/5 backdrop-blur-md rounded-lg
              border-2 border-cyan-500/30 font-mono text-white
              focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)]
              outline-none transition-all text-sm md:text-base"
          />
        </div>

        {/* 单词列表 */}
        <div className="space-y-2 md:space-y-3">
          <AnimatePresence mode="wait">
            {filteredWords.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 md:py-12"
              >
                <p className="text-sm md:text-lg text-cyan-300/60 mb-2">
                  未找到匹配的词汇
                </p>
                <p className="text-xs md:text-sm font-mono text-cyan-300/40">
                  请尝试其他搜索关键词
                </p>
              </motion.div>
            ) : (
              filteredWords.map((word: WordProgress, index: number) => (
                <motion.div
                  key={word.word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                >
                  <div onClick={() => handleWordClick(word)} className="cursor-pointer">
                    <CyberCard
                      variant="primary"
                      className="hover:border-cyan-400 transition-all"
                    >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 md:gap-3 mb-2">
                          <h3 className="text-lg md:text-xl font-bold text-cyan-400">{word.word}</h3>
                          <span className="text-xs md:text-sm font-mono text-pink-300">{word.phonetic}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base">
                          <span className="text-cyan-100 truncate">{word.chinese_definition}</span>
                          <span className={`collocation-tag px-2 py-0.5 md:px-3 py-1 rounded text-xs ${getStatusColor(word.status)}`}>
                            {getStatusLabel(word.status)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeak(word.word);
                        }}
                        className="w-10 h-10 md:w-10 md:h-10 shrink-0 rounded-lg border border-cyan-500/30
                          bg-cyan-500/10 flex items-center justify-center
                          hover:bg-cyan-500/20 transition-all"
                      >
                        <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </CyberCard>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 单词详情弹窗 */}
      <AnimatePresence>
        {selectedWord && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50
              flex items-end md:items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <CyberCard variant="holographic" mobile>
                {/* 单词和音标 */}
                <div className="text-center mb-4 md:mb-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {selectedWord.word}
                  </h2>
                  <p className="text-sm md:text-lg font-mono text-pink-300 mb-3">
                    {selectedWord.phonetic}
                  </p>
                  <div className={`collocation-tag inline-block px-2 md:px-3 py-1 rounded text-sm`}>
                    复习次数: {selectedWord.reviewCount}
                  </div>
                </div>

                {/* 播放按钮 */}
                <div className="flex justify-center mb-4 md:mb-6">
                  <button
                    onClick={() => handleSpeak(selectedWord.word)}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-cyan-500/50
                      bg-cyan-500/10 flex items-center justify-center
                      hover:bg-cyan-500/20 hover:border-cyan-400
                      transition-all duration-200"
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* 英文释义 */}
                <div className="mb-2 md:mb-3">
                  <div className="text-xs font-mono text-cyan-300/70 mb-1">:: DEFINITION ::</div>
                  <p className="text-sm md:text-lg text-white">{selectedWord.definition}</p>
                </div>

                {/* 中文释义 */}
                <div className="mb-2 md:mb-3">
                  <div className="text-xs font-mono text-cyan-300/70 mb-1">:: 中文释义 ::</div>
                  <p className="text-sm md:text-lg text-cyan-100">{selectedWord.chinese_definition}</p>
                </div>

                {/* 搭配短语 - 新结构 */}
                <div className="mb-2 md:mb-3">
                  <div className="text-xs font-mono text-pink-300/70 mb-2">:: 搭配短语 ::</div>
                  <div className="space-y-1.5 md:space-y-2">
                    {selectedWord.collocations.map((collocation: { phrase: string; translation: string }, idx: number) => (
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

                {/* 同义词 - 新结构 */}
                <div className="mb-2 md:mb-3">
                  <div className="text-xs font-mono text-pink-300/70 mb-2">:: SYNONYMS ::</div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {selectedWord.synonyms.map((synonym: { word: string; translation: string }, idx: number) => (
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
                <div className="mb-4 md:mb-6">
                  <div className="text-xs font-mono text-green-300/70 mb-1">:: EXAMPLE ::</div>
                  <p className="text-sm md:text-base text-white mb-1">{selectedWord.example_sentence}</p>
                  <p className="text-green-200 text-xs md:text-sm">{selectedWord.example_translation}</p>
                </div>

                {/* 关闭按钮 */}
                <CyberButton onClick={handleCloseModal} variant="primary" className="w-full mobile">
                  [关闭] 详情
                </CyberButton>
              </CyberCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
