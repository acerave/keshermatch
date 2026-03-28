import { Compass, HeartHandshake, Layers3 } from "lucide-react";
import LandingPageShell from "../components/brand/LandingPageShell";

export default function MixedLandingPage() {
  return (
    <LandingPageShell
      active="mixed"
      badge="מסלול מעורב"
      title="מקום שמחבר בין עולמות שונים בגישה רגישה וחכמה"
      titleGradient="from-rose-500 via-orange-400 to-sky-500"
      description="מסלול שנבנה עבור אנשים ומשפחות שלא תמיד נכנסים להגדרה אחת. גמיש יותר, פתוח יותר ורגיש יותר למורכבות אמיתית."
      heroGradient="from-rose-50 via-white to-sky-50"
      ctaText="להצטרפות למסלול המעורב"
      ctaGradient="from-rose-500 via-orange-400 to-sky-500"
      features={[
        {
          icon: Layers3,
          title: "יותר ממסלול אחד",
          text: "המוצר לא מכריח הגדרה אחת קשיחה — הוא נותן מקום למורכבות אמיתית.",
          accentClassName: "from-rose-500 to-orange-400",
        },
        {
          icon: Compass,
          title: "רגישות לפערים",
          text: "מתאים למצבים שבהם יש הבדלים בין סגנונות חיים, משפחות או ציפיות.",
          accentClassName: "from-orange-500 to-sky-500",
        },
        {
          icon: HeartHandshake,
          title: "גישור וחיבור",
          text: "שפה רגישה ומכבדת שנועדה לעזור לחבר בין עולמות במקום ליצור התנגדות.",
          accentClassName: "from-rose-500 to-sky-500",
        },
      ]}
      columns={[
        {
          title: "פתיחות",
          text: "אין צורך לבחור תווית אחת בלבד. המסלול מכבד טווחים וגמישות.",
        },
        {
          title: "גישור",
          text: "השפה והחוויה עוזרות לחבר בין משפחות ואנשים מרקעים שונים יותר.",
        },
        {
          title: "רגישות",
          text: "מנוע ההתאמה לוקח בחשבון גם ערכים וגם סגנון חיים וגם גבולות אישיים.",
        },
      ]}
      faqs={[
        {
          q: "למי המסלול הזה מתאים?",
          a: "לאנשים ולמשפחות שמגיעים מרקעים שונים, או למי שלא מרגיש שייך להגדרה אחת ברורה.",
        },
        {
          q: "מה מייחד אותו לעומת מסלולים אחרים?",
          a: "הגמישות. הוא נבנה כדי להכיל מורכבות אמיתית ולא להכריח את המשתמשים לקופסה אחת.",
        },
        {
          q: "איך זה נראה בפועל?",
          a: "פחות שיפוטי, יותר פתוח, יותר רגיש להבדלים ויותר חכם באופן שבו הוא מציג התאמות.",
        },
      ]}
    />
  );
}