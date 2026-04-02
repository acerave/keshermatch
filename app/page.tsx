"use client";

import React from "react";
import {
  ArrowLeft,
  BadgeCheck,
  Brain,
  HeartHandshake,
  Lock,
} from "lucide-react";

const tracks = [
  {
    href: "/traditional",
    title: "מסלול מסורתי",
    description:
      "שפה חמה, מכבדת ומשפחתית יותר — לאנשים ולמשפחות שמחפשים התאמה עם לב, ערכים ואמון.",
    gradient: "from-amber-50 via-orange-50 to-rose-50",
    accent: "from-orange-500 to-rose-500",
  },
  {
    href: "/secular",
    title: "מסלול חילוני",
    description:
      "חוויית משתמש מודרנית, נקייה ופתוחה יותר — עם שליטה אישית, פרטיות והתאמה חכמה.",
    gradient: "from-sky-50 via-white to-violet-50",
    accent: "from-sky-500 to-violet-500",
  },
  {
    href: "/mixed",
    title: "מסלול מעורב",
    description:
      "למי שמחפש גישה גמישה ורגישה יותר — בין עולמות, בין משפחות ובין סגנונות חיים.",
    gradient: "from-rose-50 via-white to-sky-50",
    accent: "from-rose-500 via-orange-400 to-sky-500",
  },
];

const valueProps = [
  {
    icon: HeartHandshake,
    title: "חיבור אנושי אמיתי",
    text: "שילוב בין אינטואיציה, משפחה ורגש לבין תהליך ברור ומודרני יותר.",
    accent: "from-rose-500 to-orange-400",
  },
  {
    icon: Brain,
    title: "התאמות חכמות",
    text: "בינה מלאכותית מסייעת לחדד התאמות, אבל ההחלטות נשארות בידי האנשים.",
    accent: "from-orange-500 to-amber-400",
  },
  {
    icon: Lock,
    title: "פרטיות והסכמה",
    text: "שליטה מלאה בחשיפה, בתמונות ובהתקדמות — עם שקיפות ואמון לאורך כל הדרך.",
    accent: "from-sky-500 to-violet-500",
  },
];

const trustPoints = [
  "שלושה מסלולים שונים לקהלים שונים",
  "עיצוב שמרגיש מוצר אמיתי ולא אתר היכרויות גנרי",
  "חוויית משתמש נעימה, חמה וברורה יותר",
  "תהליך שמכבד משפחה, פרטיות ובחירה אישית",
];

function KesherAnimatedLogo({ tagline = "מסורת, משפחה, התאמה חכמה" }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 via-orange-400 to-sky-500 text-white shadow-lg">
        <span className="text-xl font-black">ק</span>
      </div>
      <div className="text-right">
        <div className="bg-gradient-to-r from-rose-600 via-orange-500 to-sky-600 bg-clip-text text-xl font-black text-transparent">
          KesherMatch
        </div>
        <div className="text-xs text-stone-500">{tagline}</div>
      </div>
    </div>
  );
}

type Track = (typeof tracks)[number];

function TrackCard({ track }: { track: Track }) {
  return (
    <a href={track.href} className="group block">
      <div
        className={`h-full rounded-[2rem] bg-gradient-to-br ${track.gradient} p-6 shadow-xl shadow-stone-200/50 ring-1 ring-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl`}
      >
        <div
          className={`mb-4 inline-flex rounded-full bg-gradient-to-r ${track.accent} px-4 py-2 text-sm font-semibold text-white shadow-sm`}
        >
          {track.title}
        </div>
        <p className="leading-8 text-stone-700">{track.description}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-900">
          כניסה למסלול
          <ArrowLeft className="h-4 w-4 transition duration-300 group-hover:-translate-x-1" />
        </div>
      </div>
    </a>
  );
}

