export const supportedLocales = ["en", "fr", "es"] as const;

export type Locale = (typeof supportedLocales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
};

export function isSupportedLocale(locale: string): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}

type TrackContent = {
  label: string;
  badge: string;
  title: string;
  description: string;
  button: string;
  highlights: string[];
};

type SiteContent = {
  direction: "ltr";
  brand: string;
  tagline: string;

  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;

  nav: {
    traditional: string;
    secular: string;
    mixed: string;
    earlyAccess: string;
  };

  home: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    marketTitle: string;
    marketDescription: string;
  };

  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };

  form: {
    traditional: string;
    secular: string;
    mixed: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    submit: string;
  };

  validation: {
    fullName: string;
    email: string;
    emailInvalid: string;
    track: string;
    phone: string;
    interestedFor: string;
    general: string;
    success: string;
  };

  stats: {
    value: string;
    label: string;
  }[];

  trust: string[];

  tracks: {
    traditional: TrackContent;
    secular: TrackContent;
    mixed: TrackContent;
  };

  howItWorks: {
    title: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
    }[];
  };

  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

export const intlContent = {
  en: {
    direction: "ltr",
    brand: "KesherMatch",
    tagline: "Love. Family. Smart Connection.",

    badge: "Serious matchmaking for families who think ahead",
    titleLine1: "A serious way to build",
    titleLine2: "meaningful family connections",
    description:
      "KesherMatch brings together families, values and modern technology to support thoughtful, respectful and serious matchmaking.",
    primaryCta: "Join the early list",
    secondaryCta: "Explore the tracks",

    nav: {
      traditional: "Traditional",
      secular: "Secular",
      mixed: "Mixed",
      earlyAccess: "Get early access",
    },

    home: {
      badge: "Serious matchmaking for modern families",
      title1: "A premium matchmaking experience",
      title2: "built around family, values and trust",
      description:
        "KesherMatch is designed for people and families who want a more thoughtful, respectful and serious way to create meaningful connections.",
      marketTitle: "Join the early access list",
      marketDescription:
        "Tell us which track fits you best and we will keep you updated as KesherMatch opens to early users.",
    },

    hero: {
      title: "A thoughtful way to build serious connections",
      subtitle:
        "KesherMatch brings together families, values and modern technology to support meaningful matchmaking.",
      primaryCta: "Join the early list",
      secondaryCta: "Explore the tracks",
    },

    form: {
      traditional: "Traditional",
      secular: "Secular",
      mixed: "Mixed",
      namePlaceholder: "Full name",
      emailPlaceholder: "Email address",
      submit: "Join the list",
    },

    validation: {
      fullName: "Please enter your full name.",
      email: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      track: "Please choose a track.",
      phone: "Please enter your phone number.",
      interestedFor: "Please choose who you are interested for.",
      general: "Something went wrong. Please try again.",
      success:
        "Thank you, {name}. You selected the {track} track. We will contact you at {email}.",
    },

    stats: [
      { value: "3", label: "Dedicated tracks" },
      { value: "100%", label: "Family-focused" },
      { value: "Early", label: "Private launch" },
    ],

    trust: [
      "Privacy-first experience",
      "Designed for serious relationships",
      "Built around families and values",
      "Modern, respectful and intentional",
    ],

    tracks: {
      traditional: {
        label: "Traditional",
        badge: "Family values",
        title: "For traditional families",
        description:
          "A respectful and family-centered process for people looking for a serious match.",
        button: "Explore traditional",
        highlights: [
          "Family involvement",
          "Respectful process",
          "Values-based matching",
          "Serious intent",
        ],
      },
      secular: {
        label: "Secular",
        badge: "Modern lifestyle",
        title: "For secular families",
        description:
          "A modern approach to matchmaking, focused on values, lifestyle and long-term compatibility.",
        button: "Explore secular",
        highlights: [
          "Modern experience",
          "Lifestyle compatibility",
          "Personal choice",
          "Long-term thinking",
        ],
      },
      mixed: {
        label: "Mixed",
        badge: "Flexible path",
        title: "For mixed families",
        description:
          "A sensitive bridge between different backgrounds, cultures and expectations.",
        button: "Explore mixed",
        highlights: [
          "Flexible approach",
          "Cultural sensitivity",
          "Personal and family balance",
          "Room for nuance",
        ],
      },
    },

    howItWorks: {
      title: "How it works",
      subtitle: "A simple, respectful and gradual process.",
      steps: [
        {
          title: "Join the early list",
          description:
            "Share basic details so we can understand your family and your needs.",
        },
        {
          title: "Build a thoughtful profile",
          description:
            "The profile is designed to reflect values, lifestyle and long-term expectations.",
        },
        {
          title: "Receive relevant matches",
          description:
            "The goal is fewer random options and more meaningful possibilities.",
        },
      ],
    },

    cta: {
      title: "Want to be among the first?",
      description:
        "Join the early access list and get updates as KesherMatch opens.",
      primary: "Join the early list",
      secondary: "Learn more",
    },
  },

  fr: {
    direction: "ltr",
    brand: "KesherMatch",
    tagline: "Amour. Famille. Connexion intelligente.",

    badge: "Des rencontres sérieuses pour les familles qui voient loin",
    titleLine1: "Une manière sérieuse de créer",
    titleLine2: "des liens familiaux significatifs",
    description:
      "KesherMatch réunit familles, valeurs et technologie moderne pour accompagner un matchmaking réfléchi, respectueux et sérieux.",
    primaryCta: "Rejoindre la liste",
    secondaryCta: "Explorer les parcours",

    nav: {
      traditional: "Traditionnel",
      secular: "Laïque",
      mixed: "Mixte",
      earlyAccess: "Accès anticipé",
    },

    home: {
      badge: "Un matchmaking sérieux pour les familles modernes",
      title1: "Une expérience de matchmaking premium",
      title2: "fondée sur la famille, les valeurs et la confiance",
      description:
        "KesherMatch est conçu pour les personnes et les familles qui recherchent une manière plus réfléchie, respectueuse et sérieuse de créer des liens significatifs.",
      marketTitle: "Rejoignez la liste d’accès anticipé",
      marketDescription:
        "Indiquez le parcours qui vous correspond le mieux et nous vous tiendrons informé lors de l’ouverture de KesherMatch.",
    },

    hero: {
      title: "Une manière réfléchie de créer des liens sérieux",
      subtitle:
        "KesherMatch réunit familles, valeurs et technologie moderne pour accompagner des rencontres significatives.",
      primaryCta: "Rejoindre la liste",
      secondaryCta: "Explorer les parcours",
    },

    form: {
      traditional: "Traditionnel",
      secular: "Laïque",
      mixed: "Mixte",
      namePlaceholder: "Nom complet",
      emailPlaceholder: "Adresse e-mail",
      submit: "Rejoindre la liste",
    },

    validation: {
      fullName: "Veuillez saisir votre nom complet.",
      email: "Veuillez saisir votre adresse e-mail.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      track: "Veuillez choisir un parcours.",
      phone: "Veuillez saisir votre numéro de téléphone.",
      interestedFor: "Veuillez choisir pour qui vous êtes intéressé.",
      general: "Une erreur est survenue. Veuillez réessayer.",
      success:
        "Merci, {name}. Vous avez choisi le parcours {track}. Nous vous contacterons à {email}.",
    },

    stats: [
      { value: "3", label: "Parcours dédiés" },
      { value: "100%", label: "Centré sur la famille" },
      { value: "Early", label: "Lancement privé" },
    ],

    trust: [
      "Expérience axée sur la confidentialité",
      "Pensé pour des relations sérieuses",
      "Construit autour des familles et des valeurs",
      "Moderne, respectueux et intentionnel",
    ],

    tracks: {
      traditional: {
        label: "Traditionnel",
        badge: "Valeurs familiales",
        title: "Pour les familles traditionnelles",
        description:
          "Un processus respectueux et familial pour celles et ceux qui recherchent une relation sérieuse.",
        button: "Explorer le traditionnel",
        highlights: [
          "Implication familiale",
          "Processus respectueux",
          "Compatibilité des valeurs",
          "Intention sérieuse",
        ],
      },
      secular: {
        label: "Laïque",
        badge: "Mode de vie moderne",
        title: "Pour les familles laïques",
        description:
          "Une approche moderne du matchmaking, centrée sur les valeurs, le mode de vie et la compatibilité.",
        button: "Explorer le laïque",
        highlights: [
          "Expérience moderne",
          "Compatibilité du mode de vie",
          "Choix personnel",
          "Vision à long terme",
        ],
      },
      mixed: {
        label: "Mixte",
        badge: "Parcours flexible",
        title: "Pour les familles mixtes",
        description:
          "Un pont sensible entre différents parcours, cultures et attentes.",
        button: "Explorer le mixte",
        highlights: [
          "Approche flexible",
          "Sensibilité culturelle",
          "Équilibre personnel et familial",
          "Place à la nuance",
        ],
      },
    },

    howItWorks: {
      title: "Comment ça marche",
      subtitle: "Un processus simple, respectueux et progressif.",
      steps: [
        {
          title: "Rejoindre la liste",
          description:
            "Partagez quelques informations pour nous aider à comprendre vos besoins.",
        },
        {
          title: "Créer un profil réfléchi",
          description:
            "Le profil reflète les valeurs, le style de vie et les attentes à long terme.",
        },
        {
          title: "Recevoir des propositions pertinentes",
          description:
            "L’objectif est moins d’options aléatoires et plus de possibilités sérieuses.",
        },
      ],
    },

    cta: {
      title: "Vous voulez faire partie des premiers ?",
      description:
        "Rejoignez la liste d’accès anticipé et recevez les prochaines informations.",
      primary: "Rejoindre la liste",
      secondary: "En savoir plus",
    },
  },

  es: {
    direction: "ltr",
    brand: "KesherMatch",
    tagline: "Amor. Familia. Conexión inteligente.",

    badge: "Matchmaking serio para familias que piensan a futuro",
    titleLine1: "Una forma seria de crear",
    titleLine2: "conexiones familiares significativas",
    description:
      "KesherMatch une familias, valores y tecnología moderna para apoyar un matchmaking cuidadoso, respetuoso y serio.",
    primaryCta: "Unirse a la lista",
    secondaryCta: "Explorar los caminos",

    nav: {
      traditional: "Tradicional",
      secular: "Secular",
      mixed: "Mixto",
      earlyAccess: "Acceso anticipado",
    },

    home: {
      badge: "Matchmaking serio para familias modernas",
      title1: "Una experiencia premium de matchmaking",
      title2: "basada en familia, valores y confianza",
      description:
        "KesherMatch está diseñado para personas y familias que buscan una forma más cuidadosa, respetuosa y seria de crear conexiones significativas.",
      marketTitle: "Únete a la lista de acceso anticipado",
      marketDescription:
        "Cuéntanos qué camino encaja mejor contigo y te mantendremos informado cuando KesherMatch abra a los primeros usuarios.",
    },

    hero: {
      title: "Una forma cuidadosa de crear conexiones serias",
      subtitle:
        "KesherMatch une familias, valores y tecnología moderna para apoyar conexiones significativas.",
      primaryCta: "Unirse a la lista",
      secondaryCta: "Explorar los caminos",
    },

    form: {
      traditional: "Tradicional",
      secular: "Secular",
      mixed: "Mixto",
      namePlaceholder: "Nombre completo",
      emailPlaceholder: "Correo electrónico",
      submit: "Unirse a la lista",
    },

    validation: {
      fullName: "Por favor, introduce tu nombre completo.",
      email: "Por favor, introduce tu correo electrónico.",
      emailInvalid: "Por favor, introduce un correo electrónico válido.",
      track: "Por favor, elige un camino.",
      phone: "Por favor, introduce tu número de teléfono.",
      interestedFor: "Por favor, elige para quién estás interesado.",
      general: "Algo salió mal. Inténtalo de nuevo.",
      success:
        "Gracias, {name}. Elegiste el camino {track}. Te contactaremos en {email}.",
    },

    stats: [
      { value: "3", label: "Caminos dedicados" },
      { value: "100%", label: "Enfoque familiar" },
      { value: "Early", label: "Lanzamiento privado" },
    ],

    trust: [
      "Experiencia centrada en la privacidad",
      "Diseñado para relaciones serias",
      "Construido alrededor de familias y valores",
      "Moderno, respetuoso e intencional",
    ],

    tracks: {
      traditional: {
        label: "Tradicional",
        badge: "Valores familiares",
        title: "Para familias tradicionales",
        description:
          "Un proceso respetuoso y familiar para quienes buscan una relación seria.",
        button: "Explorar tradicional",
        highlights: [
          "Participación familiar",
          "Proceso respetuoso",
          "Compatibilidad de valores",
          "Intención seria",
        ],
      },
      secular: {
        label: "Secular",
        badge: "Estilo de vida moderno",
        title: "Para familias seculares",
        description:
          "Un enfoque moderno del matchmaking, centrado en valores, estilo de vida y compatibilidad.",
        button: "Explorar secular",
        highlights: [
          "Experiencia moderna",
          "Compatibilidad de estilo de vida",
          "Elección personal",
          "Visión a largo plazo",
        ],
      },
      mixed: {
        label: "Mixto",
        badge: "Camino flexible",
        title: "Para familias mixtas",
        description:
          "Un puente sensible entre diferentes orígenes, culturas y expectativas.",
        button: "Explorar mixto",
        highlights: [
          "Enfoque flexible",
          "Sensibilidad cultural",
          "Equilibrio personal y familiar",
          "Espacio para matices",
        ],
      },
    },

    howItWorks: {
      title: "Cómo funciona",
      subtitle: "Un proceso simple, respetuoso y gradual.",
      steps: [
        {
          title: "Unirse a la lista",
          description:
            "Comparte algunos detalles para que podamos entender tus necesidades.",
        },
        {
          title: "Crear un perfil cuidadoso",
          description:
            "El perfil refleja valores, estilo de vida y expectativas a largo plazo.",
        },
        {
          title: "Recibir coincidencias relevantes",
          description:
            "El objetivo es tener menos opciones aleatorias y más posibilidades significativas.",
        },
      ],
    },

    cta: {
      title: "¿Quieres estar entre los primeros?",
      description:
        "Únete a la lista de acceso anticipado y recibe actualizaciones.",
      primary: "Unirse a la lista",
      secondary: "Saber más",
    },
  },
} satisfies Record<Locale, SiteContent>;

export function getMessages(locale: Locale) {
  return intlContent[locale];
}