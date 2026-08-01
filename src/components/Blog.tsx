import { Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Blog = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Explicit grounded brown background - warm earth */}
      <div className="absolute inset-0 bg-sable-doux" />
      <div className="absolute inset-0 bg-gradient-to-b from-argile-clair/50 via-transparent to-parchemin/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-terre-accent/[0.02] via-transparent to-ocre-profond/[0.04]" />
      
      {/* Top edge fade - blends with cosmic section above */}
      <div className="absolute top-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />
      
      {/* Bottom edge fade - prepares for cosmic section below */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,53,115,0.04) 0%, transparent 100%)' }} />
      
      {/* Subtle earth glows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-terre-claire/12 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-ocre-clair/10 rounded-full blur-[130px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-cormorant text-sable-chaud tracking-[0.25em] uppercase">
            {t.blog.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-brun-racine">
            {t.blog.title_line1}
            <span className="text-gradient-solar"> {t.blog.title_line2}</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center py-10 md:py-16">
          <div className="mx-auto mb-8 w-16 h-16 rounded-full bg-gradient-to-br from-bleu-profond/15 to-ocre-clair/20 border border-bleu-cosmique/20 flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-ocre-solaire" />
          </div>
          <p className="font-cormorant text-2xl md:text-3xl italic text-brun-racine/90 leading-[1.4]">
            {t.blog.coming_soon}
          </p>
          <span className="block mx-auto mt-6 w-14 h-px bg-ocre-solaire/50" />
        </div>
      </div>

    </section>
  );
};

export default Blog;
