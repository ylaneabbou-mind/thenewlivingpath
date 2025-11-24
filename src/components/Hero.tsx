import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-background to-cosmic/20" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-cosmic-glow/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      
      <div className="container relative z-10 px-6 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Portrait placeholder - will be replaced with actual image */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-cosmic/20 border-2 border-primary/30 shadow-glow overflow-hidden animate-float">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 text-sm">
              Your Portrait
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-gold bg-clip-text text-transparent">
              Visionary Guide
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Awakening consciousness through transformation, alignment, and the wisdom of the cosmos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="group text-lg px-8 py-6 shadow-cosmic hover:shadow-glow transition-all duration-500">
              Book a Session
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/10">
              Discover the Work
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
