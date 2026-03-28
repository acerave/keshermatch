import { Lock, Sparkles, UserRound } from "lucide-react";
import LandingPageShell from "../components/brand/LandingPageShell";

export default function SecularLandingPage() {
  return (
    <LandingPageShell
      active="secular"
      badge="מסלול חילוני"
      title="חוויית היכרות חכמה, פתוחה ומדויקת יותר"
      titleGradient="from-sky-500 to-violet-500"
      description="מסלול מודרני, נקי ואסתטי יותר — לאנשים חילוניים שמחפשים פרטיות, שליטה אישית והתאמה חכמה בלי עומס מיותר."
      heroGradient="from-sky-50 via-white to-violet-50"
      ctaText="להצטרפות למסלול החילוני"
      ctaGradient="from-sky-500 to-violet-500"
      features={[
        {
          icon: UserRound,
          title: "הפרט במרכז",
          text: "בחירה אישית, קצב אישי ושליטה מלאה על מה נחשף ומתי.",
          accentClassName: "from-sky-500 to-violet-500",
        },
        {
          icon: Lock,
          title: "פרטיות טובה יותר",
          text: "תהליך ברור ששומר על גבולות ומאפשר למשתמש להרגיש בנוח.",
          accentClassName: "from-violet-500 to-sky-500",
        },
        {
          icon: Sparkles,
          title: "UX מודרני",
          text: "עיצוב נקי, יפה ואינטואיטיבי שלא מרגיש מיושן או מסורבל.",
          accentClassName: "from-sky-500 to-cyan-400",
        },
      ]}
      columns={[
        {
          title: "פשטות",
          text: "חוויה מודרנית עם עיצוב חד, ברור ונעים לשימוש כבר מהכניסה הראשונה.",
        },
        {
          title: "שליטה",
          text: "המשתמש בוחר את רמת החשיפה, הפרטיות והקצב שבו התהליך מתקדם.",
        },
        {
          title: "דיוק",
          text: "שימוש בבינה מלאכותית ובנתונים כדי לחדד התאמות טובות יותר.",
        },
      ]}
      faqs={[
        {
          q: "למי המסלול הזה מתאים?",
          a: "לאנשים חילוניים שמעדיפים חוויה מודרנית, חופש בחירה, פרטיות ושליטה אישית בתהליך.",
        },
        {
          q: "האם יש מקום גם למשפחה?",
          a: "כן, אבל המסלול הזה בנוי כך שהמוקד נשאר על המשתמש עצמו ועל הבחירה האישית שלו.",
        },
        {
          q: "מה היתרון המרכזי כאן?",
          a: "אסתטיקה נקייה, התאמה חכמה, UX נעים ותחושת שליטה אמיתית לאורך הדרך.",
        },
      ]}
    />
  );
}