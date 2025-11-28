const Mission = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Grounded earth background with subtle texture */}
      <div className="absolute inset-0 bg-ivoire-cosmique" />
      <div className="absolute inset-0 bg-gradient-to-b from-brun-racine/8 via-transparent to-sable-chaud/5" />
      
      {/* Warm glow accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-ocre-clair/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-terre-claire/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-10 animate-fade-in">
          <p className="text-sm font-cormorant text-sable-chaud tracking-[0.25em] uppercase">The Vision</p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-brun-racine leading-tight">
            Where Earth Meets<span className="block mt-2 text-gradient-stellar">Infinite Possibility</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
            <p className="font-cormorant text-2xl italic text-brun-racine">"True transformation begins when we remember both our roots and our wings."</p>
            <p>Ylane creates a sacred space where you reconnect with your authentic self — grounded in the wisdom of the body, yet open to the vast possibilities that await when you align with your highest vision.</p>
            <p className="text-ocre-solaire font-medium">This is not about becoming someone new. It's about remembering who you've always been.</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Mission;
