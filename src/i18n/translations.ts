export type Language = "en" | "fr";

// Type for translation structure (using en as base)
type TranslationSchema = {
  nav: { home: string; histoire: string; services: string; ressources: string; contact: string };
  hero: { tagline: string; title_line1: string; title_line2: string; description: string; cta_primary: string; cta_secondary: string; portrait_placeholder: string };
  mission: { subtitle: string; title_line1: string; title_line2: string; quote: string; description1: string; description2: string };
  about: { subtitle: string; title_line1: string; title_line2: string; quote: string; paragraph1: string; paragraph2: string; paragraph3: string; signature: string; image_placeholder: string };
  offerings: { subtitle: string; title_line1: string; title_line2: string; description: string; items: Array<{ title: string; subtitle: string; description: string; cta: string }> };
  testimonials: { subtitle: string; title_line1: string; title_line2: string; items: Array<{ quote: string; author: string; title: string }> };
  blog: { subtitle: string; title_line1: string; title_line2: string; view_all: string; image_placeholder: string; posts: Array<{ title: string; excerpt: string; date: string; category: string }> };
  newsletter: { subtitle: string; title_line1: string; title_line2: string; description: string; placeholder: string; cta: string; privacy: string };
  footer: { tagline: string; nav: { about: string; offerings: string; writings: string; contact: string }; copyright: string; made_with: string; and_intention: string };
};

