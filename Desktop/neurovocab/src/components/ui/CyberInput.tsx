import { motion } from 'framer-motion';

interface CyberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'primary' | 'terminal';
}

export const CyberInput: React.FC<CyberInputProps> = ({
  label,
  error,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'border-cyan-500/30 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)]';
      case 'terminal':
        return 'border-green-500/30 bg-green-500/5 font-mono text-green-400 focus:border-green-400';
      default:
        return '';
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-mono text-cyan-300">
          {label}
        </label>
      )}
      <motion.div
        whileFocus={{ scale: 1.01 }}
        className="relative"
      >
        <input
          className={`
            w-full px-4 py-3 text-white
            bg-white/5 backdrop-blur-md rounded-lg
            border-2 outline-none transition-all duration-200
            ${getVariantClasses()}
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </motion.div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-400 font-mono"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};
