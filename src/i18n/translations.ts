export type Language = "en" | "fr";

// Type for translation structure (using en as base)
type TranslationSchema = {
  nav: { home: string; histoire: string; services: string; ressources: string; contact: string };
  hero: { tagline: string; title_line1: string; title_line2: string; description: string; cta_primary: string; cta_secondary: string; portrait_placeholder: string };
  mission: { subtitle: string; title_line1: string; title_line2: string; quote: string; description1: string; description2: string; description3: string; description4: string };
  about: { subtitle: string; title_line1: string; title_line2: string; quote: string; paragraph1: string; paragraph2: string; paragraph3: string; signature: string; image_placeholder: string; pills: string[] };
  offerings: { subtitle: string; title_line1: string; title_line2: string; description: string; items: Array<{ title: string; subtitle: string; description: string; cta: string }> };
  testimonials: { subtitle: string; title_line1: string; title_line2: string; view_more: string; view_less: string; items: Array<{ quote: string; author: string; title: string }> };
  blog: { subtitle: string; title_line1: string; title_line2: string; view_all: string; image_placeholder: string; coming_soon: string; posts: Array<{ title: string; excerpt: string; date: string; category: string }> };
  newsletter: { subtitle: string; title_line1: string; title_line2: string; description: string; placeholder: string; cta: string; privacy: string; success: string };
  footer: { tagline: string; nav: { about: string; offerings: string; writings: string; contact: string }; copyright: string; made_with: string; and_intention: string };
  storyPage: {
    hero: { subtitle: string; title: string; description: string; quote: string; description2: string };
    origins: { subtitle: string; title: string; paragraph1: string; paragraph2: string; image_placeholder: string };
    transformation: {
      subtitle: string;
      title: string;
      quote: string;
      labels: { encounter: string; rituals: string; liberation: string };
      encounter: string;
      ritualsIntro: string;
      rituals: Array<{ title: string; description: string }>;
      ritualsOutro: string;
      liberation: string;
    };
    mission: { subtitle: string; title: string; paragraph1: string; paragraph2: string; signature: string; image_placeholder: string };
    cta: { title: string; description: string; button: string };
  };
  contactPage: {
    hero: { subtitle: string; title: string; description: string };
    methods: {
      title: string;
      description: string;
      whatsapp: { label: string; description: string; hint: string };
      instagram: { label: string; description: string; hint: string };
      email: { label: string; description: string; hint: string };
    };
    closing: { quote: string; message: string; signature: string };
  };
  resourcesPage: {
    hero: { subtitle: string; title: string; description: string };
    coming_soon: { badge: string; title: string; description: string };
    newsletter: { title: string; description: string; note: string };
    humanDesign: {
      badge: string;
      title: string;
      description: string;
      privacy: string;
      form: {
        firstName: string;
        firstNamePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        birthDate: string;
        birthTime: string;
        birthTimeNote: string;
        city: string;
        cityPlaceholder: string;
        country: string;
        countryPlaceholder: string;
        submit: string;
        validationError: string;
      };
      loadingTitle: string;
      loadingSubtitle: string;
      result: {
        eyebrow: string;
        greeting: string; // contains {name}
        locationPrefix: string;
        typeLabel: string;
        strategyLabel: string;
        authorityLabel: string;
        profileLabel: string;
        disclaimer: string;
        recalc: string;
      };
      explanations: {
        type: Record<string, string>;
        typeFallback: string;
        strategy: Record<string, string>;
        strategyFallback: string;
        authority: Record<string, string>;
        authorityFallback: string;
        profileFallback: string;
      };
      cta: { text: string; button: string };
      errors: {
        invalid_input: string;
        location_not_found: string;
        quota: string;
        config: string;
        upstream: string;
        generic: string;
      };
    };
  };
  servicesPage: {
    hero: { subtitle: string; title: string; description: string };
    catalog_section: { subtitle: string; title: string; note: string };
    catalog: Array<{ slug: string; title: string; subtitle: string; description: string; cta: string }>;
    details: Array<{
      tagline: string;
      what: { title: string; paragraph1: string; paragraph2: string };
      who: { title: string; items: string[] };
      transformation: { title: string; quote: string; paragraph1: string; paragraph2: string; tools: Array<{ label: string }> };
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
      pills: ["Human Design", "Presence", "Embodied Practices"],
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
          quote: "Every time I spend time with Ylane, I feel like I grow ten years in just a few days. The way he lives as his authentic self, shares his passions with such clarity and ease, and holds such an open heart creates a space where you feel completely safe, seen, and free from judgment. I wholeheartedly recommend him as a mentor, teacher, friend, or brother. He has a unique gift for guiding people back to themselves and helping them walk the path of their own evolution. He helps you see, embody, and express the deepest beauty of who you truly are. The future is already here, and thanks to Ylane, we can step into it with greater trust, clarity, and peace.",
          author: "Jordan",
          title: "Projector, 6/2, Splenic",
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
      success: "Welcome to the Circle. Check your inbox soon.",
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
        paragraph1: "My encounter with the <strong>Human Design System</strong> during an extended trip to <em>Mexico</em> became a profound turning point in my life. By honoring my <strong>Strategy</strong> and <strong>Authority</strong>, I discovered a different way of living, one that brought me closer to my true nature and to the natural flow of life.",
        paragraph2: "This journey has taken me across <em>many countries</em>, opened doors I could never have planned, and brought <strong>extraordinary encounters</strong> that no amount of control could have created. Each experience reminded me that when we learn to <em>listen within</em>, life can reveal paths the mind could never have imagined.",
        image_placeholder: "Portrait",
      },
      transformation: {
        subtitle: "The Turning Point",
        title: "When Everything Shifted",
        quote: "A new way of living",
        labels: { encounter: "The Encounter", rituals: "The Rituals", liberation: "The Liberation" },
        encounter: "Meeting <strong>Benjamin Thorre</strong> became one of the quiet turning points of my path.<br /><br />I was fortunate to cross paths with someone who lives in <em>deep harmony with his essence</em>. The time I spent with him was a <em>true gift</em> on my journey.<br /><br />Through his unique way of moving through life, I discovered that there was another way of being in the world, one that is <em>more authentic, more conscious, and deeply free</em>.<br /><br />Supported by his guidance, <strong>Human Design</strong>, and years of personal exploration, I began to transform the way I relate to myself and to life. I learned to see the body not as something to control, but as a <strong>true guide</strong>.",
        ritualsIntro: "Along the way, I discovered the power of <em>simple daily rituals</em>:",
        rituals: [
          { title: "Tea Ceremony", description: "A practice of presence and connection." },
          { title: "Food as medicine", description: "A way to honor the body and its intelligence." },
          { title: "Embodied presence", description: "Relaxing into the body, cultivating awareness, and reconnecting with the natural flow of life." },
        ],
        ritualsOutro: "Through these rituals, I found a deeper appreciation for the simple things that bring <strong>vitality, joy, and meaning</strong> into life.",
        liberation: "This way of living has brought me a profound sense of <strong>liberation</strong>. It allowed me to reconnect with parts of myself that had always been there: the <em>love of cooking</em>, the <em>joy of dancing</em>, the <em>desire to explore the world</em>, and the natural impulse to <em>support and guide others</em>.",
      },
      mission: {
        subtitle: "Today",
        title: "Holding Space for Your Journey",
        paragraph1: "Today, I offer a space where people discover the <strong>freedom of living as they were designed to live</strong>. A space where they can reconnect with their own <em>inner guidance</em>, trust the <em>wisdom of their body</em>, and feel safe to honor their true nature.",
        paragraph2: "My role isn't to tell people who they should become. It is to help them <strong>remember who they have always been</strong>. Because I believe that each of us carries a <strong>unique design</strong>, and that life becomes more <em>fluid, meaningful, and fulfilling</em> when we stop trying to become someone else and begin honoring who we truly are.",
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
          hint: "Usually a quick reply",
        },
        instagram: {
          label: "Instagram",
          description: "Follow my journey and send a message through @ylane.",
          hint: "See the journey",
        },
        email: {
          label: "Email",
          description: "For longer inquiries or if you prefer a more formal approach.",
          hint: "For deeper questions",
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
        title: "Visions & Reflexions",
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
      humanDesign: {
        badge: "Free Tool",
        title: "Calculate Your Human Design",
        description:
          "Discover the blueprint of your energy. Enter your birth details and receive the foundations of your unique Human Design chart — Type, Strategy, Authority, and Profile.",
        privacy:
          "Your birth data is used only to calculate your chart and is not stored beyond this request. We keep only your email to stay in touch — this site is based in the EU (GDPR compliant).",
        form: {
          firstName: "First name",
          firstNamePlaceholder: "Your first name",
          email: "Email",
          emailPlaceholder: "you@example.com",
          birthDate: "Date of birth",
          birthTime: "Exact time of birth",
          birthTimeNote:
            "The exact time of birth is essential for an accurate calculation. Check your birth certificate if you can.",
          city: "City of birth",
          cityPlaceholder: "e.g. Paris",
          country: "Country of birth",
          countryPlaceholder: "e.g. France",
          submit: "Reveal My Design",
          validationError: "Please fill in every field with a valid email before calculating.",
        },
        loadingTitle: "Aligning the stars…",
        loadingSubtitle: "Calculating your unique design",
        result: {
          eyebrow: "Your Human Design",
          greeting: "{name}, here is your design",
          locationPrefix: "Calculated for",
          typeLabel: "Type",
          strategyLabel: "Strategy",
          authorityLabel: "Authority",
          profileLabel: "Profile",
          disclaimer:
            "This is a first glimpse of your design. A full reading brings these pieces to life together.",
          recalc: "Calculate another chart",
        },
        // NOTE: These explanations are written in plain, generic language on purpose.
        // Ilan can refine or personalise the wording later.
        explanations: {
          type: {
            Generator:
              "You carry a steady, renewable life-force. When you follow what genuinely lights you up, your energy sustains you and the right things flow.",
            "Manifesting Generator":
              "You blend a Generator's stamina with a fast, initiating drive. You thrive when you honour what truly excites you and let yourself move quickly.",
            Projector:
              "You are here to guide and see others clearly. Your energy works best in focused bursts, and you shine when your gifts are recognised and invited.",
            Manifestor:
              "You are an initiator, made to start things and set them in motion. You find peace when you follow your impulses and inform others before acting.",
            Reflector:
              "You are a rare mirror of your environment, deeply sensitive to the people and places around you. Clarity comes with time and the right surroundings.",
          },
          typeFallback:
            "Your Type describes the way your energy is designed to work and engage with life.",
          strategy: {
            "Wait to Respond":
              "Rather than forcing or chasing, let life bring things to you and notice your gut response before you commit.",
            "To Inform":
              "Let the people affected know before you act — informing clears the way and softens resistance.",
            "Wait for the Invitation":
              "Wait to be genuinely recognised and invited for the big things — the invitation signals the timing is right.",
            "Wait a Lunar Cycle":
              "Give important decisions a full lunar cycle, about a month, so real clarity can settle before you commit.",
          },
          strategyFallback:
            "Following your Strategy helps you move through life with less resistance and more ease.",
          authority: {
            Sacral:
              "Trust the in-the-moment response of your body — a spontaneous yes or no — over the reasoning of the mind.",
            Emotional:
              "Wait for your emotional wave to settle; sleeping on important decisions brings the clarity the heat of the moment hides.",
            Splenic:
              "Trust your quiet, instinctive knowing in the present moment — it speaks once, softly, for your wellbeing.",
            Ego:
              "Honour what your willpower and heart truly want; decisions hold when you have the drive to back them.",
            "Self-Projected":
              "Talk it through out loud with someone you trust — hearing your own voice reveals what is true for you.",
            Mental:
              "Take your time and think out loud with trusted people, letting the right environment bring your clarity.",
            Lunar:
              "Let decisions ripen over a full lunar cycle, sampling different environments before you commit.",
          },
          authorityFallback:
            "Your Authority is the inner compass that shows you how to make decisions that are truly right for you.",
          profileFallback:
            "Your Profile describes how you naturally learn, connect, and move through life — the role you are here to play.",
        },
        cta: {
          text: "Want to go deeper into understanding your design? Explore the 1:1 guidance journey.",
          button: "Discover the 4-Week Journey",
        },
        errors: {
          invalid_input:
            "Some details look incomplete. Please check your date, time and place of birth.",
          location_not_found:
            "We couldn't find that city. Try a nearby larger city or check the spelling.",
          quota:
            "The calculator is temporarily unavailable. Please try again later, or reach out to me directly.",
          config:
            "The calculator is temporarily unavailable. Please try again later, or reach out to me directly.",
          upstream:
            "The calculator is temporarily unavailable. Please try again later, or reach out to me directly.",
          generic:
            "Something went wrong. Please try again later, or reach out to me directly.",
        },
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
            title: "What This Journey Is About",
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
            paragraph2: "Along this journey, I may also introduce complementary tools that gently support this process:",
            tools: [
              { label: "Practice of presence" },
              { label: "Opening the heart" },
              { label: "Tea Medicine" },
              { label: "Body nourishment & detox" },
            ],
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
          who: "Come Back Home",
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
      pills: ["Design Humain", "Présence", "Pratiques incarnées"],
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
          quote: "Chaque fois que je passe du temps avec Ylane, j'ai l'impression d'évoluer de dix ans en quelques jours. Sa manière d'être authentiquement lui, de transférer ses passions de manière lisible et plaisante, son cœur grand ouvert qui amène toujours un espace sécurisant et sans jugement font que je le recommande en tant que mentor, enseignant, ami, frère… il a toutes les clés en lui pour vous amener sur le chemin de votre évolution. Pour vous permettre de voir, de vivre et d'exprimer votre plus grande beauté. Le futur est déjà là et grâce à Ylane, nous pouvons y entrer plus sereinement.",
          author: "Jordan",
          title: "Projecteur, 6/2, Splénique",
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
      success: "Bienvenue dans le Cercle. Surveillez votre boîte mail.",
    },

    // Footer
    footer: {
      tagline: "Un espace pour celles et ceux qui souhaitent mieux se comprendre, se reconnecter à leur guidance intérieure, et avancer vers une manière de vivre plus authentique.",
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
        labels: { encounter: "La Rencontre", rituals: "Les Rituels", liberation: "La Libération" },
        encounter: "Ma rencontre avec <strong>Benjamin Thorre</strong> a marqué un tournant profond dans mon parcours. J'ai eu la chance de croiser le chemin d'un être humain qui vit en harmonie avec son essence.<br /><br />Le temps passé à ses côtés a été un <em>véritable cadeau</em> dans mon parcours. À travers sa présence et sa façon unique d'habiter la vie, j'ai découvert qu'il existait une autre manière d'être au monde : <em>plus authentique, plus consciente et profondément libre</em>.<br /><br />À travers son accompagnement, le <strong>Design Humain</strong> et des années de suivi personnel, j'ai commencé à transformer ma relation à moi-même et à la vie. J'ai appris à voir le corps non plus comme quelque chose à contrôler, mais comme un <strong>véritable guide</strong>.",
        ritualsIntro: "Au fil de ce chemin, j'ai également redécouvert la <em>beauté des choses simples</em> :",
        rituals: [
          { title: "La cérémonie du thé", description: "Un espace de présence, de connexion et de contemplation." },
          { title: "La nourriture", description: "Une manière d'écouter mon corps, de le nourrir avec conscience et d'honorer son intelligence." },
        ],
        ritualsOutro: "À travers ces rituels du quotidien, j'ai retrouvé une profonde gratitude pour les petites choses qui donnent de la couleur à la vie : un repas préparé avec amour, une danse qui reconnecte au corps, des moments de présence, et des <strong>connexions authentiques</strong>.",
        liberation: "Cette façon de vivre m'a apporté un profond sentiment de <strong>liberté</strong>. Elle m'a permis de retrouver des parts de moi qui avaient toujours été là : l'<em>amour de cuisiner</em>, la <em>joie de danser</em>, la <em>curiosité d'explorer le monde</em>, et cet élan naturel de <em>guider et d'aider les autres</em>.",
      },
      mission: {
        subtitle: "Aujourd'hui",
        title: "Tenir un espace pour votre chemin",
        paragraph1: "Aujourd'hui, j'offre un espace où chacun peut découvrir la <strong>liberté de vivre en accord avec sa nature profonde</strong>. Un espace où les personnes peuvent se reconnecter à leur <em>guidance intérieure</em>, faire confiance à la <em>sagesse de leur corps</em>, et se sentir suffisamment en sécurité pour honorer pleinement qui elles sont.",
        paragraph2: "Mon rôle n'est pas de dire aux autres qui ils devraient devenir. Mon rôle est de les accompagner à <strong>se souvenir de qui ils ont toujours été</strong>. Car je crois profondément que chacun porte en lui une <strong>manière unique d'être au monde</strong>. Et que lorsque nous arrêtons de lutter pour devenir quelqu'un d'autre, la vie devient <em>plus fluide, plus authentique et pleine de sens</em>.",
        signature: "Avec amour et présence, Ylane",
        image_placeholder: "Vision",
      },
      cta: {
        title: "Prêt à Commencer ?",
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
          hint: "Réponse rapide",
        },
        instagram: {
          label: "Instagram",
          description: "Suivez mon parcours et envoyez un message via @ylane.",
          hint: "Découvrir le parcours",
        },
        email: {
          label: "Email",
          description: "Pour des demandes plus longues ou si vous préférez une approche plus formelle.",
          hint: "Pour les questions profondes",
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
        title: "Vision & Réflexions",
        description: "Je prends le temps de laisser mûrir les réflexions et les expériences que je souhaite vous transmettre. Chaque partage est inspiré par mon propre chemin et par les découvertes qui continuent de transformer ma manière de voir la vie.",
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
      humanDesign: {
        badge: "Outil Gratuit",
        title: "Calculez votre Design Humain",
        description:
          "Découvrez le plan énergétique qui vous est propre. Renseignez vos données de naissance et recevez les fondations de votre Design Humain — Type, Stratégie, Autorité et Profil.",
        privacy:
          "Vos données de naissance servent uniquement au calcul de votre design et ne sont pas conservées au-delà de cette requête. Nous ne gardons que votre email pour rester en lien — ce site est basé dans l'UE (conforme RGPD).",
        form: {
          firstName: "Prénom",
          firstNamePlaceholder: "Votre prénom",
          email: "Email",
          emailPlaceholder: "vous@exemple.com",
          birthDate: "Date de naissance",
          birthTime: "Heure exacte de naissance",
          birthTimeNote:
            "L'heure exacte de naissance est essentielle pour un calcul précis. Vérifiez votre acte de naissance si possible.",
          city: "Ville de naissance",
          cityPlaceholder: "ex. Paris",
          country: "Pays de naissance",
          countryPlaceholder: "ex. France",
          submit: "Révéler mon Design",
          validationError: "Veuillez remplir chaque champ avec un email valide avant de lancer le calcul.",
        },
        loadingTitle: "Les étoiles s'alignent…",
        loadingSubtitle: "Calcul de votre design unique",
        result: {
          eyebrow: "Votre Design Humain",
          greeting: "{name}, voici votre design",
          locationPrefix: "Calculé pour",
          typeLabel: "Type",
          strategyLabel: "Stratégie",
          authorityLabel: "Autorité",
          profileLabel: "Profil",
          disclaimer:
            "Ceci est un premier aperçu de votre design. Une lecture complète relie ces éléments entre eux.",
          recalc: "Calculer un autre thème",
        },
        // NOTE : Ces explications sont volontairement écrites dans un langage simple et générique.
        // Ilan pourra affiner ou personnaliser la formulation plus tard.
        // Les clés (Generator, Sacral, etc.) correspondent aux valeurs renvoyées par l'API en anglais.
        explanations: {
          type: {
            Generator:
              "Vous portez une force de vie stable et renouvelable. Quand vous suivez ce qui vous anime vraiment, votre énergie vous soutient et les bonnes choses circulent.",
            "Manifesting Generator":
              "Vous mêlez l'endurance du Generator à un élan rapide d'initiateur. Vous vous épanouissez en honorant ce qui vous enthousiasme et en vous autorisant à aller vite.",
            Projector:
              "Vous êtes là pour guider et voir clairement les autres. Votre énergie fonctionne par élans ciblés, et vous rayonnez quand vos dons sont reconnus et invités.",
            Manifestor:
              "Vous êtes un initiateur, fait pour lancer les choses et les mettre en mouvement. Vous trouvez la paix en suivant vos impulsions et en informant avant d'agir.",
            Reflector:
              "Vous êtes un rare miroir de votre environnement, très sensible aux personnes et aux lieux qui vous entourent. La clarté vient avec le temps et le bon cadre.",
          },
          typeFallback:
            "Votre Type décrit la façon dont votre énergie est conçue pour fonctionner et s'engager dans la vie.",
          strategy: {
            "Wait to Respond":
              "Plutôt que de forcer ou de courir après, laissez la vie venir à vous et observez la réponse de votre corps avant de vous engager.",
            "To Inform":
              "Informez les personnes concernées avant d'agir — informer dégage la voie et adoucit les résistances.",
            "Wait for the Invitation":
              "Pour les grandes choses, attendez d'être vraiment reconnu et invité — l'invitation indique que le moment est juste.",
            "Wait a Lunar Cycle":
              "Accordez aux décisions importantes un cycle lunaire complet, environ un mois, pour laisser la clarté s'installer.",
          },
          strategyFallback:
            "Suivre votre Stratégie vous aide à avancer dans la vie avec moins de résistance et plus de fluidité.",
          authority: {
            Sacral:
              "Faites confiance à la réponse immédiate de votre corps — un oui ou un non spontané — plutôt qu'au raisonnement du mental.",
            Emotional:
              "Laissez votre vague émotionnelle se poser ; prendre le temps sur une décision importante apporte la clarté que l'instant masque.",
            Splenic:
              "Faites confiance à votre savoir instinctif et silencieux dans l'instant présent — il parle une fois, doucement, pour votre bien-être.",
            Ego:
              "Honorez ce que votre volonté et votre cœur désirent vraiment ; une décision tient quand vous avez l'élan pour la porter.",
            "Self-Projected":
              "Parlez-en à voix haute avec une personne de confiance — entendre votre propre voix révèle ce qui est vrai pour vous.",
            Mental:
              "Prenez votre temps et réfléchissez à voix haute avec des proches de confiance, en laissant le bon environnement faire émerger votre clarté.",
            Lunar:
              "Laissez mûrir vos décisions sur un cycle lunaire complet, en explorant différents environnements avant de vous engager.",
          },
          authorityFallback:
            "Votre Autorité est la boussole intérieure qui vous montre comment prendre les décisions justes pour vous.",
          profileFallback:
            "Votre Profil décrit votre façon naturelle d'apprendre, de créer du lien et d'avancer dans la vie — le rôle que vous êtes là pour incarner.",
        },
        cta: {
          text: "Envie d'aller plus loin dans la compréhension de votre design ? Découvrez l'accompagnement 1:1.",
          button: "Découvrir le Voyage de 4 Semaines",
        },
        errors: {
          invalid_input:
            "Certaines informations semblent incomplètes. Vérifiez votre date, heure et lieu de naissance.",
          location_not_found:
            "Ville introuvable. Essayez une plus grande ville proche ou vérifiez l'orthographe.",
          quota:
            "Le calcul est temporairement indisponible. Réessayez plus tard, ou contactez-moi directement.",
          config:
            "Le calcul est temporairement indisponible. Réessayez plus tard, ou contactez-moi directement.",
          upstream:
            "Le calcul est temporairement indisponible. Réessayez plus tard, ou contactez-moi directement.",
          generic:
            "Une erreur est survenue. Réessayez plus tard, ou contactez-moi directement.",
        },
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
          tagline: "Un retour à l’essentiel, pour renouer avec la sagesse du corps et son intelligence innée.",
          what: {
            title: "L'essence de ce Voyage",
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
            paragraph2: "Tout au long de ce parcours, je pourrai également te proposer des outils complémentaires qui soutiennent en douceur ce processus :",
            tools: [
              { label: "Pratique de la présence" },
              { label: "Ouverture du cœur" },
              { label: "Médecine du Thé" },
              { label: "Nourrir & détoxifier le corps" },
            ],
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
          what: "L'Offre",
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
