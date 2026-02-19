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
  servicesPage: {
    hero: { subtitle: string; title: string; description: string };
    catalog_section: { subtitle: string; title: string; note: string };
    catalog: Array<{ slug: string; title: string; subtitle: string; description: string; cta: string }>;
    details: Array<{
      tagline: string;
      what: { title: string; paragraph1: string; paragraph2: string };
      who: { title: string; items: string[] };
      transformation: { title: string; quote: string; paragraph1: string; paragraph2: string };
      how: { title: string; steps: Array<{ title: string; description: string }> };
      cta: { title: string; description: string; button: string };
    }>;
    detail_page: {
      back: string;
      sections: { what: string; who: string; transformation: string; how: string };
    };
    cta: { title: string; description: string; button: string };
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
      description: "Guiding you to realign with your True nature through a deep reconnection with the body's Wisdom by surrendering to life.",
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
      description1: "Ylane creates a sacred space where you can release the conditioning that has shaped you since birth and step into a new way of living guided by your body’s intelligence.",
      description2: "This is not about becoming someone New. It's about remembering who you've always been.",
    },

    // About
    about: {
      subtitle: "ABOUT YLANE",
      title_line1: "A guide Between",
      title_line2: "Worlds",
      quote: "Rooted in the Earth, reaching for the Infinite.",
      paragraph1: "Through years of deep inner work and radical transformation, I have learned to walk a new way of being. A path where honoring the body’s intelligence is Key.",
      paragraph2: "I jumped into the unknown, letting go of the need to control my life with the mind. My purpose is to hold space for your journey home. Through presence, intuition, and sacred practices, I guide you to reconnect with the truth that dwells within, waiting to be awakened.",
      paragraph3: "Whether you are seeking clarity in times of change, alignment with your life’s purpose, or a deeper sense of peace, you are welcome here.",
      signature: "I am in service to your awakening.",
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
          title: "Individual 1:1 Guidance Sessions",
          subtitle: "1:1 Guidance Sessions",
          description: "This offering is a journey in itself, designed to support you in creating a real structure in your life and establish a solid foundation so you can move through life with greater ease, clarity and direction.",
          cta: "Learn More",
        },
        {
          title: "4-Week Transformational Journey",
          subtitle: "Personalized Support",
          description: "Over the course of these four sessions, you will receive my personal and dedicated guidance, supported by practical tools and insights I have gathered and embodied through my own path.",
          cta: "Discover",
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

    // Services Page
    servicesPage: {
      hero: {
        subtitle: "Sacred Offerings",
        title: "Pathways to Transformation",
        description: "Each offering is designed to meet you where you are, honoring both your groundedness and your expansion.",
      },
      catalog_section: {
        subtitle: "Ways to Work Together",
        title: "Choose Your Path",
        note: "More offerings will be available soon. Each path is crafted with intention.",
      },
      catalog: [
        {
          slug: "vision-alignment",
          title: "Individual 1:1 Guidance Sessions",
          subtitle: "1:1 Guidance Sessions",
          description: "This offering is a journey in itself, designed to support you in creating a real structure in your life and establish a solid foundation so you can move through life with greater ease, clarity and direction.",
          cta: "Explore This Path",
        },
        {
          slug: "transformational-journey",
          title: "4-Week Transformational Journey",
          subtitle: "Personalized Guidance & Support",
          description: "Over the course of these four sessions, you will receive my personal and dedicated guidance, supported by practical tools and insights I have gathered and embodied through my own path.",
          cta: "Begin Your Journey",
        },
      ],
      details: [
        {
          tagline: "A sacred space to remember who you truly are.",
          what: {
            title: "What This Service Is",
            paragraph1: "Individual 1:1 Guidance Sessions are a journey in themselves, designed to support you in creating a real structure in your life and establish a solid foundation so you can move through life with greater ease, clarity and direction.",
            paragraph2: "This is not coaching in the traditional sense. It's a journey of remembering — peeling away the layers of conditioning to reveal the truth that has always lived within you.",
          },
          who: {
            title: "This Path Is For You If",
            items: [
              "You feel called to something deeper but can't quite name it",
              "You're navigating a significant life transition or crossroads",
              "You sense there's more to life than what you've been living",
              "You're ready to release old patterns that no longer serve you",
              "You seek clarity, alignment, and a deeper connection to your purpose",
            ],
          },
          transformation: {
            title: "The Transformation",
            quote: "True transformation begins when we stop trying to become someone new and start remembering who we've always been.",
            paragraph1: "Through our work together, you'll cultivate a profound trust in your own inner knowing. The noise of external expectations quiets, and you begin to hear the voice of your authentic self — clear, calm, and unwavering.",
            paragraph2: "This isn't about dramatic change. It's about coming home to yourself. About moving through life with a sense of groundedness and possibility that feels both ancient and entirely new.",
          },
          how: {
            title: "How It Works",
            steps: [
              {
                title: "Initial Connection",
                description: "We begin with a conversation to understand where you are and what's calling you forward.",
              },
              {
                title: "Sacred Sessions",
                description: "Through 1:1 sessions, we work with intuition, presence, and grounded practices to illuminate your path.",
              },
              {
                title: "Integration",
                description: "Between sessions, you'll receive practices and reflections to deepen your journey.",
              },
            ],
          },
          cta: {
            title: "Ready to Begin?",
            description: "If something in these words resonates with you, perhaps it's time for us to connect.",
            button: "Start the Conversation",
          },
        },
        {
          tagline: "Dedicated support to embody your radical transformation.",
          what: {
            title: "What This Journey Is",
            paragraph1: "The 4-Week Transformational Journey is a deep dive into your inner landscape. Over four focused sessions, we work closely together to navigate the blocks and openings that arise as you step into a new way of being.",
            paragraph2: "This is a dedicated containers for those ready to move beyond insight and into the lived reality of their truth.",
          },
          who: {
            title: "This Journey Is For You If",
            items: [
              "You are ready for consistent, focused support over a dedicated period",
              "You want practical tools to integrate transformation into your daily life",
              "You feel the call to dive deeper into the body's wisdom",
              "You are navigating a period of intense change and seeking a grounded anchor",
            ],
          },
          transformation: {
            title: "The Shift",
            quote: "Transformation is not a destination, but a way of walking through the world.",
            paragraph1: "By the end of these four weeks, you'll have established a new baseline of presence and trust. The tools we explore become part of your own wisdom, allowing you to sustain your alignment long after our sessions end.",
            paragraph2: "This is about building the capacity to stay present with yourself through all the seasons of your awakening.",
          },
          how: {
            title: "The Path",
            steps: [
              {
                title: "Week 1: Foundations",
                description: "Grounding into your current reality and identifying the core intentions for our work.",
              },
              {
                title: "Week 2 & 3: Deepening",
                description: "Moving through layers of conditioning and opening to the body's intelligence.",
              },
              {
                title: "Week 4: Integration",
                description: "Establishing practices and rhythms to sustain your transformation in the world.",
              },
            ],
          },
          cta: {
            title: "Ready to Dive Deep?",
            description: "If you feel the call for dedicated support, let's explore if this journey is right for you.",
            button: "Apply for the Journey",
          },
        },
      ],
      detail_page: {
        back: "Back to Services",
        sections: {
          what: "The Offering",
          who: "Who It's For",
          transformation: "The Journey",
          how: "The Process",
        },
      },
      cta: {
        title: "Not Sure Where to Start?",
        description: "If you're feeling the call but unsure which path is right for you, reach out. We can explore together.",
        button: "Let's Connect",
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
      title_line1: "Enraciné dans la terre,",
      title_line2: "Aligné avec les étoiles",
      description: "Je te guide à te réaligner avec ta vraie nature, par une reconnexion profonde à la sagesse du corps, en apprenant à déposer les armes face à la VIE.",
      cta_primary: "Commencer Votre Voyage",
      cta_secondary: "Découvrir le Chemin",
      portrait_placeholder: "Votre Portrait",
    },

    // Mission
    mission: {
      subtitle: "La Vision",
      title_line1: "Là où la Terre",
      title_line2: "Rencontre Le Monde des Possibles",
      quote: '"La véritable transformation naît lorsque nous quittons l’aspect stratégique du mental, et que le cœur s’ouvre aux possibilités infinies que la vie a à nous offrir."',
      description1: "Ylane crée un espace sacré dans lequel tu peux te défaire des conditionnements qui t’ont façonné depuis la naissance, et apprendre à naviguer avec plus d’aisance, de fluidité, guidé par l’intelligence innée de ton corps.",
      description2: "Il ne s’agit pas de changer qui tu es, mais de te reconnecter à ton essence originelle.",
    },

    // About
    about: {
      subtitle: "À PROPOS DE YLANE",
      title_line1: "Un guide entre les",
      title_line2: "Mondes",
      quote: "Ancré dans la Terre, tourné vers le Ciel.",
      paragraph1: "Après des années de longs voyages intérieurs et de transformations radicales, j’ai appris à naviguer dans ce monde avec un autre rythme. Un chemin où le corps guide et les souffles de la vie sont entendus.",
      paragraph2: "J’ai sauté dans l’inconnu en lâchant le besoin de contrôler ma vie au travers du prisme du mental. Ma mission est de t’accompagner vers un retour à la maison. Par la présence, le ressenti et la vision, je te guide à te reconnecter à la vérité qui sommeille en toi.",
      paragraph3: "Que tu traverses une période de changements, que tu cherches plus de clarté, un alignement avec ce qui a du sens, ce qui compte vraiment, ou simplement plus de bien-être et de sérénité, tu es le bienvenu dans cet espace.",
      signature: "Je suis ici à ton service.",
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
          title: "Chemin de Réalignement",
          subtitle: "Guidance Intuitive",
          description: "Chaque espace de guidance est pensé pour te rejoindre exactement là où tu en es, en honorant ton unicité et tes besoins du moment.",
          cta: "En Savoir Plus",
        },
        {
          title: "4× Sessions de guidance individuelle",
          subtitle: "Séances de Guidance 1:1",
          description: "Cet accompagnement est un voyage à part entière. Il te guide à créer une structure juste dans ta vie, à ancrer des fondations stables et solides.",
          cta: "Découvrir",
        },
        {
          title: "Chemin de retour à Soi (4 semaines)",
          subtitle: "Voyage Intérieur",
          description: "Au fil de ces 4 sessions, je t’emmène pas à pas vers un retour à ton essence, au travers d’une guidance personnalisée attentive.",
          cta: "Voir le Programme",
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

    // Services Page
    servicesPage: {
      hero: {
        subtitle: "Offrandes Sacrées",
        title: "Chemins vers la Transformation",
        description: "Chaque offrande est conçue pour vous rencontrer là où vous êtes, honorant à la fois votre ancrage et votre expansion.",
      },
      catalog_section: {
        subtitle: "Travailler Ensemble",
        title: "Choisissez Votre Chemin",
        note: "D'autres offrandes seront bientôt disponibles. Chaque chemin est créé avec intention.",
      },
      catalog: [
        {
          slug: "chemin-realignement",
          title: "Chemin de Réalignement",
          subtitle: "Guidance Intuitive",
          description: "Chaque espace de guidance est pensé pour te rejoindre exactement là où tu en es, en honorant ton unicité et tes besoins du moment.",
          cta: "Découvrir ce chemin",
        },
        {
          slug: "vision-alignment",
          title: "4× Sessions de guidance individuelle",
          subtitle: "Séances de Guidance 1:1",
          description: "Cet accompagnement est un voyage à part entière. Il te guide à créer une structure juste dans ta vie, à ancrer des fondations stables et solides, afin de cheminer avec davantage de clarté, plus de fluidité et de sens.",
          cta: "Explorer Ce Chemin",
        },
        {
          slug: "transformational-journey",
          title: "Chemin de retour à Soi (4 semaines)",
          subtitle: "Voyage Intérieur",
          description: "Au fil de ces 4 sessions, je t’emmène pas à pas vers un retour à ton essence, au travers d’une guidance personnalisée attentive, nourrie de ce que j’ai moi-même exploré, intégré et incarné au fil de mon propre chemin.",
          cta: "Commencer Votre Voyage",
        },
      ],
      details: [
        {
          tagline: "Un espace pour te rejoindre là où tu es.",
          what: {
            title: "Ce Qu'est Ce Chemin",
            paragraph1: "Chaque espace de guidance est pensé pour te rejoindre exactement là où tu en es, en honorant ton unicité et tes besoins du moment.",
            paragraph2: "C'est une invitation à ralentir et à écouter ce qui est présent en toi.",
          },
          who: {
            title: "Ce Chemin Est Pour Toi Si",
            items: [
              "Tu cherches un espace d'écoute et de présence",
              "Tu traverses un moment de flou ou de questionnement",
              "Tu as besoin d'un regard extérieur bienveillant",
            ],
          },
          transformation: {
            title: "Le Voyage",
            quote: "Le premier pas vers soi est souvent le plus simple.",
            paragraph1: "Par la présence et l'écoute, nous créons ensemble l'espace nécessaire pour que ta propre clarté puisse émerger.",
            paragraph2: "Une séance pour retrouver ton centre.",
          },
          how: {
            title: "Le Processus",
            steps: [
              {
                title: "Rencontre",
                description: "Un temps pour poser ce qui est là pour toi aujourd'hui.",
              },
              {
                title: "Guidance",
                description: "Une exploration intuitive pour éclairer ton chemin.",
              },
            ],
          },
          cta: {
            title: "Prêt à Commencer ?",
            description: "Contacte-moi pour explorer ce chemin ensemble.",
            button: "Me Contacter",
          },
        },
        {
          tagline: "Un espace sacré pour vous souvenir de qui vous êtes vraiment.",
          what: {
            title: "Ce Qu'est Ce Service",
            paragraph1: "Les Séances de Guidance Individuelles 1:1 sont un voyage en soi, conçu pour vous accompagner dans la création d'une véritable structure dans votre vie et établir une base solide afin que vous puissiez traverser la vie avec plus de facilité, de clarté et de direction.",
            paragraph2: "Ce n'est pas du coaching au sens traditionnel. C'est un voyage de souvenance — retirer les couches de conditionnement pour révéler la vérité qui a toujours vécu en vous.",
          },
          who: {
            title: "Ce Chemin Est Pour Vous Si",
            items: [
              "Vous vous sentez appelée vers quelque chose de plus profond mais ne pouvez pas tout à fait le nommer",
              "Vous naviguez une transition de vie significative ou un carrefour",
              "Vous sentez qu'il y a plus dans la vie que ce que vous avez vécu",
              "Vous êtes prête à libérer les anciens schémas qui ne vous servent plus",
              "Vous cherchez la clarté, l'alignement et une connexion plus profonde avec votre but",
            ],
          },
          transformation: {
            title: "La Transformation",
            quote: "La vraie transformation commence quand nous arrêtons d'essayer de devenir quelqu'un de nouveau et commençons à nous souvenir de qui nous avons toujours été.",
            paragraph1: "À travers notre travail ensemble, vous cultiverez une confiance profonde en votre propre connaissance intérieure. Le bruit des attentes extérieures s'apaise, et vous commencez à entendre la voix de votre moi authentique — claire, calme et inébranlable.",
            paragraph2: "Il ne s'agit pas de changement dramatique. Il s'agit de revenir à vous-même. De traverser la vie avec un sentiment d'ancrage et de possibilité qui semble à la fois ancien et entièrement nouveau.",
          },
          how: {
            title: "Comment Ça Fonctionne",
            steps: [
              {
                title: "Connexion Initiale",
                description: "Nous commençons par une conversation pour comprendre où vous êtes et ce qui vous appelle.",
              },
              {
                title: "Séances Sacrées",
                description: "À travers des séances 1:1, nous travaillons avec l'intuition, la présence et des pratiques ancrées pour illuminer votre chemin.",
              },
              {
                title: "Intégration",
                description: "Entre les séances, vous recevrez des pratiques et des réflexions pour approfondir votre voyage.",
              },
            ],
          },
          cta: {
            title: "Prête à Commencer ?",
            description: "Si quelque chose dans ces mots résonne en vous, peut-être est-il temps pour nous de nous connecter.",
            button: "Commencer la Conversation",
          },
        },
        {
          tagline: "Un soutien dédié pour incarner votre transformation radicale.",
          what: {
            title: "Ce Qu'est Ce Voyage",
            paragraph1: "Le Voyage Transformationnel de 4 Semaines est une immersion profonde dans votre paysage intérieur. Au cours de quatre sessions ciblées, nous travaillons en étroite collaboration pour naviguer à travers les blocages et les ouvertures qui se présentent alors que vous entrez dans une nouvelle façon d'être.",
            paragraph2: "C'est un espace dédié pour ceux qui sont prêts à aller au-delà de la simple compréhension et à vivre la réalité de leur vérité.",
          },
          who: {
            title: "Ce Voyage Est Pour Vous Si",
            items: [
              "Vous êtes prêt pour un soutien constant et ciblé sur une période dédiée",
              "Vous voulez des outils pratiques pour intégrer la transformation dans votre vie quotidienne",
              "Vous ressentez l'appel à plonger plus profondément dans la sagesse du corps",
              "Vous traversez une période de changement intense et cherchez une ancre solide",
            ],
          },
          transformation: {
            title: "Le Changement",
            quote: "La vraie transformation commence quand nous arrêtons d'essayer de devenir quelqu'un de nouveau et commençons à nous souvenir de qui nous avons toujours été.",
            paragraph1: "À travers notre travail ensemble, vous cultiverez une confiance profonde en votre propre connaissance intérieure. Le bruit des attentes extérieures s'apaise, et vous commencez à entendre la voix de votre moi authentique — claire, calme et inébranlable.",
            paragraph2: "Il s'agit de renforcer votre capacité à rester présent avec vous-même à travers toutes les saisons de votre éveil.",
          },
          how: {
            title: "Le Chemin",
            steps: [
              {
                title: "Semaine 1 : Fondations",
                description: "S'ancrer dans votre réalité actuelle et identifier les intentions fondamentales de notre travail.",
              },
              {
                title: "Semaine 2 & 3 : Approfondissement",
                description: "Traverser les couches de conditionnement et s'ouvrir à l'intelligence du corps.",
              },
              {
                title: "Semaine 4 : Intégration",
                description: "Établir des pratiques et des rythmes pour soutenir votre transformation dans le monde.",
              },
            ],
          },
          cta: {
            title: "Prêt à Plonger ?",
            description: "Si vous ressentez l'appel d'un soutien dédié, explorons ensemble si ce voyage vous convient.",
            button: "Postuler pour le Voyage",
          },
        },
      ],
      detail_page: {
        back: "Retour aux Services",
        sections: {
          what: "L'Offrande",
          who: "Pour Qui",
          transformation: "Le Voyage",
          how: "Le Processus",
        },
      },
      cta: {
        title: "Pas Sûre Par Où Commencer ?",
        description: "Si vous ressentez l'appel mais n'êtes pas sûre quel chemin vous convient, contactez-moi. Nous pouvons explorer ensemble.",
        button: "Connectons-nous",
      },
    },
  },
};

export type Translations = TranslationSchema;
