import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Cosmic background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic/20 via-background to-mystic/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-bold">
            Join the
            <span className="block mt-2 bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Circle
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Receive monthly transmissions, sacred offerings, and invitations to 
            journey deeper into consciousness
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-secondary/50 border-primary/30 focus:border-primary"
              required
            />
            <Button type="submit" size="lg" className="shadow-glow hover:shadow-cosmic transition-all duration-500">
              Enter the Circle
            </Button>
          </form>

          <p className="text-sm text-muted-foreground/70">
            Your energy is sacred. We honor your privacy with reverence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
