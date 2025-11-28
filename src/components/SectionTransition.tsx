interface SectionTransitionProps {
  variant: 'cosmic-to-earth' | 'earth-to-cosmic' | 'earth-to-earth' | 'cosmic-to-dark-earth';
  className?: string;
}

const SectionTransition = ({ variant, className = '' }: SectionTransitionProps) => {
  const gradients = {
    'cosmic-to-earth': `linear-gradient(
      180deg,
      rgba(0,53,115,1) 0%,
      rgba(0,104,197,0.35) 40%,
      rgba(75,169,240,0.15) 70%,
      rgba(249,245,241,1) 100%
    )`,
    'earth-to-cosmic': `linear-gradient(
      180deg,
      rgba(249,245,241,1) 0%,
      rgba(193,126,84,0.12) 25%,
      rgba(0,104,197,0.25) 60%,
      rgba(0,53,115,1) 100%
    )`,
    'earth-to-earth': `linear-gradient(
      180deg,
      rgba(249,245,241,1) 0%,
      rgba(111,61,32,0.08) 30%,
      rgba(193,126,84,0.06) 70%,
      rgba(249,245,241,1) 100%
    )`,
    'cosmic-to-dark-earth': `linear-gradient(
      180deg,
      rgba(0,53,115,1) 0%,
      rgba(0,104,197,0.4) 30%,
      rgba(111,61,32,0.6) 70%,
      rgba(111,61,32,1) 100%
    )`,
  };

  return (
    <div 
      className={`relative w-full h-24 md:h-32 -mt-1 -mb-1 ${className}`}
      style={{ background: gradients[variant] }}
      aria-hidden="true"
    />
  );
};

export default SectionTransition;
