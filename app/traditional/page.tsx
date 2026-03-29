import { Heart, Home, Users } from "lucide-react";
import LandingPageShell from "../components/brand/LandingPageShell";

export default function TraditionalLandingPage() {
  return (
    <LandingPageShell
      active="traditional"
      badge="מסלול מסורתי"
      title="שידוכים עם כבוד למסורת, למשפחה וללב"
      titleGradient="from-orange-500 to-rose-500"
      description="מסלול חם, רך ומכבד יותר — למשפחות ולאנשים מסורתיים שמחפשים דרך חדשה, יפה ומדויקת יותר לעשות דבר ישן וטוב."
      heroGradient="from-amber-50 via-orange-50 to-rose-50"
      ctaText="להצטרפות למסלול המסורתי"
      ctaGradient="from-orange-500 to-rose-500"
      features={[
        {
          icon: Home,
          title: "תחושה של בית",
          text: "שפה חמה ומשפחתית שמרגישה קרובה לעולם הערכים המסורתי.",
          accentClassName: "from-orange-500 to-rose-500",
        },
        {
          icon: Users,
          title: "מעורבות הורים באיזון",
          text: "נותן מקום למשפחה בלי לקחת את השליטה מהמועמד או המועמדת.",
          accentClassName: "from-amber-500 to-orange-400",
        },
        {
          icon: Heart,
          title: "לב לפני הכול",
          text: "מנוע התאמה חכם, אבל עם כבוד לאינטואיציה, לקשר ולרגישות האנושית.",
          accentClassName: "from-rose-500 to-orange-400",
        },
      ]}
      columns={[
        {
          title: "מסורת",
          text: "עיצוב ומסר שמכירים את העולם הערכי של בית, משפחה וכבוד הדדי.",
        },
        {
          title: "חום",
          text: "חוויה רכה ונעימה יותר שמרגישה מזמינה ופחות טכנית או קרה.",
        },
        {
          title: "אמון",
          text: "תהליך מדורג עם פרטיות והרשאות ברורות, בלי חשיפת יתר מוקדמת.",
        },
      ]}
      faqs={[
        {
          q: "למי המסלול הזה מתאים?",
          a: "למשפחות ולאנשים מסורתיים שמחפשים מסר מוכר, כבוד למשפחה ותהליך יותר חם ורגיש.",
        },
        {
          q: "האם להורים יש תפקיד בתהליך?",
          a: "כן, אבל באיזון. יש מקום למעורבות, לצד שליטה מלאה של המועמד או המועמדת.",
        },
        {
          q: "מה מייחד את המסלול הזה?",
          a: "הוא מדבר בשפה רגשית, משפחתית ומסורתית יותר — בלי להרגיש מיושן או כבד.",
        },
      ]}
    />
  );
}
<section className="mt-20 text-center">
  <h2 className="text-3xl font-bold">רוצים להתחיל?</h2>
  <p className="mt-4 text-stone-600">השאירו פרטים ונחזור אליכם עם התאמות ראשונות</p>

  <button className="mt-6 bg-black text-white px-8 py-3 rounded-full">
    הצטרפות מוקדמת
  </button>
</section>