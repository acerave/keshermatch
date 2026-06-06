import type { Locale } from "../[locale]/site-data";

const intlContent = {
  en: {
    locale: "en",
    dir: "ltr" as const,
    logo: "/logo/keshermatch-logo-en.svg",
    navigation: [
      { href: "#how-it-works", label: "How it Works" },
      { href: "#for-who", label: "Who It’s For" },
      { href: "#tracks", label: "Plans" },
      { href: "#faq", label: "FAQ" },
    ],
    hero: {
      title: "Matchmaking for Parents & Families Thinking Long-Term",
      subtitle: "A respectful, elegant, and thoughtful matchmaking platform.",
      ctaPrimary: "Sign Up",
      ctaSecondary: "View Plans",
      image: "/images/intl/hero-en.jpg",
    },
  },
  fr: {
    locale: "fr",
    dir: "ltr" as const,
    logo: "/logo/keshermatch-logo-en.svg",
    navigation: [
      { href: "#how-it-works", label: "Comment ça marche" },
      { href: "#for-who", label: "Pour qui" },
      { href: "#tracks", label: "Formules" },
      { href: "#faq", label: "FAQ" },
    ],
    hero: {
      title: "Rencontres pour Parents et Familles qui Pensent à Long Terme",
      subtitle: "Une plateforme élégante et respectueuse pour des relations sérieuses.",
      ctaPrimary: "S’inscrire",
      ctaSecondary: "Voir les formules",
      image: "/images/intl/hero-fr.jpg",
    },
  },
  es: {
    locale: "es",
    dir: "ltr" as const,
    logo: "/logo/keshermatch-logo-en.svg",
    navigation: [
      { href: "#how-it-works", label: "Cómo funciona" },
      { href: "#for-who", label: "Para quién" },
      { href: "#tracks", label: "Planes" },
      { href: "#faq", label: "Preguntas frecuentes" },
    ],
    hero: {
      title: "Matchmaking para Padres y Familias que Piensan a Largo Plazo",
      subtitle: "Una plataforma elegante y respetuosa para relaciones serias.",
      ctaPrimary: "Registrarse",
      ctaSecondary: "Ver planes",
      image: "/images/intl/hero-es.jpg",
    },
  },
} as const;

export function getIntlSite(locale: Locale) {
  return intlContent[locale];
}