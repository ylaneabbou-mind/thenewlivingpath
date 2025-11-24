const Mission = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mystic/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
            The Journey Within
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            <p className="italic">
              "In the space between worlds, where consciousness meets cosmos, 
              transformation awaits those ready to remember their truth."
            </p>
            
            <p>
              We are here to guide seekers through the veils of illusion, 
              awakening the dormant wisdom that lives within. Through alignment 
              with universal frequencies and the courage to face our shadows, 
              we birth a new paradigm of existence.
            </p>
            
            <p className="text-primary font-normal">
              This is not just healing. This is remembering who you truly are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
