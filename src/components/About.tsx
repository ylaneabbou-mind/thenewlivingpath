const About = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative group animate-fade-in">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 to-mystic/20 border border-primary/30 overflow-hidden shadow-cosmic">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground/50">
                Your Photo
              </div>
            </div>
            {/* Decorative glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-cosmic/20 rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Story */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              A Bridge Between
              <span className="block mt-2 bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                Realms
              </span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For over a decade, I have walked between worlds—studying ancient wisdom, 
                modern psychology, and the quantum field of consciousness. My path has been 
                one of deep surrender and radical transformation.
              </p>
              
              <p>
                Through initiations in sacred temples, nights beneath star-filled skies, 
                and moments of profound stillness, I discovered that true healing comes not 
                from fixing what is broken, but from remembering what has always been whole.
              </p>
              
              <p className="text-foreground font-normal">
                Now, I serve as a guide for those ready to step into their highest alignment—
                holding space for the sacred unfolding that happens when we dare to see ourselves 
                as we truly are: infinite, luminous, and free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
