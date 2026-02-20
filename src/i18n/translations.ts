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
      description: "Each offering is designed to meet you where you are, honoring both your uniqueness and your core need.",
      items: [
        {
          title: "Individual 1:1 Guidance Sessions",
          subtitle: "1:1 Guidance Sessions",
          description: "This offering is a journey in itself, designed to support you in creating a real structure in your life and establish a solid foundation so you can move through life with greater ease, clarity and direction.",
          cta: "Learn More",
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
        description: "Each offering is designed to meet you where you are, honoring both your uniqueness and your core need.",
      },
      catalog_section: {
        subtitle: "Ways to Work Together",
        title: "Choose Your Path",
        note: "More offerings will be available soon. Each path is crafted with intention.",
      },
      catalog: [
        {
          slug: "vision-alignment",
          title: "4-WEEK TRANSFORMATIONAL JOURNEY",
          subtitle: "Human Design & Guidance",
          description: "Over the course of these four sessions, you will receive my personal and dedicated guidance, supported by practical tools and insights I have gathered and embodied through my own path.",
          cta: "Explore This Path",
        },
      ],
      details: [
        {
          tagline: "A return to your own natural rhythm.",
          what: {
            title: "What This Journey Is",
            paragraph1: "Over the course of these four sessions, you will receive my personal and dedicated guidance, supported by practical tools and insights I have gathered and embodied through my own path.",
            paragraph2: "At the heart of this work are your Strategy and Inner Authority, the two pillars of your Human Design chart. Not as concepts to understand, but as principles to live by.",
          },
          who: {
            title: "This Guidance Is For You If",
            items: [
              "You are ready to live differently, with more truth and less resistance",
              "You seek a deeper alignment with your unique soul trajectory",
              "You want to reconnect with your body's intelligence and natural rhythm",
              "You feel the call to truly transform your way of living",
            ],
          },
          transformation: {
            title: "The Transformation",
            quote: "I will guide you in understanding how to operate correctly as yourself, reducing resistance and restoring clarity.",
            paragraph1: "What I share with you is a different way of living. One that brings you back into your body’s intelligence, where life moves with you rather than against you.",
            paragraph2: "Along this journey, I may also introduce complementary tools that gently support this process, such as the practice of presence, pathways for opening the heart, and the wisdom of Tea Medicine.",
          },
          how: {
            title: "The Process",
            steps: [
              {
                title: "Personal Guidance",
                description: "Four dedicated sessions focusing on your Strategy and Inner Authority.",
              },
              {
                title: "Sacred Tools",
                description: "Integration of presence, heart opening, and body nourishment in alignment with its needs.",
              },
              {
                title: "Ongoing Support",
                description: "Direct access to me via WhatsApp and resources like selected books and audio materials.",
              },
            ],
          },
          cta: {
            title: "Ready to Begin?",
            description: "If you feel the call to truly transform your way of living, I would be honored to support you.",
            button: "Start the Journey",
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
      subtitle: "Offres",
      title_line1: "Chemin de",
      title_line2: "Réalignement",
      description: "Chaque espace de guidance est pensé pour te rejoindre exactement là où tu en es, en honorant ton unicité et tes besoins du moment.",
      items: [
        {
          title: "4× Sessions de guidance individuelle",
          subtitle: "Guidance Intuitive",
          description: "Cet accompagnement est un voyage à part entière.\nIl te guide à créer une structure juste dans ta vie, à ancrer des fondations stables et solides, afin de cheminer avec davantage de clarté, plus de fluidité et de sens.",
          cta: "En Savoir Plus",
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
        subtitle: "OFFRES",
        title: "Chemin de Réalignement",
        description: "Chaque espace de guidance est pensé pour te rejoindre exactement là où tu en es, en honorant ton unicité et tes besoins du moment.",
      },
      catalog_section: {
        subtitle: "Travailler Ensemble",
        title: "Choisissez Votre Chemin",
        note: "D'autres offrandes seront bientôt disponibles. Chaque chemin est créé avec intention.",
      },
      catalog: [
        {
          slug: "vision-alignment",
          title: "CHEMIN DE RETOUR À SOI (4 semaines)",
          subtitle: "Design Humain & Guidance",
          description: "Au fil de ces 4 sessions, je t’emmène pas à pas vers un retour à ton essence, au travers d’une guidance personnalisée attentive, nourrie de ce que j’ai moi-même exploré, intégré et incarné.",
          cta: "Découvrir ce chemin",
        },
      ],
      details: [
        {
          tagline: "Un retour au bon sens, qui ramène à l’intelligence du corps.",
          what: {
            title: "Ce Qu'est Ce Chemin",
            paragraph1: "Au fil de ces 4 sessions, je t’emmène pas à pas vers un retour à ton essence, au travers d’une guidance personnalisée attentive, nourrie de ce que j’ai moi-même exploré, intégré et incarné au fil de mon propre chemin.",
            paragraph2: "Au cœur de ce cheminement se trouvent ta Stratégie et ton Autorité Intérieure, les deux piliers sur lesquelles s’appuie ton fonctionnement unique, que l’on retrouve dans ta charte de Design Humain.",
          },
          who: {
            title: "Ce Chemin Est Pour Toi Si",
            items: [
              "Tu es prêt à vivre autrement : avec plus de vérité et moins de résistance",
              "Tu ressens un appel à bouleverser ton existence et retrouver du sens",
              "Tu as besoin d'un accompagnement pour incarner ton fonctionnement unique",
              "Tu cherches une reconnexion profonde à ta trajectoire unique",
            ],
          },
          transformation: {
            title: "Le Voyage",
            quote: "Non pas comme des concepts à saisir mentalement, mais comme des principes à incarner dans la vie de tous les jours.",
            paragraph1: "Je marcherai à tes côtés pour t’aider à te Reconnecter à ton essence, Réduire la Résistance, Retrouver ce qui fait sens pour toi et Te réaligner avec ta trajectoire.",
            paragraph2: "Tout au long de ton cheminement, je proposerai également des outils complémentaires : la pratique de la Présence, l’ouverture du Cœur, ainsi que les bienfaits de la Médecine du Thé.",
          },
          how: {
            title: "Le Processus",
            steps: [
              {
                title: "Guidance Dédiée",
                description: "4 sessions pour apprendre à coopérer avec la vie plutôt qu’à y résister.",
              },
              {
                title: "Outils de Présence",
                description: "Pratiques d'ouverture du cœur et repères pour nourrir ton corps selon ses besoins.",
              },
              {
                title: "Soutien Continu",
                description: "Accès direct via WhatsApp et partage de ressources (livres, audio) ayant nourri mon intégration.",
              },
            ],
          },
          cta: {
            title: "Prêt à Commencer ?",
            description: "Si tu ressens un appel à bouleverser ton existence, ce serait un honneur pour moi de te guider.",
            button: "Me Contacter",
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
