"use client";

import Link from "next/link";
import { Globe, HeartHandshake, Home, Sparkles, Users, Wand2 } from "lucide-react";
import KesherLogo from "./components/brand/KesherLogo";
import FeatureCard from "./components/brand/FeatureCard";
import PrimaryButton from "./components/brand/PrimaryButton";
import SecondaryLink from "./components/brand/SecondaryLink";

const landingPages = [
  {
    href: "/traditional",
    label: "מסורתיים",
    badge: "מסלול מסורתי",
    title: "שידוכים עם כבוד למסורת, למשפחה וללב",
    description:
      "חוויית נחיתה חמה, רכה ומשפחתית יותר — לקהל מסורתי שמחפש התאמה מודרנית בלי לאבד את הערכים.",
    gradient: "from-amber-50 via-orange-50 to-rose-50",
    accent: "from-orange-500 to-rose-500",
  },
  {
    href: "/secular",
    label: "חילוניים",
    badge: "מסלול חילוני",
    title: "חוויית היכרות חכמה, פתוחה ומדויקת יותר",
    description:
      "גישה נקייה ומודרנית יותר, שמעמידה את הפרט במרכז עם פרטיות ושליטה.",
    gradient: "from-sky-50 via-white to-violet-50",
    accent: "from-sky-500 to-violet-500",
  },
  {
    href: "/mixed",
    label: "מעורב",
    badge: "מסלול מעורב",
    title: "מקום שמחבר בין עולמות שונים בגישה רגישה",
    description:
      "מסלול גמיש שמכבד מורכבות ופתיחות — בלי להכניס אנשים לקופסה.",
    gradient: "from-rose-50 via-white to-sky-50",
    accent: "from-rose-500 via-orange-400 to-sky-500",
  },
];

export default function HomePage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-100 text-stone-900">

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <KesherLogo tagline="מסורת, משפחה, התאמה חכמה" />
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/traditional">מסורתיים</Link>
            <Link href="/secular">חילוניים</Link>
            <Link href="/mixed">מעורב</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:py-16">

        {/* Hero */}
        <section className="rounded-[3rem] bg-gradient-to-br from-rose-100 via-orange-50 to-sky-100 p-10 md:p-16 shadow-xl">
          <h1 className="text-5xl font-black md:text-7xl leading-tight">
            למצוא את
            <span className="block bg-gradient-to-r from-rose-500 via-orange-500 to-sky-500 bg-clip-text text-transparent">
              החיבור הנכון
            </span>
            בדרך חדשה
          </h1>

          <p className="mt-6 text-lg text-stone-700 max-w-2xl">
            שילוב בין שדכנות מסורתית לבין בינה מלאכותית — ליצירת התאמות מדויקות יותר.
          </p>

          <div className="mt-8 flex gap-4">
            <PrimaryButton>הצטרפות מוקדמת</PrimaryButton>
            <SecondaryLink href="/traditional">איך זה עובד</SecondaryLink>
          </div>
        </section>
<section className="mt-20 rounded-3xl bg-white p-10 shadow-xl">
  <h2 className="text-3xl font-bold text-center">השאירו פרטים ונחזור אליכם</h2>

  <form className="mt-8 max-w-xl mx-auto space-y-4">
    <input
      type="text"
      placeholder="שם מלא"
      className="w-full rounded-xl border p-3"
    />
    <input
      type="email"
      placeholder="אימייל"
      className="w-full rounded-xl border p-3"
    />
    <input
      type="tel"
      placeholder="טלפון"
      className="w-full rounded-xl border p-3"
    />

    <button className="w-full bg-gradient-to-r from-rose-500 to-orange-400 text-white py-3 rounded-xl font-bold">
      שליחה
    </button>
  </form>
</section>
        {/* Landing cards */}
        <section className="mt-16 grid gap-8 md:grid-cols-3">
          {landingPages.map((page) => (
            <div
              key={page.href}
              className={`rounded-2xl bg-gradient-to-br ${page.gradient} p-6 shadow-lg hover:shadow-2xl transition`}
            >
              <h3 className="text-xl font-bold">{page.title}</h3>
              <p className="mt-3 text-stone-700">{page.description}</p>

              <Link
                href={page.href}
                className={`mt-6 inline-block rounded-full bg-gradient-to-r ${page.accent} px-6 py-3 text-white font-semibold`}
              >
                לעמוד {page.label}
              </Link>
            </div>
          ))}
        </section>

        {/* Features */}
        <section className="mt-20 grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Home} title="בית" text="חוויה חמה ואמינה" />
          <FeatureCard icon={Users} title="אנשים" text="התאמה לפי ערכים" />
          <FeatureCard icon={Globe} title="עולם" text="תמיכה בינלאומית" />
        </section>

      </main>
    </div>
  );
}