import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Blog = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* CTA brown background with gradient */}
      <div className="absolute inset-0 bg-cta-brun" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, hsl(24 30% 49%) 0%, hsl(26 48% 60%) 100%)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-parchemin/15 via-transparent to-terre-douce/20" />
      
      {/* Top edge fade - blends with cosmic section above */}
      <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.06) 0%, transparent 100%)' }} />
      
      {/* Bottom edge fade - prepares for cosmic section below */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />
      
      {/* Subtle earth glows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-terre-douce/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-parchemin/12 rounded-full blur-[130px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-4">
            {/* Small label */}
            <p className="text-sm font-cormorant tracking-[0.25em] uppercase" style={{ color: 'rgba(47, 27, 18, 0.70)' }}>
              {t.blog.subtitle}
            </p>
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-semibold" style={{ color: '#2F1B12' }}>
              {t.blog.title_line1}
              <span className="text-bleu-cosmique"> {t.blog.title_line2}</span>
            </h2>
          </div>
          
          <a href="#" className="group flex items-center gap-2 text-bleu-cosmique hover:text-bleu-profond transition-colors font-medium">
            {t.blog.view_all}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.blog.posts.map((post, index) => (
            <article
              key={post.title}
              className="group cursor-pointer"
            >
              {/* Image placeholder with floating effect */}
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-bleu-profond/20 to-bleu-cosmique/15 border border-bleu-cosmique/25 group-hover:border-bleu-cosmique/50 group-hover:shadow-glow-blue transition-all duration-500 mb-6 overflow-hidden group-hover:-translate-y-1">
                <div className="w-full h-full flex items-center justify-center text-bleu-cosmique/40 font-cormorant">
                  {t.blog.image_placeholder}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-cormorant font-medium" style={{ color: '#8A3F1E' }}>{post.category}</span>
                  <span style={{ color: 'rgba(47, 27, 18, 0.40)' }}>•</span>
                  <span style={{ color: 'rgba(47, 27, 18, 0.60)' }}>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-serif font-semibold group-hover:text-bleu-cosmique transition-colors" style={{ color: '#2F1B12' }}>
                  {post.title}
                </h3>
                
                <p className="leading-relaxed" style={{ color: 'rgba(47, 27, 18, 0.75)' }}>
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Blog;
