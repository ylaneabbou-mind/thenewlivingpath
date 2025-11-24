import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Entrepreneur",
    text: "The transformation I experienced was nothing short of miraculous. I finally understand my purpose and feel aligned with my highest self.",
  },
  {
    name: "Michael R.",
    role: "Artist",
    text: "Working together opened portals I didn't know existed. My creativity and spiritual practice have merged into something profound.",
  },
  {
    name: "Elena K.",
    role: "Healer",
    text: "A truly gifted guide who holds space with such grace and wisdom. The Akashic reading changed the trajectory of my life.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Voices of
            <span className="block mt-2 bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Stories from those who have walked the path
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
