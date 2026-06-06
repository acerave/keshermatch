import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Eye,
  LayoutGrid,
  Lock,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  CheckCircle2,
  UserRoundCheck,
} from "lucide-react";
import { KesherAnimatedLogo } from "../../components/brand/KesherAnimatedLogo";
import LocaleSwitcher from "../../components/i18n/LocaleSwitcher";
import { getMessages, isSupportedLocale, supportedLocales } from "../site-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function SecularPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const t = getMessages(locale);
  const page = t.tracks.secular;
  const isHebrew = false;

  const ui = isHebrew
    ? {
        badge: "מסלול מודרני ופתוח",
        title: "שידוכים רציניים, בלי להרגיש מיושנים",
        desc:
          "המסלול המודרני מיועד להורים ולילדים שרוצים רצינות אמיתית — אבל גם פרטיות, שליטה, חוויה מודרנית ונקייה יותר, בלי רעש מיותר.",
        ctaPrimary: "להצטרפות למסלול",
        ctaSecondary: "חזרה לדף הבית",
        cards: [
          {
            title: "בחירה אישית נשמרת",
            text: "גם כשהורים מעורבים, הבחירה נשארת מכבדת, שקולה ולא לוחצת.",
          },
          {
            title: "פחות עומס, יותר דיוק",
            text: "פחות תחושת אתר היכרויות גנרי, ויותר חוויה ברורה, מסודרת ומכוונת מטרה.",
          },
          {
            title: "פרטיות מודרנית",
            text: "שליטה על חשיפה, קצב ותהליך — בצורה שמרגישה טבעית ונכונה יותר לדור של היום.",
          },
        ],
        darkTitle: "מסלול שמתאים למשפחות שרוצות רצינות — בלי כבדות",
        darkDesc:
          "יש משפחות שרוצות לעזור לילדים, אבל לא מחפשות חוויה מיושנת. המסלול הזה נועד בדיוק למקום הזה: מכבד, מודרני, רציני וברור.",
        darkCards: [
          "מתאים להורים שרוצים תהליך עדכני יותר",
          "נותן לילדים תחושת שליטה ונוחות",
          "יוצר אמון בלי שפה כבדה או ישנה",
          "מרגיש מוצר אמיתי, לא אתר חובבני",
        ],
        bottomTitle: "מחפשים מסלול רציני יותר, אבל מודרני?",
        bottomDesc:
          "זה המסלול שמתאים למשפחות שרוצות לשלב כוונה אמיתית עם חוויה הרבה יותר עדכנית, נקייה וברורה.",
        bottomPrimary: "קבלו עדכון כשזה נפתח",
        bottomSecondary: "למסלול המשולב",
      }
    : {
        badge: "A modern and open path",
        title: "A clearer and more modern way to meet",
        desc:
          "Designed for people who value independence, privacy and a more focused experience — without the noise of typical dating platforms.",
        ctaPrimary: "Join this track",
        ctaSecondary: "Back to home",
        cards: [
          {
            title: "Personal choice first",
            text: "A more respectful process that still leaves room for family, when relevant.",
          },
          {
            title: "Less noise, more clarity",
            text: "Cleaner flow, better structure and a calmer experience from the start.",
          },
          {
            title: "Modern privacy",
            text: "Control over visibility, pace and interaction in a way that feels natural today.",
          },
        ],
        darkTitle: "For people who want seriousness without old-fashioned heaviness",
        darkDesc:
          "A more modern track for people who still want trust, intention and meaningful introductions.",
        darkCards: [
          "Cleaner and more modern tone",
          "More room for personal control",
          "Still serious and relationship-oriented",
          "Feels focused rather than noisy",
        ],
        bottomTitle: "Looking for a more modern path?",
        bottomDesc:
          "Explore a track built for clarity, privacy and a more focused experience.",
        bottomPrimary: "Get early access",
        bottomSecondary: "Explore the mixed track",
      };

  return (
    <div
      dir={t.direction}
      className="min-h-screen overflow-x-hidden bg-[linear-gradient(to_bottom,_#f8fbff_0%,_#ffffff_35%,_#f8fafc_100%)] text-stone-900"
    >
      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 md:px-6">
          <Link href={`/${locale}`}>
            <KesherAnimatedLogo
              tagline={
                isHebrew
                  ? "שידוכים רציניים בגישה מודרנית"
                  : "Love. Family. Smart Connection."
              }
            />
          </Link>
          <LocaleSwitcher currentLocale={locale} />
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-sky-100 bg-[linear-gradient(135deg,#eef6ff,#f8fbff,#f4f7ff)] p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_24%)]" />

          <div className="relative grid gap-10 md:grid-cols-[1.02fr_0.98fr] md:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/85 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-sky-500" />
                {ui.badge}
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] md:text-7xl">
                {ui.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
                {ui.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#join"
                  className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_50px_rgba(14,165,233,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  {ui.ctaPrimary}
                </a>

                <Link
                  href={`/${locale}`}
                  className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-stone-900 shadow-md ring-1 ring-stone-200 transition duration-300 hover:-translate-y-0.5"
                >
                  {ui.ctaSecondary}
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-white/90">
                  <Brain className="mb-3 h-5 w-5 text-sky-500" />
                  <div className="text-sm font-semibold text-stone-900">
                    {isHebrew ? "בהירות" : "Clarity"}
                  </div>
                </div>
                <div className="rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-white/90">
                  <Lock className="mb-3 h-5 w-5 text-violet-500" />
                  <div className="text-sm font-semibold text-stone-900">
                    {isHebrew ? "פרטיות" : "Privacy"}
                  </div>
                </div>
                <div className="rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-white/90">
                  <LayoutGrid className="mb-3 h-5 w-5 text-sky-600" />
                  <div className="text-sm font-semibold text-stone-900">
                    {isHebrew ? "חוויית משתמש" : "Focused flow"}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-4">
                <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                  <Image
                    src="/images/secular-hero.jpg"
                    alt="Modern secular matchmaking"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />

                  <div className="absolute bottom-5 right-5 w-full max-w-sm rounded-[1.5rem] border border-white/20 bg-white/15 p-4 text-white backdrop-blur-xl">
                    <div className="text-sm text-stone-100">
                      {isHebrew ? "גישה מודרנית" : "Modern path"}
                    </div>
                    <div className="mt-1 text-xl font-bold">
                      {isHebrew
                        ? "רצינות אמיתית בלי שפה מיושנת"
                        : "A cleaner and more modern experience"}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-[1.5rem] bg-white p-5 shadow-md ring-1 ring-stone-100">
                    <Eye className="mb-3 h-5 w-5 text-sky-500" />
                    <div className="text-sm font-semibold text-stone-900">
                      {isHebrew ? "שקיפות" : "Transparency"}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] bg-white p-5 shadow-md ring-1 ring-stone-100">
                    <WandSparkles className="mb-3 h-5 w-5 text-violet-500" />
                    <div className="text-sm font-semibold text-stone-900">
                      {isHebrew ? "פשטות" : "Simplicity"}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] bg-white p-5 shadow-md ring-1 ring-stone-100">
                    <ShieldCheck className="mb-3 h-5 w-5 text-sky-600" />
                    <div className="text-sm font-semibold text-stone-900">
                      {isHebrew ? "שליטה" : "Control"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur md:grid-cols-4">
          {page.highlights.map((item: string) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-stone-50/80 p-4 ring-1 ring-white/80"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-500" />
              <span className="text-sm font-semibold text-stone-700">{item}</span>
            </div>
          ))}
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {ui.cards.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg">
                <UserRoundCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black text-stone-900">{item.title}</h3>
              <p className="mt-3 leading-8 text-stone-600">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-[2.5rem] bg-[linear-gradient(135deg,#0f172a,#1e293b,#312e81)] p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] md:p-10">
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
                    <CheckCircle2 className="mt-1 h-5 w-5 text-sky-300" />
                    <p className="leading-7 text-stone-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="join"
          className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(240,249,255,0.98),rgba(245,243,255,0.96))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">{ui.bottomTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">{ui.bottomDesc}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}`}
                className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_40px_rgba(14,165,233,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
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