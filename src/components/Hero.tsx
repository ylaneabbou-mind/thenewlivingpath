import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-bleu-cosmique/5" />
      <div className="absolute top-32 right-1/4 w-[500px] h-[500px] bg-bleu-atmosphere/10 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-32 left-1/4 w-[400px] h-[400px] bg-ocre-solaire/15 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      
      <div className="container relative z-10 px-6 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="w-44 h-44 mx-auto mb-10 rounded-full bg-gradient-to-br from-ocre-clair/30 to-brun-racine/20 border-2 border-brun-racine/30 shadow-soft overflow-hidden animate-float">
            <div className="w-full h-full flex items-center justify-center text-brun-racine/40 text-sm font-cormorant">Your Portrait</div>
          </div>
          <p className="text-lg md:text-xl font-cormorant text-sable-chaud tracking-[0.2em] uppercase">Transformational Guidance</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight leading-tight">
            <span className="text-foreground">Grounded in Earth,</span><br />
            <span className="text-gradient-stellar">Aligned with the Stars</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Guiding you to realign with your true nature through clarity, presence, and the wisdom of transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="group text-lg px-8 py-6 bg-gradient-solar text-white shadow-glow-gold hover:shadow-lg transition-all duration-500 rounded-lg">
              Begin Your Journey<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-brun-racine/30 text-brun-racine hover:border-brun-racine hover:bg-brun-racine/5 rounded-lg">
              Discover the Path
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gris-lune to-transparent" />
    </section>
  );
};

export default Hero;
