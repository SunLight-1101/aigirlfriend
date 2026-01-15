import { motion } from 'framer-motion';

interface CyberCardProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'holographic';
  className?: string;
  mobile?: boolean;
}

export const CyberCard: React.FC<CyberCardProps> = ({
  children,
  variant = 'primary',
  className = '',
  mobile = false,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'glass-card-cyan';
      case 'secondary':
        return 'glass-card-pink';
      case 'holographic':
        return 'glass-card-holo';
      default:
        return 'glass-card';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        relative rounded-2xl overflow-hidden
        ${mobile ? 'p-4' : 'p-6'}
        ${getVariantClasses()}
        ${className}
      `}
    >
      {/* 细微的全息扫描线 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-[scanline_4s_linear_infinite]" />
      </div>

      {/* 顶部光晕效果 */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
