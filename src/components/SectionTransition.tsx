interface SectionTransitionProps {
  variant: 'cosmic-to-earth' | 'earth-to-cosmic' | 'earth-to-earth' | 'cosmic-to-dark-earth';
  className?: string;
}

const SectionTransition = ({ variant, className = '' }: SectionTransitionProps) => {
  const config = {
    'cosmic-to-earth': {
      gradient: `linear-gradient(180deg, rgba(0,53,115,0.12) 0%, rgba(0,53,115,0) 50%, rgba(211,133,79,0.06) 100%)`,
      height: 'h-6 md:h-8', // 24-32px
    },
    'earth-to-cosmic': {
      gradient: `linear-gradient(180deg, rgba(211,133,79,0.08) 0%, rgba(243,234,226,0.6) 40%, rgba(0,104,197,0.08) 100%)`,
      height: 'h-5 md:h-6', // 20-24px
    },
    'earth-to-earth': {
      gradient: `linear-gradient(180deg, rgba(211,133,79,0.06) 0%, rgba(243,234,226,0.4) 50%, rgba(211,133,79,0.04) 100%)`,
      height: 'h-4 md:h-5', // 16-20px
    },
    'cosmic-to-dark-earth': {
      gradient: `linear-gradient(180deg, rgba(0,53,115,0.15) 0%, rgba(111,61,32,0.12) 100%)`,
      height: 'h-6 md:h-8', // 24-32px
    },
  };

  const { gradient, height } = config[variant];

  return (
    <div 
      className={`relative w-full ${height} -mt-px ${className}`}
      style={{ background: gradient }}
      aria-hidden="true"
    />
  );
};

export default SectionTransition;
