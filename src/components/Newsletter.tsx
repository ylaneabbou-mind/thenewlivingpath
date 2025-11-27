import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log("Newsletter signup:", email); };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-stellar" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bleu-atmosphere/20 rounded-full blur-[150px]" />
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
            <Input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-ivoire-cosmique/10 border-ivoire-cosmique/30 text-ivoire-cosmique placeholder:text-ivoire-cosmique/50 focus:border-ocre-clair rounded-lg" required />
            <Button type="submit" size="lg" className="bg-gradient-solar text-white shadow-glow-gold hover:shadow-lg transition-all duration-500 rounded-lg px-8">
              Join the Circle
            </Button>
          </form>
          <p className="text-sm text-ivoire-cosmique/60 font-light">Your journey is sacred. We honor your inbox with care.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