export const translations: Record<Language, TranslationSchema> = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      histoire: "Story",
      services: "Services",
      ressources: "Resources",
      contact: "Contact",
    },
    
    // Hero
    hero: {
      tagline: "Transformational Guidance",
      title_line1: "Grounded in Earth,",
      title_line2: "Aligned with the Stars",
      description: "Guiding you to realign with your True nature through a deep reconnection with the body's Wisdom by surrendering to life",
      cta_primary: "Begin Your Journey",
      cta_secondary: "Discover the Path",
      portrait_placeholder: "Your Portrait",
    },
    
    // Mission
    mission: {
      subtitle: "The Vision",
      title_line1: "Where Earth Meets",
      title_line2: "Infinite Possibility",
      quote: '"True transformation begins when we remember both our roots and our wings."',
      description1: "Ylane creates a sacred space where you reconnect with your authentic self — grounded in the wisdom of the body, yet open to the vast possibilities that await when you align with your highest vision.",
      description2: "This is not about becoming someone new. It's about remembering who you've always been.",
    },
    
    // About
    about: {
      subtitle: "About Ylane",
      title_line1: "A Guide Between",
      title_line2: "Worlds",
      quote: "Rooted in the earth, reaching for the infinite.",
      paragraph1: "With years of deep inner work and guided transformation, I have walked the path of remembrance — learning to honor both the grounded wisdom of the body and the expansive clarity of cosmic vision.",
      paragraph2: "My purpose is to hold space for your own journey home. Through presence, intuition, and sacred practices, I guide you to reconnect with the truth that lives within you — waiting to be remembered.",
      paragraph3: "Whether you seek clarity in times of transition, alignment with your life's purpose, or simply a deeper sense of peace, you are welcome here.",
      signature: "In service to your awakening",
      image_placeholder: "Your Image",
    },
    
    // Offerings
    offerings: {
      subtitle: "Sacred Offerings",
      title_line1: "Pathways to",
      title_line2: "Transformation",
      description: "Each offering is designed to meet you where you are, honoring both your groundedness and your expansion",
      items: [
        {
          title: "Vision Alignment",
          subtitle: "1:1 Guidance Sessions",
          description: "Deep transformational sessions to clarify your path, release what no longer serves, and align with your authentic direction.",
          cta: "Learn More",
        },
        {
          title: "Soul Readings",
          subtitle: "Intuitive Clarity",
          description: "Receive insight and guidance from the field of infinite wisdom. Understand the deeper patterns shaping your journey.",
          cta: "Discover",
        },
        {
          title: "Group Journeys",
          subtitle: "Collective Transformation",
          description: "Join intimate gatherings where we explore consciousness together, supported by the power of collective intention.",
          cta: "View Programs",
        },
        {
          title: "Embodiment Work",
          subtitle: "Grounding Practices",
          description: "Reconnect with the wisdom of your body through somatic practices, breathwork, and earth-based rituals.",
          cta: "Explore",
        },
      ],
    },
    
    // Testimonials
    testimonials: {
      subtitle: "Words of Transformation",
      title_line1: "Voices from the",
      title_line2: "Journey",
      items: [
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
      ],
    },
    
    // Blog
    blog: {
      subtitle: "Transmissions",
      title_line1: "Reflections &",
      title_line2: "Insights",
      view_all: "View All Writings",
      image_placeholder: "Image",
      posts: [
        {
          title: "The Art of Grounded Expansion",
          excerpt: "How to stay rooted while opening to infinite possibility — the paradox at the heart of transformation.",
          date: "Nov 2024",
          category: "Consciousness",
        },
        {
          title: "Listening to the Body's Wisdom",
          excerpt: "Your body holds ancient knowledge. Here's how to tune in and receive its guidance.",
          date: "Oct 2024",
          category: "Embodiment",
        },
        {
          title: "Navigating Life Transitions",
          excerpt: "When everything shifts, how do we find our center? Reflections on change as initiation.",
          date: "Sep 2024",
          category: "Transformation",
        },
      ],
    },
    
    // Newsletter
    newsletter: {
      subtitle: "Stay Connected",
      title_line1: "Join the",
      title_line2: "Inner Circle",
      description: "Receive monthly reflections, practices, and invitations to deepen your journey of transformation",
      placeholder: "your@email.com",
      cta: "Join the Circle",
      privacy: "Your journey is sacred. We honor your inbox with care.",
    },
    
    // Footer
    footer: {
      tagline: "Transformational guidance for those ready to remember their true nature.",
      nav: {
        about: "About",
        offerings: "Offerings",
        writings: "Writings",
        contact: "Contact",
      },
      copyright: "All rights reserved.",
      made_with: "Made with",
      and_intention: "and intention",
    },
  },
  
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      histoire: "Histoire",
      services: "Services",
      ressources: "Ressources",
      contact: "Contact",
    },
    
    // Hero
    hero: {
      tagline: "Guidance Transformationnelle",
      title_line1: "Enracinée dans la Terre,",
      title_line2: "Alignée avec les Étoiles",
      description: "Je vous guide pour vous réaligner avec votre Vraie nature à travers une reconnexion profonde avec la Sagesse du corps en s'abandonnant à la vie",
      cta_primary: "Commencer Votre Voyage",
      cta_secondary: "Découvrir le Chemin",
      portrait_placeholder: "Votre Portrait",
    },
    
    // Mission
    mission: {
      subtitle: "La Vision",
      title_line1: "Là où la Terre Rencontre",
      title_line2: "L'Infini Possible",
      quote: '"La vraie transformation commence quand nous nous souvenons de nos racines et de nos ailes."',
      description1: "Ylane crée un espace sacré où vous vous reconnectez avec votre moi authentique — ancré dans la sagesse du corps, tout en restant ouvert aux vastes possibilités qui vous attendent lorsque vous vous alignez avec votre vision la plus élevée.",
      description2: "Il ne s'agit pas de devenir quelqu'un de nouveau. Il s'agit de vous souvenir de qui vous avez toujours été.",
    },
    
    // About
    about: {
      subtitle: "À Propos d'Ylane",
      title_line1: "Un Guide Entre",
      title_line2: "Les Mondes",
      quote: "Enracinée dans la terre, atteignant l'infini.",
      paragraph1: "Avec des années de travail intérieur profond et de transformation guidée, j'ai parcouru le chemin du souvenir — apprenant à honorer à la fois la sagesse ancrée du corps et la clarté expansive de la vision cosmique.",
      paragraph2: "Mon but est de tenir l'espace pour votre propre voyage de retour. À travers la présence, l'intuition et les pratiques sacrées, je vous guide pour vous reconnecter avec la vérité qui vit en vous — attendant d'être retrouvée.",
      paragraph3: "Que vous cherchiez la clarté en période de transition, l'alignement avec le but de votre vie, ou simplement un sentiment plus profond de paix, vous êtes la bienvenue ici.",
      signature: "Au service de votre éveil",
      image_placeholder: "Votre Image",
    },
    
    // Offerings
    offerings: {
      subtitle: "Offrandes Sacrées",
      title_line1: "Chemins vers la",
      title_line2: "Transformation",
      description: "Chaque offrande est conçue pour vous rencontrer là où vous êtes, honorant à la fois votre ancrage et votre expansion",
      items: [
        {
          title: "Alignement de Vision",
          subtitle: "Séances de Guidance 1:1",
          description: "Des séances transformationnelles profondes pour clarifier votre chemin, libérer ce qui ne vous sert plus, et vous aligner avec votre direction authentique.",
          cta: "En Savoir Plus",
        },
        {
          title: "Lectures de l'Âme",
          subtitle: "Clarté Intuitive",
          description: "Recevez des insights et des guidances du champ de la sagesse infinie. Comprenez les schémas profonds qui façonnent votre voyage.",
          cta: "Découvrir",
        },
        {
          title: "Voyages de Groupe",
          subtitle: "Transformation Collective",
          description: "Rejoignez des rassemblements intimes où nous explorons la conscience ensemble, soutenus par la puissance de l'intention collective.",
          cta: "Voir les Programmes",
        },
        {
          title: "Travail d'Incarnation",
          subtitle: "Pratiques d'Ancrage",
          description: "Reconnectez-vous à la sagesse de votre corps à travers des pratiques somatiques, le travail du souffle et des rituels terrestres.",
          cta: "Explorer",
        },
      ],
    },
    
    // Testimonials
    testimonials: {
      subtitle: "Paroles de Transformation",
      title_line1: "Voix du",
      title_line2: "Voyage",
      items: [
        {
          quote: "Travailler avec Ylane m'a aidée à trouver la clarté que je cherchais. Je me sens enfin à la fois ancrée et libre de m'épanouir dans mon vrai but.",
          author: "Marie L.",
          title: "Coach Bien-être",
        },
        {
          quote: "Les séances ont créé un changement profond dans ma relation avec moi-même et mon chemin. Ylane tient l'espace avec tant de présence et de sagesse.",
          author: "Thomas D.",
          title: "Directeur Créatif",
        },
        {
          quote: "Je suis venue chercher des réponses et suis repartie avec quelque chose de bien plus précieux — une confiance profonde en ma propre connaissance intérieure.",
          author: "Sophie R.",
          title: "Entrepreneure",
        },
      ],
    },
    
    // Blog
    blog: {
      subtitle: "Transmissions",
      title_line1: "Réflexions &",
      title_line2: "Perspectives",
      view_all: "Voir Tous les Écrits",
      image_placeholder: "Image",
      posts: [
        {
          title: "L'Art de l'Expansion Ancrée",
          excerpt: "Comment rester enraciné tout en s'ouvrant à l'infini possible — le paradoxe au cœur de la transformation.",
          date: "Nov 2024",
          category: "Conscience",
        },
        {
          title: "Écouter la Sagesse du Corps",
          excerpt: "Votre corps détient une connaissance ancienne. Voici comment vous connecter et recevoir sa guidance.",
          date: "Oct 2024",
          category: "Incarnation",
        },
        {
          title: "Naviguer les Transitions de Vie",
          excerpt: "Quand tout change, comment trouvons-nous notre centre ? Réflexions sur le changement comme initiation.",
          date: "Sep 2024",
          category: "Transformation",
        },
      ],
    },
    
    // Newsletter
    newsletter: {
      subtitle: "Restez Connecté",
      title_line1: "Rejoignez le",
      title_line2: "Cercle Intérieur",
      description: "Recevez des réflexions mensuelles, des pratiques et des invitations pour approfondir votre voyage de transformation",
      placeholder: "votre@email.com",
      cta: "Rejoindre le Cercle",
      privacy: "Votre voyage est sacré. Nous honorons votre boîte mail avec soin.",
    },
    
    // Footer
    footer: {
      tagline: "Guidance transformationnelle pour ceux qui sont prêts à se souvenir de leur vraie nature.",
      nav: {
        about: "À Propos",
        offerings: "Offrandes",
        writings: "Écrits",
        contact: "Contact",
      },
      copyright: "Tous droits réservés.",
      made_with: "Fait avec",
      and_intention: "et intention",
    },
  },
};

export type Translations = TranslationSchema;