export default function HomePage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.16),_transparent_24%),radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_20%),linear-gradient(to_bottom,_#fffaf7,_#ffffff,_#f8fafc)] text-stone-900"
    >
      <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <KesherAnimatedLogo tagline="מסורת, משפחה, התאמה חכמה" />

          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            <a href="#tracks" className="transition hover:text-rose-600">
              מסלולים
            </a>
            <a href="#why-us" className="transition hover:text-orange-600">
              למה אנחנו
            </a>
            <a href="#signup" className="transition hover:text-sky-600">
              הרשמה
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-rose-100 via-orange-50 to-sky-100 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.10)] md:p-14">
          <div className="absolute -left-8 top-10 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
                שידוכים חכמים עם לב, משפחה וקידמה
              </div>

              <h1 className="text-5xl font-black leading-[1.03] md:text-7xl">
                למצוא את
                <span className="block bg-gradient-to-r from-rose-500 via-orange-500 to-sky-500 bg-clip-text text-transparent">
                  החיבור הנכון
                </span>
                בדרך חדשה
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
                KesherMatch משלב בין שדכנות, רגישות משפחתית ובינה מלאכותית — כדי ליצור התאמות מדויקות יותר,
                חוויה הרבה יותר נעימה, ומרחב שמכבד אנשים אמיתיים.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#signup"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_40px_rgba(251,146,60,0.3)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  הצטרפות מוקדמת
                </a>

                <a
                  href="#tracks"
                  className="inline-flex items-center justify-center rounded-full bg-white/90 px-8 py-4 text-lg font-semibold text-stone-900 ring-1 ring-stone-200 shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  לראות את המסלולים
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {trustPoints.slice(0, 2).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-white/70"
                  >
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="mt-1 h-5 w-5 text-rose-500" />
                      <p className="leading-7 text-stone-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {valueProps.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group rounded-[1.75rem] bg-white/85 p-6 shadow-lg ring-1 ring-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg transition duration-300 group-hover:scale-105`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900">{item.title}</h3>
                    <p className="mt-2 leading-8 text-stone-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="tracks" className="mt-16">
          <div className="mb-8 text-center">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
              מסלולים
            </div>
            <h2 className="text-3xl font-black md:text-5xl">בחרו את הדרך שמתאימה לכם</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-stone-600">
              כל מסלול קיבל שפה, עיצוב ומסר שמתאימים לקהל היעד שלו — כדי שהחוויה תרגיש טבעית ונכונה יותר.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tracks.map((track) => (
              <TrackCard key={track.href} track={track} />
            ))}
          </div>
        </section>

        <section id="why-us" className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white/90 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] ring-1 ring-stone-100">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
              למה אנחנו
            </div>
            <h2 className="text-3xl font-black md:text-4xl">לא עוד אתר היכרויות גנרי</h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              KesherMatch בנוי כמו מוצר אמיתי: עם מסלולים שונים, שפה מותאמת, עיצוב חם יותר ותחושת אמון גבוהה יותר.
            </p>

            <div className="mt-8 space-y-4">
              {trustPoints.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-stone-50 p-4">
                  <BadgeCheck className="mt-1 h-5 w-5 text-sky-500" />
                  <p className="leading-7 text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-8 text-white shadow-2xl shadow-stone-300">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-stone-300">
              מיועד להשקה
            </div>
            <h2 className="text-3xl font-black md:text-4xl">
              נראה טוב יותר. מרגיש טוב יותר. עובד נכון יותר.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              המטרה היא לא רק למשוך תשומת לב — אלא לבנות אמון, לגרום לאנשים להירשם, ולהציג מוצר שכבר עכשיו מרגיש בשל.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 text-sm font-semibold text-rose-300">Brand</div>
                <p className="leading-7 text-stone-300">לוגו, שפה ויזואלית וכיוון רגשי ברור.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 text-sm font-semibold text-orange-300">UX</div>
                <p className="leading-7 text-stone-300">מסרים ברורים, CTAים בולטים ומבנה נכון.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 text-sm font-semibold text-sky-300">Trust</div>
                <p className="leading-7 text-stone-300">פרטיות, הסכמה, תהליך מכבד.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 text-sm font-semibold text-violet-300">Growth</div>
                <p className="leading-7 text-stone-300">מוכן ללידים, אנליטיקה והרחבה בינלאומית.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="signup"
          className="mt-20 rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] ring-1 ring-stone-100 md:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
              הצטרפות מוקדמת
            </div>
            <h2 className="text-3xl font-black md:text-4xl">השאירו פרטים ונחזור אליכם</h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              הצטרפו לרשימת ההמתנה וקבלו עדכון כשהמערכת תיפתח עם הרשמה אמיתית והתאמות חכמות.
            </p>
          </div>

          <form className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-4">
            <input
              type="text"
              placeholder="שם מלא"
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-rose-400"
            />
            <input
              type="email"
              placeholder="אימייל"
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-orange-400"
            />
            <input
              type="tel"
              placeholder="טלפון"
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400"
            />
            <button
              type="button"
              className="rounded-2xl bg-gradient-to-r from-rose-500 via-orange-400 to-sky-500 px-6 py-3 font-semibold text-white shadow-[0_14px_40px_rgba(251,146,60,0.25)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
            >
              שלחו לי עדכון
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

// Basic smoke checks to make debugging easier in preview environments.
const __smokeChecks = {
  tracksCount: tracks.length === 3,
  valuePropsCount: valueProps.length === 3,
  trustPointsCount: trustPoints.length === 4,
};

if (typeof window !== "undefined") {
  console.assert(__smokeChecks.tracksCount, "Expected 3 tracks");
  console.assert(__smokeChecks.valuePropsCount, "Expected 3 value props");
  console.assert(__smokeChecks.trustPointsCount, "Expected 4 trust points");
}
