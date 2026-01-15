import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { IeltsWord } from '../data/ieltsWords';
import { ieltsWordsData } from '../data/ieltsWords';

export type Stage = 'settings' | 'learn' | 'review' | 'dictation' | 'complete' | 'archive';

export interface WordProgress extends IeltsWord {
  reviewCount: number;
  lastReviewed?: Date;
}

export interface AppState {
  // 设置
  dailyGoal: number;
  setDailyGoal: (goal: number) => void;

  // 当前状态
  currentStage: Stage;
  setCurrentStage: (stage: Stage) => void;

  // 学习进度
  words: WordProgress[];
  todayWords: WordProgress[];
  currentIndex: number;

  // 复习评分 (使用对象而非 Map，便于序列化)
  reviewRatings: Record<string, number>;

  // 听写重试队列
  retryQueue: WordProgress[];
  addToRetryQueue: (word: WordProgress) => void;
  clearRetryQueue: () => void;

  // 操作方法
  initializeDailySession: () => void;
  updateWordStatus: (wordId: string, status: IeltsWord['status']) => void;
  addReviewRating: (wordId: string, rating: number) => void;
  nextWord: () => void;
  prevWord: () => void;
  resetDailySession: () => void;
  getTodayProgress: () => { completed: number; total: number };
  getLearnedWords: () => WordProgress[];

  // 超频模式 - 加载下一批
  getRemainingWordsCount: () => number;
  loadNextBatch: () => boolean; // 返回是否成功加载
}

const initialWords: WordProgress[] = ieltsWordsData.map(word => ({
  ...word,
  reviewCount: 0,
}));

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // 初始设置
      dailyGoal: 20,
      currentStage: 'settings',
      words: initialWords,
      todayWords: [],
      currentIndex: 0,
      reviewRatings: {},
      retryQueue: [],

      setDailyGoal: (goal) => set({ dailyGoal: goal }),

      setCurrentStage: (stage) => set({ currentStage: stage }),

      initializeDailySession: () => {
        const { dailyGoal, words } = get();
        const availableWords = words.filter(
          w => w.status === 'unlearned' || w.status === 'learning'
        );
        const todayWords = availableWords.slice(0, dailyGoal);
        set({
          todayWords,
          currentIndex: 0,
          currentStage: 'learn',
        });
      },

      updateWordStatus: (wordId, status) => {
        set((state) => ({
          words: state.words.map((w) =>
            w.word === wordId ? { ...w, status, lastReviewed: new Date() } : w
          ),
          todayWords: state.todayWords.map((w) =>
            w.word === wordId ? { ...w, status, lastReviewed: new Date() } : w
          ),
        }));
      },

      addReviewRating: (wordId, rating) => {
        set((state) => ({
          reviewRatings: { ...state.reviewRatings, [wordId]: rating },
          words: state.words.map((w) =>
            w.word === wordId ? { ...w, reviewCount: w.reviewCount + 1 } : w
          ),
        }));
      },

      addToRetryQueue: (word) => {
        set((state) => ({
          retryQueue: [...state.retryQueue, word],
        }));
      },

      clearRetryQueue: () => set({ retryQueue: [] }),

      nextWord: () => {
        const { currentIndex, todayWords, retryQueue, currentStage } = get();
        const isLastWord = currentIndex === todayWords.length - 1;

        console.log('nextWord called - currentIndex:', currentIndex, 'todayWords.length:', todayWords.length, 'currentStage:', currentStage, 'isLastWord:', isLastWord, 'retryQueue.length:', retryQueue.length);

        if (isLastWord && retryQueue.length === 0) {
          // 当前阶段完成，进入下一阶段
          switch (currentStage) {
            case 'learn':
              set({ currentStage: 'review', currentIndex: 0 });
              break;
            case 'review':
              set({ currentStage: 'dictation', currentIndex: 0 });
              break;
            case 'dictation':
              set({ currentStage: 'complete' });
              break;
            default:
              set({ currentStage: 'complete' });
          }
        } else if (isLastWord && retryQueue.length > 0) {
          // 进入重试队列
          console.log('Switching to retry queue');
          set({
            todayWords: retryQueue,
            currentIndex: 0,
            retryQueue: [],
          });
        } else {
          console.log('Moving to next word, currentIndex:', currentIndex + 1);
          set({ currentIndex: currentIndex + 1 });
        }
      },

      prevWord: () => {
        const { currentIndex } = get();
        if (currentIndex > 0) {
          set({ currentIndex: currentIndex - 1 });
        }
      },

      resetDailySession: () => {
        set({
          todayWords: [],
          currentIndex: 0,
          reviewRatings: {},
          retryQueue: [],
          currentStage: 'settings',
        });
      },

      getTodayProgress: () => {
        const state = get();
        const completed = state.currentIndex;
        const total = state.todayWords.length;
        return { completed, total };
      },

      getLearnedWords: () => {
        const state = get();
        return state.words.filter(
          w => w.status === 'learning' || w.status === 'reviewing' || w.status === 'mastered'
        );
      },

      // 获取剩余未学单词数量
      getRemainingWordsCount: () => {
        const { words } = get();
        return words.filter(
          w => w.status === 'unlearned' || w.status === 'learning'
        ).length;
      },

      // 超频模式：加载下一批单词
      loadNextBatch: () => {
        const { dailyGoal, words } = get();

        // 获取未学单词（排除当前批次和已学单词）
        const availableWords = words.filter(
          w => w.status === 'unlearned' || w.status === 'learning'
        );

        if (availableWords.length === 0) {
          return false; // 没有更多单词了
        }

        // 取下一批单词
        const nextBatch = availableWords.slice(0, dailyGoal);

        set({
          todayWords: nextBatch,
          currentIndex: 0,
          currentStage: 'learn',
          reviewRatings: {},
          retryQueue: [],
        });

        return true;
      },
    }),
    {
      name: 'neurovocab-storage',
      partialize: (state) => ({
        dailyGoal: state.dailyGoal,
        words: state.words,
        todayWords: state.todayWords,
        currentIndex: state.currentIndex,
        currentStage: state.currentStage,
        reviewRatings: state.reviewRatings,
        retryQueue: state.retryQueue,
      }),
    }
  )
);
