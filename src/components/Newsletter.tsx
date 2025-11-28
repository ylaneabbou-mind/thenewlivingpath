import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log("Newsletter signup:", email); };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Cosmic Stellar Flow background */}
      <div className="absolute inset-0 bg-gradient-stellar" />
      
      {/* Deep cosmic glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-bleu-atmosphere/30 rounded-full blur-[200px] animate-glow-pulse" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-bleu-profond/40 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-ocre-solaire/15 rounded-full blur-[130px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      
      {/* Subtle star effect */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '120px 120px, 180px 180px' }} />
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <p className="text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase">Stay Connected</p>
          
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-ivoire-cosmique leading-tight">
            Join the<span className="block mt-2 text-ocre-clair">Inner Circle</span>
          </h2>
          
          <p className="text-xl text-ivoire-cosmique/80 max-w-xl mx-auto leading-relaxed font-light">
            Receive monthly reflections, practices, and invitations to deepen your journey of transformation
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="your@email.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-ivoire-cosmique/15 backdrop-blur-sm border-ivoire-cosmique/30 text-ivoire-cosmique placeholder:text-ivoire-cosmique/50 focus:border-ocre-clair focus:ring-ocre-clair/30 rounded-lg" 
              required 
            />
            <Button type="submit" size="lg" className="bg-gradient-solar text-white shadow-glow-gold hover:shadow-lg hover:scale-105 transition-all duration-500 rounded-lg px-8">
              Join the Circle
            </Button>
          </form>
          
          <p className="text-sm text-ivoire-cosmique/60 font-light">Your journey is sacred. We honor your inbox with care.</p>
        </div>
      </div>
      
      {/* Transition to grounded footer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brun-racine to-transparent" />
    </section>
  );
};

export default Newsletter;
