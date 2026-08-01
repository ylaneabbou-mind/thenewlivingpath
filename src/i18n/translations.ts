export type Language = "en" | "fr";

// Type for translation structure (using en as base)
type TranslationSchema = {
  nav: { home: string; histoire: string; services: string; ressources: string; contact: string };
  hero: { tagline: string; title_line1: string; title_line2: string; description: string; cta_primary: string; cta_secondary: string; portrait_placeholder: string };
  mission: { subtitle: string; title_line1: string; title_line2: string; quote: string; description1: string; description2: string; description3: string; description4: string };
  about: { subtitle: string; title_line1: string; title_line2: string; quote: string; paragraph1: string; paragraph2: string; paragraph3: string; signature: string; image_placeholder: string };
  offerings: { subtitle: string; title_line1: string; title_line2: string; description: string; items: Array<{ title: string; subtitle: string; description: string; cta: string }> };
  testimonials: { subtitle: string; title_line1: string; title_line2: string; view_more: string; view_less: string; items: Array<{ quote: string; author: string; title: string }> };
  blog: { subtitle: string; title_line1: string; title_line2: string; view_all: string; image_placeholder: string; coming_soon: string; posts: Array<{ title: string; excerpt: string; date: string; category: string }> };
  newsletter: { subtitle: string; title_line1: string; title_line2: string; description: string; placeholder: string; cta: string; privacy: string };
  footer: { tagline: string; nav: { about: string; offerings: string; writings: string; contact: string }; copyright: string; made_with: string; and_intention: string };
  storyPage: {
    hero: { subtitle: string; title: string; description: string; quote: string; description2: string };
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
      tagline: "Guidance",
      title_line1: "Grounded in Earth,",
      title_line2: "Aligned with the Stars",
      description: "A space to reconnect with your inner compass, where the wisdom of your body meets the deeper rhythm of life.\n\nThrough Human Design, presence, and embodied practices, I guide you to release what no longer serves you and reconnect with the truth of who you are.",
      cta_primary: "Begin Your Journey",
      cta_secondary: "Discover the Path",
      portrait_placeholder: "Your Portrait",
    },

    // Mission
    mission: {
      subtitle: "The Vision",
      title_line1: "Returning to Your",
      title_line2: "True Nature",
      quote: '"True transformation begins when we stop trying to control the path ahead and learn to trust the wisdom that has always guided us from within."',
      description1: "We spend so much of our lives trying to become someone else — following expectations, conditioning, and the endless voice of the mind.",
      description2: "Yet beneath all of this, there is a deeper intelligence waiting to be trusted.",
      description3: "I create a space where you can reconnect with your body, understand your unique nature, and move through life with greater clarity, trust, and alignment.",
      description4: "This journey is not about creating a new version of yourself. It is about reconnecting with the wisdom and aliveness that have always been within you.",
    },

    // About
    about: {
      subtitle: "ABOUT YLANE",
      title_line1: "A guide Between",
      title_line2: "Worlds",
      quote: "Rooted in the Earth, reaching for the Infinite.",
      paragraph1: "My journey has taught me that life becomes richer when we stop trying to control every step and begin listening to the wisdom within.",
      paragraph2: "Through Human Design, embodied practices, and deep presence, I support you in reconnecting with your own inner guidance and honoring the unique way you are designed to move through life.",
      paragraph3: "Whether you are navigating a transition, seeking deeper clarity, or feeling called to live in a more authentic way, you are welcome here.",
      signature: "I am here to walk alongside you on your journey.",
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
      view_more: "View more",
      view_less: "View less",
      items: [
        {
          quote: "Ylane has been an invaluable guide and ally on my journey. Through his ability to clearly recognize the patterns that needed to change, along with his gift for helping release mental, emotional, and energetic blockages, he helped me create a life that is aligned with health, harmony, and my true nature. Today, I feel deeply connected to my inner authority and able to continue my path without relying on external guidance. Meeting Ylane and receiving his support has truly been a blessing, and I am deeply grateful that our paths crossed.",
          author: "Solène",
          title: "Generator, 3/5, Sacral",
        },
        {
          quote: "Ylane has helped me tremendously and continues to support me to this day on my journey of reconnecting with my true self. There was truly a \"before\" and an \"after.\" Thank you for your guidance, your presence, and everything you've shared. I'm deeply grateful. 🙏🙂",
          author: "Arthur",
          title: "Generator, 2/5, Sacral",
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
      coming_soon: "New reflections are coming soon",
      posts: [],
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
      tagline: "A space for those seeking a deeper understanding of themselves, a closer connection with their inner guidance, and a more authentic way of living.",
      nav: {
        about: "Story",
        offerings: "Services",
        writings: "Resources",
        contact: "Contact",
      },
      copyright: "All rights reserved.",
      made_with: "Created with Heart and Soul",
      and_intention: "",
    },

    // Story Page
    storyPage: {
      hero: {
        subtitle: "My Story",
        title: "A Journey of Remembering",
        description: "Looking back, I can see that my path has been guided by one question:",
        quote: "There has to be another way to live",
        description2: "This question became the <strong>root of my journey</strong> and the driving force behind a <em>transformation</em> I could have never imagined.",
      },
      origins: {
        subtitle: "The Beginning",
        title: "Where It All Started",
        paragraph1: "My encounter with the <strong>Human Design System</strong> during an extended trip to <em>Mexico</em> became a profound turning point in my life. By honoring my <strong>Strategy</strong> and <strong>Authority</strong>, I discovered a different way of living—one that brought me closer to my true nature and to the natural flow of life.",
        paragraph2: "This journey has taken me across <em>many countries</em>, opened doors I could never have planned, and brought <strong>extraordinary encounters</strong> that no amount of control could have created. Each experience reminded me that when we learn to <em>listen within</em>, life can reveal paths the mind could never have imagined.",
        image_placeholder: "Portrait",
      },
      transformation: {
        subtitle: "The Turning Point",
        title: "When Everything Shifted",
        quote: "A new way of living",
        paragraph1: "Meeting <strong>Benjamin Thorre</strong> became one of the quiet turning points of my path. Through his guidance, alongside <strong>Human Design</strong> and years of embodied practice, I began to experience a <em>profound shift</em> in the way I relate to life.",
        paragraph2: "Along the way, I discovered the power of <em>simple daily rituals</em>:<ul><li><strong>Tea Ceremony</strong> — a practice of presence and connection.</li><li><strong>Food as medicine</strong> — a way to honor the body and its intelligence.</li></ul>Through these rituals, I found a deeper appreciation for the simple things that bring <strong>vitality, joy, and meaning</strong> into life.",
        paragraph3: "This way of living has brought me a profound sense of <strong>liberation</strong>. It allowed me to reconnect with parts of myself that had always been there: the <em>love of cooking</em>, the <em>joy of dancing</em>, the <em>desire to explore the world</em>, and the natural impulse to <em>support and guide others</em>.",
      },
      mission: {
        subtitle: "Today",
        title: "Holding Space for Your Journey",
        paragraph1: "Today, I offer a space where people discover the <strong>freedom of living as they were designed to live</strong>. A space where they can reconnect with their own <em>inner guidance</em>, trust the <em>wisdom of their body</em>, and feel safe to honor their true nature.",
        paragraph2: "My role isn't to tell people who they should become. It is to help them <u>remember who they have always been</u>. Because I believe that each of us carries a <strong>unique design</strong>, and that life becomes more <em>fluid, meaningful, and fulfilling</em> when we stop trying to become someone else and begin honoring who we truly are.",
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
        description: "Every journey begins with a first step.",
      },
      methods: {
        title: "Choose Your Path",
        description: "There is no pressure and no obligation. Simply an opportunity to connect, share what is present for you, and discover what may emerge from this encounter.\n\nChoose the way that feels most natural for you to get in touch. I will be happy to welcome you.",
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
        message: "Whether you're ready to take the next step or simply curious to explore, I welcome the opportunity to connect and exchange with you.",
        signature: "Looking forward to meeting you",
      },
    },

    // Resources Page
    resourcesPage: {
      hero: {
        subtitle: "Transmissions",
        title: "Wisdom & Reflections",
        description: "A space where I share my reflections, my experiences, and the teachings that continue to transform the way I see life.",
      },
      coming_soon: {
        badge: "Coming Soon",
        title: "Articles in Preparation",
        description: "I take the time to let the reflections and experiences I wish to share with you emerge naturally. Each message is inspired by my own journey and by the discoveries that continue to transform the way I see and experience life. They will arrive when the moment is right.",
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
        note: "More services will be available soon. Each path is crafted with intention.",
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
      tagline: "Guidance",
      title_line1: "Ancré dans la Terre,",
      title_line2: "Aligné avec les étoiles",
      description: "Un espace pour reconnecter avec votre boussole intérieure, là où la sagesse du corps rencontre le rythme naturel de la vie.\n\nÀ travers le Design Humain, la présence et des pratiques d'ancrage, je vous accompagne pour vous libérer de ce qui ne vous sert plus et vous reconnecter à votre essence.",
      cta_primary: "Commencer Votre Voyage",
      cta_secondary: "Découvrir le Chemin",
      portrait_placeholder: "Votre Portrait",
    },

    // Mission
    mission: {
      subtitle: "La Vision",
      title_line1: "Revenir à votre",
      title_line2: "Vraie Nature",
      quote: '"La véritable transformation commence lorsque nous cessons de vouloir contrôler le chemin et apprenons à faire confiance à la sagesse qui nous guide depuis toujours de l’intérieur."',
      description1: "Nous passons souvent une grande partie de notre vie à essayer de devenir quelqu’un d’autre — influencés par les attentes, les conditionnements et le bruit incessant du mental.",
      description2: "Pourtant, au-delà de tout cela, existe une intelligence plus profonde qui ne demande qu’à être écoutée.",
      description3: "Je crée un espace où vous pouvez renouer avec votre corps, comprendre votre nature unique et avancer dans la vie avec plus de clarté, de confiance et d’alignement.",
      description4: "Ce voyage ne consiste pas à créer une nouvelle version de vous-même. Il consiste à vous reconnecter à la sagesse et à l’élan de vie qui ont toujours été présents en vous.",
    },

    // About
    about: {
      subtitle: "À PROPOS DE YLANE",
      title_line1: "Un guide entre les",
      title_line2: "Mondes",
      quote: "Ancré dans la Terre, tourné vers l’Infini.",
      paragraph1: "Mon parcours m’a appris que la vie devient plus riche lorsque nous cessons de vouloir contrôler chaque étape et commençons à écouter la sagesse qui réside en nous.",
      paragraph2: "À travers le Design Humain, des pratiques d’ancrage et une présence profonde, je vous accompagne pour renouer avec votre propre guidance intérieure et honorer la manière unique dont vous êtes conçu pour avancer dans la vie.",
      paragraph3: "Que vous traversiez une période de changement, que vous cherchiez plus de clarté ou que vous ressentiez l’appel de transformer votre manière de vivre, vous êtes le bienvenu ici.",
      signature: "Je suis ici pour marcher à vos côtés sur votre chemin.",
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
      view_more: "Voir plus",
      view_less: "Voir moins",
      items: [
        {
          quote: "Ylane a été pour moi un précieux guide et allié sur mon chemin. Grâce à sa capacité à voir clairement les comportements à corriger ainsi que son don pour libérer les blocages — qu'ils soient mentaux, émotionnels ou énergétiques — il m'a permis d'établir pour moi-même une vie de santé et d'harmonie avec ma véritable nature. À présent, je me sens connecté avec mon autorité intérieure et suis capable de poursuivre ma voie sans besoin d'intervention extérieure. C'est vraiment une bénédiction de l'avoir croisé sur mon chemin et d'avoir reçu sa guidance !",
          author: "Solène",
          title: "Générateur, 3/5, Sacral",
        },
        {
          quote: "Ylane m'a beaucoup aidé (et m'aide encore à ce jour !) dans ma démarche de ré-alignement avec mon « True Self » ; il y a eu un avant et un après. Merci à Toi 🙏🙂.",
          author: "Arthur",
          title: "Générateur, 2/5, Sacral",
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
      coming_soon: "De nouveaux articles arrivent bientôt",
      posts: [],
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
      tagline: "Un espace pour celles et ceux qui souhaitent mieux se comprendre, se reconnecter plus profondément à leur guidance intérieure, et avancer vers une manière de vivre plus authentique.",
      nav: {
        about: "Histoire",
        offerings: "Services",
        writings: "Resources",
        contact: "Contact",
      },
      copyright: "Tous droits réservés.",
      made_with: "Créé avec le cœur et l'âme",
      and_intention: "",
    },

    // Story Page
    storyPage: {
      hero: {
        subtitle: "Mon Histoire",
        title: "Un chemin de reconnexion à soi",
        description: "Lorsque je regarde le chemin parcouru, je réalise qu'une question m'a accompagné depuis toujours :",
        quote: "Il doit exister une autre façon de vivre",
        description2: "Cette question a été comme une <strong>graine plantée en moi</strong>. Une invitation à chercher, à explorer, à remettre en question ce que l'on m'avait appris, et à découvrir une <em>manière de vivre plus alignée</em> avec ce que je ressentais profondément à l'intérieur.",
      },
      origins: {
        subtitle: "Les Débuts",
        title: "Là Où Tout a Commencé",
        paragraph1: "Cette quête m'a conduit vers des expériences que je n'aurais jamais pu imaginer. Ma rencontre avec le <strong>Design Humain</strong>, lors d'un long voyage au <em>Mexique</em>, a été un véritable tournant dans ma vie. Pour la première fois, j'ai découvert une approche qui ne me demandait pas de devenir quelqu'un d'autre, mais simplement de <em>revenir à qui j'étais déjà</em>.",
        paragraph2: "En apprenant à honorer ma <strong>Stratégie</strong> et mon <strong>Autorité intérieure</strong>, j'ai commencé à faire davantage confiance à la sagesse de mon corps, à <em>écouter mes ressentis</em> et à avancer avec plus de fluidité dans la vie. Ce voyage m'a emmené à travers <em>différents pays</em>, m'a ouvert des portes que mon mental n'aurait jamais pu prévoir, et m'a offert des <strong>rencontres extraordinaires</strong> qui n'auraient jamais pu être créées par le contrôle.",
        image_placeholder: "Portrait",
      },
      transformation: {
        subtitle: "Le Tournant",
        title: "Quand Tout a Basculé",
        quote: "Une autre façon de vivre",
        paragraph1: "Ma rencontre avec <strong>Benjamin Thorre</strong> a marqué un tournant profond dans mon parcours. J'ai eu la chance de croiser le chemin d'un être humain qui vit en harmonie avec son essence. Le temps passé à ses côtés a été un <em>véritable cadeau</em> dans mon parcours. À travers sa présence et sa façon unique d'habiter la vie, j'ai découvert qu'il existait une autre manière d'être au monde : <em>plus authentique, plus consciente et profondément libre</em>. À travers son accompagnement, le <strong>Design Humain</strong> et des années de suivi personnel, j'ai commencé à transformer ma relation à moi-même et à la vie. J'ai appris à voir le corps non plus comme quelque chose à contrôler, mais comme un <strong>véritable guide</strong>.",
        paragraph2: "Au fil de ce chemin, j'ai également redécouvert la <em>beauté des choses simples</em> :<ul><li><strong>La cérémonie du thé</strong> — un espace de présence, de connexion et de contemplation.</li><li><strong>La nourriture</strong> — une manière d'écouter mon corps, de le nourrir avec conscience et d'honorer son intelligence.</li></ul>À travers ces rituels du quotidien, j'ai retrouvé une profonde gratitude pour les petites choses qui donnent de la couleur à la vie : un repas préparé avec amour, une danse qui reconnecte au corps, des moments de présence, et des <strong>connexions authentiques</strong>.",
        paragraph3: "Cette façon de vivre m'a apporté un profond sentiment de <strong>liberté</strong>. Elle m'a permis de retrouver des parts de moi qui avaient toujours été là : l'<em>amour de cuisiner</em>, la <em>joie de danser</em>, la <em>curiosité d'explorer le monde</em>, et cet élan naturel de <em>guider et d'aider les autres</em>.",
      },
      mission: {
        subtitle: "Aujourd'hui",
        title: "Tenir un espace pour votre chemin",
        paragraph1: "Aujourd'hui, j'offre un espace où chacun peut découvrir la <strong>liberté de vivre en accord avec sa nature profonde</strong>. Un espace où les personnes peuvent se reconnecter à leur <em>guidance intérieure</em>, faire confiance à la <em>sagesse de leur corps</em>, et se sentir suffisamment en sécurité pour honorer pleinement qui elles sont.",
        paragraph2: "Mon rôle n'est pas de dire aux autres qui ils devraient devenir. Mon rôle est de les accompagner à <u>se souvenir de qui ils ont toujours été</u>. Car je crois profondément que chacun porte en lui une <strong>manière unique d'être au monde</strong>. Et que lorsque nous arrêtons de lutter pour devenir quelqu'un d'autre, la vie devient <em>plus fluide, plus authentique et pleine de sens</em>.",
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
        description: "Chaque chemin commence par un premier pas.",
      },
      methods: {
        title: "Choisissez Votre Chemin",
        description: "Il n'y a aucune pression, aucune obligation. Seulement l'opportunité d'échanger, de partager ce qui vous traverse et de voir ce qui peut émerger de cette rencontre.\n\nChoisissez la façon qui vous convient le mieux pour entrer en contact. Je serai heureux de vous accueillir.",
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
        message: "Que vous soyez prêt à faire le prochain pas ou simplement curieux d'explorer, je serai heureux d'échanger avec vous et de découvrir ce qui vous amène.",
        signature: "Au plaisir de vous rencontrer",
      },
    },

    // Resources Page
    resourcesPage: {
      hero: {
        subtitle: "Transmissions",
        title: "Sagesse & Réflexions",
        description: "Je prends le temps de laisser mûrir les réflexions et les expériences que je souhaite vous transmettre. Chaque partage est inspiré par mon propre chemin et par les découvertes qui continuent de transformer ma manière de voir la vie. Ils arriveront lorsque le moment sera juste.",
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
        note: "D'autres services seront bientôt disponibles. Chaque chemin est créé avec intention.",
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
