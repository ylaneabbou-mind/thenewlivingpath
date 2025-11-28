const About = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Cosmic Stellar Flow background */}
      <div className="absolute inset-0 bg-gradient-stellar" />
      
      {/* Cosmic glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-bleu-atmosphere/25 rounded-full blur-[200px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-bleu-profond/30 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-ocre-solaire/15 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder - floating card effect */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-ivoire-cosmique/10 backdrop-blur-md border border-ivoire-cosmique/20 shadow-glow-blue overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-ivoire-cosmique/50 font-cormorant text-lg">
                Your Image
              </div>
            </div>
            {/* Decorative glowing accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-ocre-solaire/40 blur-3xl animate-glow-pulse" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-bleu-atmosphere/30 blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-ivoire-cosmique">
            <p className="text-sm font-cormorant tracking-[0.25em] uppercase text-ocre-clair">
              About Ylane
            </p>
            
            <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
              A Guide Between
              <span className="block text-ocre-clair">Worlds</span>
            </h2>
            
            <div className="space-y-5 text-ivoire-cosmique/85 leading-relaxed">
              <p className="font-cormorant text-xl italic text-ocre-clair/90">
                Rooted in the earth, reaching for the infinite.
              </p>
              
              <p>
                With years of deep inner work and guided transformation, I have walked 
                the path of remembrance — learning to honor both the grounded wisdom 
                of the body and the expansive clarity of cosmic vision.
              </p>
              
              <p>
                My purpose is to hold space for your own journey home. Through presence, 
                intuition, and sacred practices, I guide you to reconnect with the 
                truth that lives within you — waiting to be remembered.
              </p>
              
              <p>
                Whether you seek clarity in times of transition, alignment with your 
                life's purpose, or simply a deeper sense of peace, you are welcome here.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-px bg-ocre-solaire/60" />
              <span className="text-ocre-clair font-cormorant italic">
                In service to your awakening
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
