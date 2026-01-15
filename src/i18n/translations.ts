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
  storyPage: {
    hero: { subtitle: string; title: string; description: string };
    origins: { subtitle: string; title: string; paragraph1: string; paragraph2: string; image_placeholder: string };
    transformation: { subtitle: string; title: string; quote: string; paragraph1: string; paragraph2: string; paragraph3: string };
    mission: { subtitle: string; title: string; paragraph1: string; paragraph2: string; signature: string; image_placeholder: string };
    cta: { title: string; description: string; button: string };
  };
  contactPage: {
    hero: { subtitle: string; title: string; description: string };
    methods: {
      title: string;
      description: string;
      whatsapp: { label: string; description: string };
      instagram: { label: string; description: string };
      email: { label: string; description: string };
    };
    closing: { quote: string; message: string; signature: string };
  };
  resourcesPage: {
    hero: { subtitle: string; title: string; description: string };
    coming_soon: { badge: string; title: string; description: string };
    newsletter: { title: string; description: string; note: string };
  };
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
      quote: '"True transformation begins when we step out of the strategic mind and allow life\'s infinite possibilities to meet us."',
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
    
    // Story Page
    storyPage: {
      hero: {
        subtitle: "My Story",
        title: "A Journey of Remembering",
        description: "The path that led me here was winding, beautiful, and deeply transformative. Let me share it with you.",
      },
      origins: {
        subtitle: "The Beginning",
        title: "Where It All Started",
        paragraph1: "My journey began long before I understood what I was seeking. Like many, I walked the path of conventional success — achievements, milestones, external validation. Yet something within me whispered that there was more.",
        paragraph2: "That whisper became a call I could no longer ignore. It led me to question everything I thought I knew and to begin the sacred work of remembering who I truly am.",
        image_placeholder: "Portrait",
      },
      transformation: {
        subtitle: "The Turning Point",
        title: "When Everything Shifted",
        quote: "Sometimes we must lose ourselves completely to find our way home.",
        paragraph1: "There came a moment — a series of moments, really — when the old ways simply stopped working. The strategies, the pushing, the striving. Life invited me into surrender.",
        paragraph2: "Through deep inner work, ancient practices, and the guidance of wise teachers, I learned to listen. To my body. To the subtle realms. To the wisdom that had always been there, waiting.",
        paragraph3: "This wasn't about becoming someone new. It was about peeling away everything that was never truly me — and discovering the infinite spaciousness underneath.",
      },
      mission: {
        subtitle: "Today",
        title: "Holding Space for Your Journey",
        paragraph1: "Now I walk alongside others on their path of remembering. I offer what I've learned: that transformation doesn't require force. That the body holds ancient wisdom. That we are both deeply human and infinitely cosmic.",
        paragraph2: "My purpose is simple: to create a space where you can reconnect with your own truth. To be a mirror for the light you've always carried. To remind you that you already have everything you need.",
        signature: "With love and presence, Ylane",
        image_placeholder: "Vision",
      },
      cta: {
        title: "Ready to Begin?",
        description: "If something in these words resonates with you, perhaps it's time for us to connect.",
        button: "Reach Out",
      },
    },
    
    // Contact Page
    contactPage: {
      hero: {
        subtitle: "Let's Connect",
        title: "I'm Here for You",
        description: "Reaching out is the first step. There's no pressure, no obligation — just an open door and a warm welcome.",
      },
      methods: {
        title: "Choose Your Path",
        description: "I'm accessible and present. Choose the way that feels most comfortable for you.",
        whatsapp: {
          label: "WhatsApp",
          description: "For a direct, personal conversation. This is often the quickest way to connect.",
        },
        instagram: {
          label: "Instagram",
          description: "Follow my journey and send a message through @ylane.",
        },
        email: {
          label: "Email",
          description: "For longer inquiries or if you prefer a more formal approach.",
        },
      },
      closing: {
        quote: "Every journey begins with a single step of courage.",
        message: "Whether you're ready to begin or simply curious to learn more, I welcome your message with an open heart.",
        signature: "Looking forward to meeting you",
      },
    },
    
    // Resources Page
    resourcesPage: {
      hero: {
        subtitle: "Transmissions",
        title: "Wisdom & Reflections",
        description: "A space for shared contemplation, where words become bridges to deeper understanding.",
      },
      coming_soon: {
        badge: "Coming Soon",
        title: "Articles in Preparation",
        description: "I'm carefully crafting reflections, insights, and practices to support your journey. Each piece is written with intention and care — they will arrive when the time is right.",
      },
      newsletter: {
        title: "Be the First to Know",
        description: "Join the inner circle and receive new writings directly in your inbox when they're ready.",
        note: "Subscribe through the newsletter on the home page to stay connected.",
      },
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
      quote: '"La vraie transformation commence quand nous sortons du mental stratégique et permettons aux possibilités infinies de la vie de nous rencontrer."',
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
    
    // Story Page
    storyPage: {
      hero: {
        subtitle: "Mon Histoire",
        title: "Un Voyage de Souvenance",
        description: "Le chemin qui m'a menée ici était sinueux, beau et profondément transformateur. Laissez-moi vous le partager.",
      },
      origins: {
        subtitle: "Les Débuts",
        title: "Là Où Tout a Commencé",
        paragraph1: "Mon voyage a commencé bien avant que je comprenne ce que je cherchais. Comme beaucoup, j'ai suivi le chemin du succès conventionnel — réussites, étapes, validation extérieure. Pourtant, quelque chose en moi murmurait qu'il y avait plus.",
        paragraph2: "Ce murmure est devenu un appel que je ne pouvais plus ignorer. Il m'a amenée à remettre en question tout ce que je pensais savoir et à commencer le travail sacré de me souvenir de qui je suis vraiment.",
        image_placeholder: "Portrait",
      },
      transformation: {
        subtitle: "Le Tournant",
        title: "Quand Tout a Basculé",
        quote: "Parfois nous devons nous perdre complètement pour trouver notre chemin vers la maison.",
        paragraph1: "Il y a eu un moment — une série de moments, en réalité — où les anciennes façons ont simplement cessé de fonctionner. Les stratégies, les efforts, la lutte. La vie m'a invitée à l'abandon.",
        paragraph2: "À travers un travail intérieur profond, des pratiques anciennes et la guidance de sages enseignants, j'ai appris à écouter. Mon corps. Les royaumes subtils. La sagesse qui avait toujours été là, en attente.",
        paragraph3: "Il ne s'agissait pas de devenir quelqu'un de nouveau. Il s'agissait de retirer tout ce qui n'a jamais été vraiment moi — et de découvrir l'espace infini en dessous.",
      },
      mission: {
        subtitle: "Aujourd'hui",
        title: "Tenir l'Espace pour Votre Voyage",
        paragraph1: "Maintenant, je marche aux côtés des autres sur leur chemin de souvenance. J'offre ce que j'ai appris : que la transformation ne nécessite pas de force. Que le corps détient une sagesse ancienne. Que nous sommes à la fois profondément humains et infiniment cosmiques.",
        paragraph2: "Mon but est simple : créer un espace où vous pouvez vous reconnecter avec votre propre vérité. Être un miroir pour la lumière que vous avez toujours portée. Vous rappeler que vous avez déjà tout ce dont vous avez besoin.",
        signature: "Avec amour et présence, Ylane",
        image_placeholder: "Vision",
      },
      cta: {
        title: "Prête à Commencer ?",
        description: "Si quelque chose dans ces mots résonne en vous, peut-être est-il temps pour nous de nous connecter.",
        button: "Me Contacter",
      },
    },
    
    // Contact Page
    contactPage: {
      hero: {
        subtitle: "Connectons-nous",
        title: "Je Suis Là Pour Vous",
        description: "Tendre la main est la première étape. Pas de pression, pas d'obligation — juste une porte ouverte et un accueil chaleureux.",
      },
      methods: {
        title: "Choisissez Votre Chemin",
        description: "Je suis accessible et présente. Choisissez la voie qui vous semble la plus confortable.",
        whatsapp: {
          label: "WhatsApp",
          description: "Pour une conversation directe et personnelle. C'est souvent le moyen le plus rapide de se connecter.",
        },
        instagram: {
          label: "Instagram",
          description: "Suivez mon parcours et envoyez un message via @ylane.",
        },
        email: {
          label: "Email",
          description: "Pour des demandes plus longues ou si vous préférez une approche plus formelle.",
        },
      },
      closing: {
        quote: "Chaque voyage commence par un seul pas de courage.",
        message: "Que vous soyez prête à commencer ou simplement curieuse d'en savoir plus, j'accueille votre message avec un cœur ouvert.",
        signature: "Au plaisir de vous rencontrer",
      },
    },
    
    // Resources Page
    resourcesPage: {
      hero: {
        subtitle: "Transmissions",
        title: "Sagesse & Réflexions",
        description: "Un espace de contemplation partagée, où les mots deviennent des ponts vers une compréhension plus profonde.",
      },
      coming_soon: {
        badge: "Bientôt Disponible",
        title: "Articles en Préparation",
        description: "Je prépare soigneusement des réflexions, des perspectives et des pratiques pour accompagner votre voyage. Chaque texte est écrit avec intention et soin — ils arriveront quand le moment sera venu.",
      },
      newsletter: {
        title: "Soyez les Premiers Informés",
        description: "Rejoignez le cercle intérieur et recevez les nouveaux écrits directement dans votre boîte mail quand ils seront prêts.",
        note: "Inscrivez-vous via la newsletter sur la page d'accueil pour rester connectée.",
      },
    },
  },
};

export type Translations = TranslationSchema;
