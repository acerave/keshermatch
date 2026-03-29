export const supportedLocales = ["en", "fr", "es"] as const;
export type Locale = (typeof supportedLocales)[number];

export const messages: Record<Locale, any> = {
  en: {
    direction: "ltr",
    brandTagline: "Smart matchmaking for different lifestyles",
    nav: {
      traditional: "Traditional",
      secular: "Secular",
      mixed: "Mixed",
      earlyAccess: "Early access",
    },
    home: {
  badge: "International",
  title1: "Find the right match",
  title2: "with a smarter, more human approach",
  description:
    "KesherMatch combines tradition, family insight, and AI to create more meaningful and accurate connections.",
  marketTitle: "Choose your path",
  marketDescription:
    "Select the experience that fits your lifestyle and values best.",
},
    tracks: {
      traditional: {
        label: "Traditional",
        badge: "Traditional track",
        title: "Matchmaking with respect for family, values, and heart",
        description:
          "A warmer landing page for family-oriented users who want a respectful modern process.",
        button: "Explore traditional",
        highlights: [
          "Warm and family-oriented tone",
          "Balanced parent involvement",
          "Smart matching with a human feel",
        ],
      },
      secular: {
        label: "Secular",
        badge: "Secular track",
        title: "A modern and smart dating path with full personal control",
        description:
          "A clean and open experience for users who want privacy, freedom, and better matching.",
        button: "Explore secular",
        highlights: [
          "Modern and simple UX",
          "Full control over privacy",
          "Matching based on values and lifestyle",
        ],
      },
      mixed: {
        label: "Mixed",
        badge: "Mixed track",
        title: "A place that connects different worlds with sensitivity",
        description:
          "A flexible path for users and families coming from different backgrounds or expectations.",
        button: "Explore mixed",
        highlights: [
          "Flexible and non-judgmental language",
          "Sensitive to different backgrounds",
          "Smart matching beyond rigid labels",
        ],
      },
    },
    form: {
      preferredTrack: "Preferred track",
      fullName: "Full name",
      email: "Email",
      submit: "Join the waitlist",
      traditional: "Traditional",
      secular: "Secular",
      mixed: "Mixed",
      namePlaceholder: "Enter your full name",
      emailPlaceholder: "name@example.com",
    },
    validation: {
      fullName: "Please enter your full name.",
      email: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      track: "Please choose a track.",
      success: "Thanks {name}! You joined the {track} track. We will contact you at {email}.",
    },
  },
  fr: {
    direction: "ltr",
    brandTagline: "Mise en relation intelligente pour différents styles de vie",
    nav: {
      traditional: "Traditionnel",
      secular: "Laïque",
      mixed: "Mixte",
      earlyAccess: "Accès anticipé",
    },
    home: {
      badge: "Version internationale",
      title1: "KesherMatch est conçu",
      title2: "pour différents publics et plusieurs langues",
      description:
        "La version .com commence en anglais et peut ensuite s’étendre au français, à l’espagnol et à d’autres langues.",
      marketTitle: "Choisissez le parcours qui vous convient",
      marketDescription:
        "Utilisez cette page pour mesurer l’intérêt et envoyer les visiteurs vers la page la plus adaptée.",
    },
    tracks: {
      traditional: {
        label: "Traditionnel",
        badge: "Parcours traditionnel",
        title: "Une approche respectueuse de la famille, des valeurs et du cœur",
        description:
          "Une page plus chaleureuse pour les utilisateurs attachés à la famille et à un processus respectueux.",
        button: "Découvrir traditionnel",
        highlights: [
          "Ton chaleureux et familial",
          "Implication équilibrée des parents",
          "Matching intelligent avec touche humaine",
        ],
      },
      secular: {
        label: "Laïque",
        badge: "Parcours laïque",
        title: "Une expérience moderne avec contrôle personnel total",
        description:
          "Une expérience claire et ouverte pour ceux qui veulent liberté, confidentialité et précision.",
        button: "Découvrir laïque",
        highlights: [
          "UX moderne et simple",
          "Contrôle total sur la confidentialité",
          "Compatibilité selon valeurs et style de vie",
        ],
      },
      mixed: {
        label: "Mixte",
        badge: "Parcours mixte",
        title: "Un espace qui relie différents mondes avec sensibilité",
        description:
          "Un parcours flexible pour les personnes et familles issues d’horizons différents.",
        button: "Découvrir mixte",
        highlights: [
          "Langage souple et non jugeant",
          "Sensibilité aux différents parcours",
          "Matching intelligent au-delà des étiquettes",
        ],
      },
    },
    form: {
      preferredTrack: "Parcours préféré",
      fullName: "Nom complet",
      email: "E-mail",
      submit: "Rejoindre la liste d’attente",
      traditional: "Traditionnel",
      secular: "Laïque",
      mixed: "Mixte",
      namePlaceholder: "Entrez votre nom complet",
      emailPlaceholder: "nom@example.com",
    },
    validation: {
      fullName: "Veuillez saisir votre nom complet.",
      email: "Veuillez saisir votre adresse e-mail.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      track: "Veuillez choisir un parcours.",
      success: "Merci {name} ! Vous avez rejoint le parcours {track}. Nous vous contacterons à {email}.",
    },
  },
  es: {
    direction: "ltr",
    brandTagline: "Matchmaking inteligente para distintos estilos de vida",
    nav: {
      traditional: "Tradicional",
      secular: "Secular",
      mixed: "Mixto",
      earlyAccess: "Acceso anticipado",
    },
    home: {
      badge: "Versión internacional",
      title1: "KesherMatch está diseñado",
      title2: "para distintos públicos y varios idiomas",
      description:
        "La versión .com empieza en inglés y luego puede ampliarse a francés, español y más idiomas.",
      marketTitle: "Elige la vía que mejor te encaje",
      marketDescription:
        "Usa esta página para medir interés y dirigir a cada visitante a la landing adecuada.",
    },
    tracks: {
      traditional: {
        label: "Tradicional",
        badge: "Ruta tradicional",
        title: "Matchmaking con respeto por la familia, los valores y el corazón",
        description:
          "Una landing más cálida para usuarios orientados a la familia que buscan un proceso respetuoso.",
        button: "Ver tradicional",
        highlights: [
          "Tono cálido y familiar",
          "Participación equilibrada de los padres",
          "Matching inteligente con toque humano",
        ],
      },
      secular: {
        label: "Secular",
        badge: "Ruta secular",
        title: "Una experiencia moderna con control personal total",
        description:
          "Una experiencia limpia y abierta para quienes quieren libertad, privacidad y mejor ajuste.",
        button: "Ver secular",
        highlights: [
          "UX moderna y simple",
          "Control total de la privacidad",
          "Matching según valores y estilo de vida",
        ],
      },
      mixed: {
        label: "Mixto",
        badge: "Ruta mixta",
        title: "Un lugar que conecta distintos mundos con sensibilidad",
        description:
          "Una ruta flexible para personas y familias de distintos contextos o expectativas.",
        button: "Ver mixto",
        highlights: [
          "Lenguaje flexible y sin juicios",
          "Sensibilidad a contextos distintos",
          "Matching inteligente más allá de etiquetas rígidas",
        ],
      },
    },
    form: {
      preferredTrack: "Ruta preferida",
      fullName: "Nombre completo",
      email: "Correo electrónico",
      submit: "Unirme a la lista de espera",
      traditional: "Tradicional",
      secular: "Secular",
      mixed: "Mixto",
      namePlaceholder: "Ingresa tu nombre completo",
      emailPlaceholder: "nombre@example.com",
    },
    validation: {
      fullName: "Por favor ingresa tu nombre completo.",
      email: "Por favor ingresa tu correo electrónico.",
      emailInvalid: "Por favor ingresa un correo electrónico válido.",
      track: "Por favor elige una ruta.",
      success: "Gracias {name}. Te registraste en la ruta {track}. Te contactaremos en {email}.",
    },
  },
};

export function isSupportedLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function getMessages(locale: string) {
  return messages[isSupportedLocale(locale) ? locale : "en"];
}
