import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
  Lock,
  Crown,
  CheckCircle2,
  HouseHeart,
} from "lucide-react";
import { KesherAnimatedLogo } from "../../components/brand/KesherAnimatedLogo";
import LocaleSwitcher from "../../components/i18n/LocaleSwitcher";
import { getMessages, isSupportedLocale, supportedLocales } from "../site-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function TraditionalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const t = getMessages(locale);
  const page = t.tracks.traditional;
  const isHebrew = false;

  const ui = isHebrew

    ? {
        badge: "מסלול מבוסס ערכים ומשפחה",
        title: "שידוכים שמכבדים גם את הילד וגם את ההורים",
        desc:
          "המסלול המסורתי נבנה עבור משפחות שמחפשות תהליך רגוע יותר, רציני יותר ומדויק יותר — עם מקום לערכים, למעורבות הורית נכונה ולרצון ליצור בית.",
        ctaPrimary: "להצטרפות למסלול",
        ctaSecondary: "חזרה לדף הבית",
        visualTitle: "תהליך משפחתי, אבל לא מיושן",
        visualText:
          "המערכת שומרת על כבוד, פרטיות ובהירות — בלי להפוך את התהליך ללחוץ, מיושן או כבד.",
        blocks: [
          {
            title: "מקום אמיתי להורים",
            text: "ההורים יכולים להיות חלק מהדרך, לסייע, ללוות ולהרגיש בטוחים יותר — בלי לפגוע בבחירה האישית.",
          },
          {
            title: "קצב רגוע ומכבד",
            text: "לא עוד אתר שמרגיש מהיר ורועש מדי. כאן התהליך בנוי כדי לאפשר רצינות, בירור ושיקול דעת.",
          },
          {
            title: "התאמה לפני רושם",
            text: "הדגש הוא על ערכים, אופי, התאמה לטווח ארוך ויכולת לבנות בית — לא רק על רושם ראשוני.",
          },
        ],
        darkTitle: "המסלול הזה נועד להורים שרוצים להיות חלק — בצורה נכונה",
        darkDesc:
          "לא כפייה, לא לחץ, ולא ניסיון לעקוף את הילד או הילדה. אלא תהליך מכבד שנותן למשפחה מקום אמיתי, תוך שמירה על פרטיות, רצון אישי ורגישות.",
        darkCards: [
          "מתאים למשפחות שרוצות להיות שותפות בתהליך",
          "מכבד ערכים, רגישויות וסגנון חיים",
          "יוצר אמון כבר מהרגע הראשון",
          "מרגיש רציני יותר מאתר היכרויות רגיל",
        ],
        bottomTitle: "מחפשים מסלול שידבר גם אליכם כהורים?",
        bottomDesc:
          "אם חשוב לכם שהתהליך יהיה מכבד, בשל, רציני ומותאם למשפחה — המסלול המסורתי נבנה בדיוק בשביל זה.",
        bottomPrimary: "קבלו עדכון כשזה נפתח",
        bottomSecondary: "למסלול המשולב",
      }
    : {
        badge: "A values-led path",
        title: "A more respectful way to meet with intention",
        desc:
          "Designed for people who value tradition, family context and a more thoughtful introduction process — where trust, sincerity and long-term fit come first.",
        ctaPrimary: "Join this track",
        ctaSecondary: "Back to home",
        visualTitle: "Family-aware, without feeling outdated",
        visualText:
          "A calmer and more respectful process, with space for values, privacy and thoughtful introductions.",
        blocks: [
          {
            title: "Room for family guidance",
            text: "When relevant, trusted family members can be part of the process in a respectful and balanced way.",
          },
          {
            title: "A calmer pace",
            text: "Built for seriousness, clarity and better decision-making — not noise and pressure.",
          },
          {
            title: "Values before impression",
            text: "The focus is on compatibility, character and long-term intention.",
          },
        ],
        darkTitle: "For people who want something more grounded and respectful",
        darkDesc:
          "This path is built around trust, warmth and long-term compatibility — not casual browsing or generic dating dynamics.",
        darkCards: [
          "Family-aware when relevant",
          "Respectful and calmer experience",
          "Designed for sincerity and clarity",
          "Feels more intentional from the start",
        ],
        bottomTitle: "Looking for a more grounded path?",
        bottomDesc:
          "Explore a track designed for values, trust and a more respectful process.",
        bottomPrimary: "Get early access",
        bottomSecondary: "Explore the mixed track",
      };

  return (
    <div
      dir={t.direction}
      className="min-h-screen overflow-x-hidden bg-[linear-gradient(to_bottom,_#fffaf7_0%,_#ffffff_32%,_#f8fafc_100%)] text-stone-900"
    >
      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 md:px-6">
          <Link href={`/${locale}`}>
            <KesherAnimatedLogo
              tagline={
                isHebrew
                  ? "שידוכים עם מקום אמיתי גם להורים"
                  : "Love. Family. Smart Connection."
              }
            />
          </Link>
          <LocaleSwitcher currentLocale={locale} />
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,#1c1917,#292524,#451a03)] p-8 text-white shadow-[0_30px_100px_rgba(0,0,0,0.28)] md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.12),transparent_24%)]" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 shadow-lg backdrop-blur">
                <Sparkles className="h-4 w-4 text-amber-300" />
                {ui.badge}
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] md:text-7xl">
                {ui.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
                {ui.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#join"
                  className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_50px_rgba(251,146,60,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  {ui.ctaPrimary}
                </a>

                <Link
                  href={`/${locale}`}
                  className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-white/10"
                >
                  {ui.ctaSecondary}
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <HouseHeart className="mb-3 h-5 w-5 text-rose-300" />
                  <div className="text-sm font-semibold text-white">
                    {isHebrew ? "משפחה" : "Family-aware"}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <HeartHandshake className="mb-3 h-5 w-5 text-amber-300" />
                  <div className="text-sm font-semibold text-white">
                    {isHebrew ? "כבוד ואמון" : "Trust & sincerity"}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <ShieldCheck className="mb-3 h-5 w-5 text-orange-300" />
                  <div className="text-sm font-semibold text-white">
                    {isHebrew ? "תהליך מכבד" : "Respectful journey"}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.02fr_0.98fr]">
              <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur">
                <Image
                  src="/images/traditional-hero.jpg"
                  alt="Traditional premium matchmaking"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="max-w-sm rounded-[1.5rem] border border-white/10 bg-black/35 p-4 text-white backdrop-blur-xl">
                    <div className="text-sm text-stone-200">{ui.visualTitle}</div>
                    <div className="mt-1 text-xl font-bold">{ui.visualText}</div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {ui.blocks.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 p-3 shadow-lg">
                        <Crown className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-lg font-bold text-white">{item.title}</div>
                    </div>
                    <p className="text-sm leading-7 text-stone-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-4">
          {page.highlights.map((item: string) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-stone-50/80 p-4 ring-1 ring-white/80"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" />
              <span className="text-sm font-semibold text-stone-700">{item}</span>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-[2.5rem] bg-[linear-gradient(135deg,#1c1917,#292524,#111827)] p-8 text-white shadow-[0_30px_100px_rgba(0,0,0,0.22)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                {ui.darkTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-300">{ui.darkDesc}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ui.darkCards.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-orange-300" />
                    <p className="leading-7 text-stone-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="join"
          className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,247,237,0.98),rgba(255,250,247,0.96))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">{ui.bottomTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">{ui.bottomDesc}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}`}
                className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_40px_rgba(251,146,60,0.25)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
              >
                {ui.bottomPrimary}
              </Link>

              <Link
                href={`/${locale}/mixed`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-stone-900 shadow-md ring-1 ring-stone-200 transition duration-300 hover:-translate-y-0.5"
              >
                {ui.bottomSecondary}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}