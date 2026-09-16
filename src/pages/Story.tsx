import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, Coffee, Leaf, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const ritualIcons = [Coffee, Leaf, Wind];
import portraitStory from "@/assets/portrait-story.jpeg";
import missionTea from "@/assets/mission-tea.jpeg";

const Story = () => {
  const { t } = useLanguage();

  // Rich-text styling for paragraph markup (bold / italic / underline / lists)
  const richText =
    "[&_strong]:font-semibold [&_em]:italic [&_u]:underline [&_u]:decoration-ocre-solaire/60 [&_u]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:text-left [&_li]:marker:text-ocre-solaire [&_li]:pl-1";

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-5 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-20 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-bleu-atmosphere/25 rounded-full blur-[120px] md:blur-[180px]" />
        <div className="absolute bottom-10 left-1/3 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-ocre-solaire/15 rounded-full blur-[100px] md:blur-[150px]" />
        
        {/* Bottom edge fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[80px] md:h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(211,167,141,0.08) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <p className="text-xs md:text-sm font-cormorant text-ocre-clair tracking-[0.2em] md:tracking-[0.25em] uppercase mb-4 md:mb-6 animate-fade-in">
            {t.storyPage.hero.subtitle}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-semibold text-ivoire-cosmique leading-[1.2] md:leading-tight mb-6 md:mb-8 animate-fade-in">
            {t.storyPage.hero.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-ivoire-cosmique/80 max-w-2xl mx-auto font-light leading-[1.7] md:leading-relaxed animate-fade-in">
            {t.storyPage.hero.description}
          </p>
          <blockquote className="relative max-w-2xl mx-auto my-6 md:my-8 animate-fade-in">
            <span aria-hidden className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 font-serif text-5xl md:text-6xl text-ocre-clair/40 leading-none select-none">“</span>
            <p className="font-cormorant italic text-2xl md:text-3xl lg:text-4xl text-ocre-clair leading-[1.35] px-6">
              {t.storyPage.hero.quote}
            </p>
            <span className="block mx-auto mt-4 md:mt-5 w-12 md:w-16 h-px bg-ocre-clair/50" />
          </blockquote>
          <p
            className={`text-lg md:text-xl lg:text-2xl text-ivoire-cosmique/80 max-w-2xl mx-auto font-light leading-[1.7] md:leading-relaxed animate-fade-in ${richText}`}
            dangerouslySetInnerHTML={{ __html: t.storyPage.hero.description2 }}
          />
        </div>
      </section>

      {/* Origins Section */}
      <section className="relative py-16 md:py-24 px-5 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-sable-doux" />
        <div className="absolute inset-0 bg-gradient-to-b from-argile-clair/40 via-transparent to-parchemin/60" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />
        
        <div className="absolute top-1/4 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-ocre-clair/10 rounded-full blur-[100px] md:blur-[150px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Image placeholder */}
            <div className="w-full max-w-[280px] mx-auto lg:max-w-none lg:col-span-2">
              <div className="aspect-[3/4] rounded-2xl border border-brun-racine/20 shadow-warm overflow-hidden">
                <img src={portraitStory} alt={t.storyPage.origins.image_placeholder} className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-3 space-y-5 md:space-y-6 text-left">
              <p className="text-xs md:text-sm font-cormorant text-sable-chaud tracking-[0.2em] md:tracking-[0.25em] uppercase">
                {t.storyPage.origins.subtitle}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brun-racine leading-[1.25] md:leading-tight">
                {t.storyPage.origins.title}
              </h2>
              <div className={`space-y-5 md:space-y-5 text-foreground/80 leading-[1.8] md:leading-relaxed text-base ${richText}`}>
                <p className="drop-cap" dangerouslySetInnerHTML={{ __html: t.storyPage.origins.paragraph1 }} />
                <p dangerouslySetInnerHTML={{ __html: t.storyPage.origins.paragraph2 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="relative py-16 md:py-24 px-5 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-bleu-atmosphere/20 rounded-full blur-[120px] md:blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-ocre-solaire/12 rounded-full blur-[100px] md:blur-[140px]" />
        
        {/* Edge fades */}
        <div className="absolute top-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(211,167,141,0.06) 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(211,167,141,0.06) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-4 md:space-y-6 mb-10 md:mb-16">
            <p className="text-xs md:text-sm font-cormorant text-ocre-clair tracking-[0.2em] md:tracking-[0.25em] uppercase">
              {t.storyPage.transformation.subtitle}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-ivoire-cosmique leading-[1.25] md:leading-tight">
              {t.storyPage.transformation.title}
            </h2>
          </div>
          
          <p className="font-cormorant text-xl md:text-2xl italic text-ocre-clair/90 text-center leading-[1.5] max-w-2xl mx-auto mb-14 md:mb-20">
            {t.storyPage.transformation.quote}
          </p>

          {/* Three reading steps with generous spacing */}
          <div className="max-w-[42rem] mx-auto text-left space-y-16 md:space-y-24">
            {/* 1 — The Encounter */}
            <Reveal>
              <p className="text-xs md:text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase mb-5 md:mb-6">
                {t.storyPage.transformation.labels.encounter}
              </p>
              <div
                className={`drop-cap drop-cap-light text-ivoire-cosmique/85 leading-[1.8] md:leading-relaxed text-base ${richText}`}
                dangerouslySetInnerHTML={{ __html: t.storyPage.transformation.encounter }}
              />
            </Reveal>

            {/* 2 — The Rituals */}
            <Reveal>
              <p className="text-xs md:text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase mb-5 md:mb-6">
                {t.storyPage.transformation.labels.rituals}
              </p>
              <p
                className={`text-ivoire-cosmique/85 leading-[1.8] md:leading-relaxed text-base mb-6 md:mb-8 ${richText}`}
                dangerouslySetInnerHTML={{ __html: t.storyPage.transformation.ritualsIntro }}
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {t.storyPage.transformation.rituals.map((ritual, i) => {
                  const Icon = ritualIcons[i % ritualIcons.length];
                  return (
                    <div
                      key={ritual.title}
                      className="rounded-2xl border border-ivoire-cosmique/20 bg-ivoire-cosmique/10 backdrop-blur-md p-6 transition-all duration-500 hover:border-ocre-clair/40 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-xl bg-ocre-solaire/20 text-ocre-solaire flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-lg text-ivoire-cosmique mb-2">{ritual.title}</h3>
                      <p className="text-sm text-ivoire-cosmique/75 leading-relaxed">{ritual.description}</p>
                    </div>
                  );
                })}
              </div>
              <p
                className={`text-ivoire-cosmique/85 leading-[1.8] md:leading-relaxed text-base mt-6 md:mt-8 ${richText}`}
                dangerouslySetInnerHTML={{ __html: t.storyPage.transformation.ritualsOutro }}
              />
            </Reveal>

            {/* 3 — The Liberation */}
            <Reveal>
              <p className="text-xs md:text-sm font-cormorant text-ocre-clair tracking-[0.25em] uppercase mb-5 md:mb-6">
                {t.storyPage.transformation.labels.liberation}
              </p>
              <p
                className={`text-ivoire-cosmique/85 leading-[1.8] md:leading-relaxed text-base ${richText}`}
                dangerouslySetInnerHTML={{ __html: t.storyPage.transformation.liberation }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-16 md:py-24 px-5 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-argile-clair" />
        <div className="absolute inset-0 bg-gradient-to-br from-sable-doux/60 via-transparent to-terre-douce/30" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,53,115,0.05) 0%, transparent 100%)' }} />
        
        <div className="absolute bottom-1/4 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-terre-claire/12 rounded-full blur-[100px] md:blur-[150px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-3 space-y-5 md:space-y-6 order-2 lg:order-1 text-left">
              <p className="text-xs md:text-sm font-cormorant text-sable-chaud tracking-[0.2em] md:tracking-[0.25em] uppercase">
                {t.storyPage.mission.subtitle}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brun-racine leading-[1.25] md:leading-tight">
                {t.storyPage.mission.title}
              </h2>
              <div className={`space-y-5 md:space-y-5 text-foreground/80 leading-[1.8] md:leading-relaxed text-base ${richText}`}>
                <p className="drop-cap" dangerouslySetInnerHTML={{ __html: t.storyPage.mission.paragraph1 }} />
                <p dangerouslySetInnerHTML={{ __html: t.storyPage.mission.paragraph2 }} />
              </div>

              <div className="pt-4 flex items-center justify-start gap-4">
                <div className="w-10 md:w-12 h-px bg-ocre-solaire/60" />
                <span className="text-terre-accent font-cormorant italic text-sm md:text-base">
                  {t.storyPage.mission.signature}
                </span>
              </div>
            </div>
            
            {/* Image placeholder */}
            <div className="w-full mx-auto lg:col-span-2 order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl border border-bleu-cosmique/20 shadow-soft overflow-hidden">
                <img src={missionTea} alt={t.storyPage.mission.image_placeholder} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 px-5 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-stellar" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-bleu-atmosphere/25 rounded-full blur-[150px] md:blur-[200px]" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(211,167,141,0.06) 0%, transparent 100%)' }} />
        {/* Bottom edge fade for footer */}
        <div className="absolute bottom-0 left-0 right-0 h-[80px] md:h-[100px] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(111,61,32,0.08) 0%, transparent 100%)' }} />
        
        <div className="container mx-auto max-w-3xl relative z-10 text-center px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-ivoire-cosmique mb-5 md:mb-6 leading-[1.25]">
            {t.storyPage.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-ivoire-cosmique/80 mb-8 md:mb-10 max-w-xl mx-auto font-light leading-[1.7]">
            {t.storyPage.cta.description}
          </p>
          <Link to="/contact">
            <Button size="lg" className="group text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-gradient-solar text-white shadow-glow-gold hover:shadow-lg active:scale-[0.98] md:hover:scale-105 transition-all duration-500 rounded-xl w-full sm:w-auto">
              {t.storyPage.cta.button}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Story;
