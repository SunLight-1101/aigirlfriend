import { motion } from 'framer-motion';

interface CyberButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDragEnter' | 'onDragLeave' | 'onDragOver' | 'onDrop'
  | 'onAnimationStart' | 'onAnimationComplete' | 'onAnimationEnd' | 'onUpdate' | 'onTap' | 'onPan' | 'onPanStart' | 'onPanEnd'
> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  glow?: boolean;
  glitch?: boolean;
  size?: 'sm' | 'md' | 'lg';
  mobile?: boolean;
}

export const CyberButton: React.FC<CyberButtonProps> = ({
  children,
  variant = 'primary',
  glow = true,
  glitch = false,
  size = 'md',
  mobile = false,
  className = '',
  disabled,
  ...props
}: CyberButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'text-white hover:text-cyan-400 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/20';
      case 'secondary':
        return 'text-white hover:text-pink-400 border-pink-500/50 hover:border-pink-400 hover:bg-pink-500/20';
      case 'danger':
        return 'text-white hover:text-red-400 border-red-500/50 hover:border-red-400 hover:bg-red-500/20';
      case 'success':
        return 'text-white hover:text-green-400 border-green-500/50 hover:border-green-400 hover:bg-green-500/20';
      default:
        return '';
    }
  };

  const getGlowClasses = () => {
    if (!glow) return '';
    switch (variant) {
      case 'primary':
        return 'hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]';
      case 'secondary':
        return 'hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]';
      case 'danger':
        return 'hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]';
      case 'success':
        return 'hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]';
      default:
        return '';
    }
  };

  const getSizeClasses = () => {
    if (mobile) {
      return 'min-h-[48px] px-6 py-4 text-base';
    }
    switch (size) {
      case 'sm':
        return 'min-h-[40px] px-4 py-2 text-sm';
      case 'lg':
        return 'min-h-[56px] px-8 py-4 text-lg';
      default:
        return 'min-h-[44px] px-6 py-3 text-sm';
    }
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      className={`
        relative font-mono font-semibold uppercase tracking-wider
        bg-white/5 backdrop-blur-md rounded-lg
        border transition-all duration-200 ease-out
        ${getVariantClasses()}
        ${getGlowClasses()}
        ${getSizeClasses()}
        ${glitch ? 'animate-glitch' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};
