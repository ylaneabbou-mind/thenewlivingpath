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
      {/* Cosmic Stellar Flow background */}
      <div className="absolute inset-0 bg-gradient-stellar" />
      
      {/* Cosmic glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-bleu-atmosphere/25 rounded-full blur-[180px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-bleu-profond/30 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-ocre-solaire/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase">
            Words of Transformation
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-ivoire-cosmique">
            Voices from the
            <span className="text-ocre-clair"> Journey</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative p-8 rounded-2xl bg-ivoire-cosmique/10 backdrop-blur-md border border-ivoire-cosmique/20 hover:border-ivoire-cosmique/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-blue"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-ocre-clair/60 mb-6" />
              
              <blockquote className="text-ivoire-cosmique leading-relaxed mb-8 font-light">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocre-clair/40 to-ocre-solaire/30" />
                <div>
                  <p className="font-medium text-ivoire-cosmique">{testimonial.author}</p>
                  <p className="text-sm text-ivoire-cosmique/60">{testimonial.title}</p>
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
