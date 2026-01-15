import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
  variant?: 'upload' | 'download' | 'system';
  showPercentage?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  variant = 'system',
  showPercentage = true,
}) => {
  const getVariantColors = () => {
    switch (variant) {
      case 'upload':
        return { from: 'from-green-400', to: 'to-cyan-400' };
      case 'download':
        return { from: 'from-cyan-400', to: 'to-pink-400' };
      case 'system':
        return { from: 'from-pink-400', to: 'to-green-400' };
      default:
        return { from: 'from-cyan-400', to: 'to-cyan-400' };
    }
  };

  const colors = getVariantColors();

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-mono text-cyan-300">{label}</span>
          {showPercentage && (
            <span className="text-sm font-mono text-green-300">
              {progress.toFixed(1)}%
            </span>
          )}
        </div>
      )}
      <div className="relative h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${colors.from} ${colors.to} rounded-full relative`}
        >
          {/* 闪光效果 */}
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>

      {/* 状态指示器 */}
      <div className="flex items-center gap-2 mt-2">
        <motion.div
          animate={progress >= 100 ? { opacity: 1 } : { opacity: [0.3, 1, 0.3] }}
          transition={progress >= 100 ? { duration: 0.3 } : { duration: 1, repeat: Infinity }}
          className={`w-2 h-2 rounded-full ${progress >= 100 ? 'bg-green-400' : 'bg-pink-400'}`}
        />
        <span className="text-xs font-mono text-white/50">
          {progress >= 100 ? 'COMPLETE' : 'PROCESSING...'}
        </span>
      </div>
    </div>
  );
};
