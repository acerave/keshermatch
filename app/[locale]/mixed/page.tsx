import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blend,
  Compass,
  Globe2,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { KesherAnimatedLogo } from "../../components/brand/KesherAnimatedLogo";
import LocaleSwitcher from "../../components/i18n/LocaleSwitcher";
import { isSupportedLocale, supportedLocales } from "../site-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function MixedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const ui = {
    badge: "A flexible path",
    title: "For people navigating more than one world",
    desc:
      "Designed for people whose lives do not fit into one definition — creating a more flexible, open and human path to connection.",
    ctaPrimary: "Join this track",
    ctaSecondary: "Back to home",
    cards: [
      {
        title: "Real flexibility",
        text: "Not every family, background or lifestyle fits one fixed category.",
      },
      {
        title: "Human sensitivity",
        text: "Built to handle nuance, emotion and real-life complexity.",
      },
      {
        title: "Balance",
        text: "More room for both personal choice and family context, when relevant.",
      },
    ],
    highlights: [
      "Built for nuance and complexity",
      "More flexible and emotionally aware",
      "Balances family and personal choice",
      "Still feels intentional and serious",
    ],
    darkTitle: "Not a compromise — a path built for real life",
    darkDesc:
      "Some people need more room, more empathy and a more adaptable experience without losing seriousness or trust.",
    darkCards: [
      "Built for nuance and complexity",
      "More flexible and emotionally aware",
      "Balances family and personal choice",
      "Still feels intentional and serious",
    ],
    bottomTitle: "Looking for a more flexible path?",
    bottomDesc:
      "Explore a track designed for openness, balance and real-life complexity.",
    bottomPrimary: "Get early access",
    bottomSecondary: "Explore the traditional track",
  };

  return (
    <div
      dir="ltr"
      className="min-h-screen overflow-x-hidden bg-[linear-gradient(to_bottom,_#fff8fb_0%,_#ffffff_34%,_#f8fafc_100%)] text-stone-900"
    >
      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 md:px-6">
          <Link href={`/${locale}`}>
            <KesherAnimatedLogo tagline="Love. Family. Smart Connection." />
          </Link>

          <LocaleSwitcher currentLocale={locale} />
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,#fff1f6,#ffffff,#eef8ff)] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_24%),radial-gradient(circle_at_center,rgba(251,146,60,0.10),transparent_22%)]" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-rose-500" />
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
                  className="rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_50px_rgba(244,63,94,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
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
                <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-white/90">
                  <Blend className="mb-3 h-5 w-5 text-rose-500" />
                  <div className="text-sm font-semibold text-stone-900">
                    Flexibility
                  </div>
                </div>

                <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-white/90">
                  <HeartHandshake className="mb-3 h-5 w-5 text-orange-500" />
                  <div className="text-sm font-semibold text-stone-900">
                    Sensitivity
                  </div>
                </div>

                <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-white/90">
                  <Compass className="mb-3 h-5 w-5 text-sky-500" />
                  <div className="text-sm font-semibold text-stone-900">
                    Balance
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                <div className="grid gap-4">
                  {ui.cards.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-sky-500 p-3 shadow-lg">
                          <Globe2 className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-lg font-bold text-stone-900">
                          {item.title}
                        </div>
                      </div>
                      <p className="text-sm leading-7 text-stone-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                  <Image
                    src="/images/mixed-hero.jpg"
                    alt="Mixed flexible matchmaking path"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/15 bg-white/15 p-4 text-white backdrop-blur-xl">
                    <div className="text-sm text-stone-100">Mixed path</div>
                    <div className="mt-1 text-xl font-bold">
                      More open, flexible and emotionally aware
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur md:grid-cols-4">
          {ui.highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-stone-50/80 p-4 ring-1 ring-white/80"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-rose-500" />
              <span className="text-sm font-semibold text-stone-700">
                {item}
              </span>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-[2.5rem] bg-[linear-gradient(135deg,#1f2937,#3f3f46,#0f172a)] p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                {ui.darkTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-300">
                {ui.darkDesc}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ui.darkCards.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-rose-300" />
                    <p className="leading-7 text-stone-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="join"
          className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,241,246,0.98),rgba(240,249,255,0.96))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              {ui.bottomTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              {ui.bottomDesc}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}`}
                className="rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_40px_rgba(244,63,94,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
              >
                {ui.bottomPrimary}
              </Link>

              <Link
                href={`/${locale}/traditional`}
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