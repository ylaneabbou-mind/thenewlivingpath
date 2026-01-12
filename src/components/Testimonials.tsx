import { Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Cosmic Stellar Flow background */}
      <div className="absolute inset-0 bg-gradient-stellar" />
      
      {/* Top edge fade - blends with earth section above */}
      <div className="absolute top-0 left-0 right-0 h-[90px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(243,234,226,0.06) 0%, transparent 100%)' }} />
      
      {/* Bottom edge fade - prepares for earth section below */}
      <div className="absolute bottom-0 left-0 right-0 h-[90px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(243,234,226,0.05) 0%, transparent 100%)' }} />
      
      {/* Cosmic glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-bleu-atmosphere/25 rounded-full blur-[180px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-bleu-profond/30 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-ocre-solaire/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase">
            {t.testimonials.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-ivoire-cosmique">
            {t.testimonials.title_line1}
            <span className="text-ocre-clair"> {t.testimonials.title_line2}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
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
