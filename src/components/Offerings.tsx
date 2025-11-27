import { Button } from "@/components/ui/button";
import { Compass, Sparkles, Users, Heart } from "lucide-react";

const offerings = [
  {
    icon: Compass,
    title: "Vision Alignment",
    subtitle: "1:1 Guidance Sessions",
    description: "Deep transformational sessions to clarify your path, release what no longer serves, and align with your authentic direction.",
    cta: "Learn More",
    accent: "cosmic" as const,
  },
  {
    icon: Sparkles,
    title: "Soul Readings",
    subtitle: "Intuitive Clarity",
    description: "Receive insight and guidance from the field of infinite wisdom. Understand the deeper patterns shaping your journey.",
    cta: "Discover",
    accent: "earth" as const,
  },
  {
    icon: Users,
    title: "Group Journeys",
    subtitle: "Collective Transformation",
    description: "Join intimate gatherings where we explore consciousness together, supported by the power of collective intention.",
    cta: "View Programs",
    accent: "cosmic" as const,
  },
  {
    icon: Heart,
    title: "Embodiment Work",
    subtitle: "Grounding Practices",
    description: "Reconnect with the wisdom of your body through somatic practices, breathwork, and earth-based rituals.",
    cta: "Explore",
    accent: "earth" as const,
  },
];

const Offerings = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-4 animate-fade-in">
          <p className="text-sm font-cormorant text-sable-chaud tracking-[0.25em] uppercase">
            Sacred Offerings
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Pathways to
            <span className="text-gradient-solar"> Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Each offering is designed to meet you where you are, 
            honoring both your groundedness and your expansion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={offering.title}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:shadow-soft ${
                offering.accent === "cosmic"
                  ? "bg-bleu-cosmique/5 border-bleu-cosmique/20 hover:border-bleu-cosmique/40"
                  : "bg-brun-racine/5 border-brun-racine/20 hover:border-brun-racine/40"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                offering.accent === "cosmic"
                  ? "bg-bleu-cosmique/10 text-bleu-cosmique"
                  : "bg-ocre-solaire/15 text-ocre-solaire"
              }`}>
                <offering.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <p className={`text-sm font-cormorant tracking-wide uppercase mb-2 ${
                offering.accent === "cosmic" ? "text-bleu-atmosphere" : "text-sable-chaud"
              }`}>
                {offering.subtitle}
              </p>
              
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                {offering.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                {offering.description}
              </p>

              <Button 
                variant="ghost" 
                className={`group/btn px-0 font-medium ${
                  offering.accent === "cosmic" 
                    ? "text-bleu-cosmique hover:text-bleu-profond" 
                    : "text-ocre-solaire hover:text-brun-racine"
                } hover:bg-transparent`}
              >
                {offering.cta}
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gris-lune to-transparent" />
    </section>
  );
};

export default Offerings;
