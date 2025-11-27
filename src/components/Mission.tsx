const Mission = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-brun-racine/5" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-10 animate-fade-in">
          <p className="text-sm font-cormorant text-sable-chaud tracking-[0.25em] uppercase">The Vision</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight">
            Where Earth Meets<span className="block mt-2 text-gradient-stellar">Infinite Possibility</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
            <p className="font-cormorant text-2xl italic text-brun-racine">"True transformation begins when we remember both our roots and our wings."</p>
            <p>Ylane creates a sacred space where you reconnect with your authentic self — grounded in the wisdom of the body, yet open to the vast possibilities that await when you align with your highest vision.</p>
            <p className="text-ocre-solaire font-medium">This is not about becoming someone new. It's about remembering who you've always been.</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gris-lune" />
    </section>
  );
};

export default Mission;
