import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Compass, Users, Mountain } from "lucide-react";

const offerings = [
  {
    icon: Sparkles,
    title: "1:1 Transformation Coaching",
    description: "Deep dive sessions for profound personal metamorphosis and alignment",
    features: ["Quantum healing", "Shadow integration", "Soul alignment"],
  },
  {
    icon: Compass,
    title: "Akashic Readings",
    description: "Access the cosmic records of your soul's journey across time and space",
    features: ["Past life insights", "Soul purpose clarity", "Karmic healing"],
  },
  {
    icon: Users,
    title: "Consciousness Circles",
    description: "Sacred group containers for collective awakening and transformation",
    features: ["Monthly gatherings", "Meditation practices", "Community healing"],
  },
  {
    icon: Mountain,
    title: "Sacred Retreats",
    description: "Immersive experiences in nature for deep spiritual renewal",
    features: ["Multi-day journeys", "Ceremony & ritual", "Integration support"],
  },
];

const Offerings = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cosmic/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Sacred
            <span className="block mt-2 bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Offerings
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pathways designed to support your journey home to yourself
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-cosmic animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-serif">{offering.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {offering.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <ul className="space-y-2">
                    {offering.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full group/btn" variant="outline">
                    Learn More
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
