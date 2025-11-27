import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Ylane helped me find the clarity I had been searching for. I finally feel both grounded and free to expand into my true purpose.",
    author: "Marie L.",
    title: "Wellness Coach",
  },
  {
    quote: "The sessions created a profound shift in how I relate to myself and my path. Ylane holds space with such presence and wisdom.",
    author: "Thomas D.",
    title: "Creative Director",
  },
  {
    quote: "I came seeking answers and left with something far more precious — a deep trust in my own inner knowing.",
    author: "Sophie R.",
    title: "Entrepreneur",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Warm earth background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brun-racine/5 via-background to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-cormorant text-sable-chaud tracking-[0.25em] uppercase">
            Words of Transformation
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Voices from the
            <span className="text-gradient-stellar"> Journey</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-brun-racine/30 transition-all duration-500 hover:shadow-soft"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-ocre-clair/40 mb-6" />
              
              <blockquote className="text-foreground leading-relaxed mb-8 font-light">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocre-clair/30 to-sable-chaud/20" />
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
