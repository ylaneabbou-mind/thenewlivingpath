const About = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Cosmic section background */}
      <div className="absolute inset-0 bg-gradient-stellar" />
      
      {/* Soft glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bleu-atmosphere/20 rounded-full blur-[200px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-ivoire-cosmique/10 to-bleu-atmosphere/10 border border-ivoire-cosmique/20 shadow-glow-blue overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-ivoire-cosmique/40 font-cormorant text-lg">
                Your Image
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-ocre-solaire/30 blur-2xl" />
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
            
            <div className="space-y-5 text-ivoire-cosmique/80 leading-relaxed">
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
              <div className="w-12 h-px bg-ocre-solaire/50" />
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
