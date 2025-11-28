interface SectionTransitionProps {
  variant: 'cosmic-to-earth' | 'earth-to-cosmic' | 'earth-to-earth' | 'cosmic-to-dark-earth';
  className?: string;
}

const SectionTransition = ({ variant, className = '' }: SectionTransitionProps) => {
  const config = {
    'cosmic-to-earth': {
      gradient: `linear-gradient(180deg, rgba(0,53,115,0.15) 0%, rgba(0,53,115,0) 100%)`,
      height: 'h-5 md:h-6', // 20-24px
    },
    'earth-to-cosmic': {
      gradient: `linear-gradient(180deg, rgba(249,245,241,0.8) 0%, rgba(0,104,197,0.12) 100%)`,
      height: 'h-4 md:h-5', // 16-20px
    },
    'earth-to-earth': {
      gradient: `linear-gradient(180deg, rgba(193,126,84,0.10) 0%, rgba(193,126,84,0) 100%)`,
      height: 'h-3 md:h-4', // 12-16px
    },
    'cosmic-to-dark-earth': {
      gradient: `linear-gradient(180deg, rgba(0,53,115,0.2) 0%, rgba(111,61,32,0.15) 100%)`,
      height: 'h-5 md:h-6', // 20-24px
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
