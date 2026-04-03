import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blend,
  Compass,
  Globe2,
  HandHeart,
  HeartHandshake,
  Layers3,
  ShieldCheck,
  Sparkles,
  Sunrise,
  CheckCircle2,
} from "lucide-react";
import { KesherAnimatedLogo } from "../../components/brand/KesherAnimatedLogo";
import LocaleSwitcher from "../../components/i18n/LocaleSwitcher";
import { getMessages, isSupportedLocale, supportedLocales } from "../site-data";
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

  const t = getMessages(locale);
  const page = t.tracks.mixed;

  return (
    <div
      dir={t.direction}
      className="min-h-screen overflow-x-hidden bg-[linear-gradient(to_bottom,_#fff8fb_0%,_#ffffff_34%,_#f8fafc_100%)] text-stone-900"
    >
      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 md:px-6">
          <Link href={`/${locale}`}>
            <KesherAnimatedLogo tagline="Love. Family. Smart Connection." />
          </Link>
          <LocaleSwitcher locale={locale} />
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,#fff1f6,#ffffff,#eef8ff)] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_24%),radial-gradient(circle_at_center,rgba(251,146,60,0.10),transparent_22%)]" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-rose-500" />
                {page.badge}
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] md:text-7xl">
                {page.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
                {page.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#join"
                  className="rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_50px_rgba(244,63,94,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  Join this track
                </a>

                <Link
                  href={`/${locale}`}
                  className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-stone-900 shadow-md ring-1 ring-stone-200 transition duration-300 hover:-translate-y-0.5"
                >
                  Back to home
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-white/90">
                  <Blend className="mb-3 h-5 w-5 text-rose-500" />
                  <div className="text-sm font-semibold text-stone-900">
                    Flexible tone
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    Designed for people who live between worlds.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-white/90">
                  <HeartHandshake className="mb-3 h-5 w-5 text-orange-500" />
                  <div className="text-sm font-semibold text-stone-900">
                    Emotion + clarity
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    Warmth and structure without forcing one style.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-white/90">
                  <Compass className="mb-3 h-5 w-5 text-sky-500" />
                  <div className="text-sm font-semibold text-stone-900">
                    Balanced path
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    A gentler route for complex, modern realities.
                  </p>
                </div>
              </div>
            </div>

            {/* VISUAL */}
            <div className="relative">
              <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                <div className="grid gap-4">
                  <div className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-stone-500">Mixed path</div>
                        <div className="text-xl font-bold text-stone-900">
                          Sensitive to nuance
                        </div>
                      </div>
                      <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-sky-500 p-3 shadow-lg">
                        <Globe2 className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-2xl bg-rose-50 p-4 text-sm text-stone-700 ring-1 ring-rose-100">
                        A more adaptable approach for people with layered identities and values.
                      </div>
                      <div className="rounded-2xl bg-sky-50 p-4 text-sm text-stone-700 ring-1 ring-sky-100">
                        More room for choice, complexity and real-life nuance.
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur">
                    <div className="mb-3 text-sm font-semibold text-stone-900">
                      Why it feels different
                    </div>
                    <p className="text-sm leading-7 text-stone-600">
                      This track is not rigid. It is intentionally built to feel open,
                      human and emotionally intelligent.
                    </p>
                  </div>
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
                    <div className="text-sm text-stone-100">A bridge between styles</div>
                    <div className="mt-1 text-xl font-bold">
                      More open, more flexible, more emotionally aware
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="mt-8 grid gap-4 rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur md:grid-cols-4">
          {page.highlights.map((item: string) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-stone-50/80 p-4 ring-1 ring-white/80"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-rose-500" />
              <span className="text-sm font-semibold text-stone-700">{item}</span>
            </div>
          ))}
        </section>

        {/* STORY SECTION */}
        <section className="mt-20 grid gap-6 md:grid-cols-[1.02fr_0.98fr] md:items-center">
          <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#fff1f6,#fff7ed,#eef8ff)] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="mb-4 inline-flex rounded-full border border-white/80 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-stone-500 shadow-sm">
              Designed for flexibility
            </div>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Not everyone fits neatly into one category.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              This track is for people who need more room, more empathy and a more
              adaptable approach — without losing clarity or elegance.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white/90 p-5 shadow-md ring-1 ring-stone-100">
                <Layers3 className="mb-3 h-5 w-5 text-rose-500" />
                <div className="text-sm font-semibold text-stone-900">
                  Layered realities
                </div>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  More suitable for families, backgrounds and lifestyles that are not one-dimensional.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white/90 p-5 shadow-md ring-1 ring-stone-100">
                <HandHeart className="mb-3 h-5 w-5 text-orange-500" />
                <div className="text-sm font-semibold text-stone-900">
                  Gentle tone
                </div>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  The experience stays warm and open rather than strict or overly formal.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white/90 p-5 shadow-md ring-1 ring-stone-100">
                <ShieldCheck className="mb-3 h-5 w-5 text-sky-500" />
                <div className="text-sm font-semibold text-stone-900">
                  Respectful flow
                </div>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  Still structured enough to build trust and confidence throughout the journey.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white/90 p-5 shadow-md ring-1 ring-stone-100">
                <Sunrise className="mb-3 h-5 w-5 text-amber-500" />
                <div className="text-sm font-semibold text-stone-900">
                  More human
                </div>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  A path that feels softer, more personal and less boxed-in.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#1f2937,#3f3f46,#0f172a)] p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)]">
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-stone-300">
              Emotional balance
            </div>
            <h3 className="text-3xl font-black leading-tight">
              A bridge between worlds, not a compromise.
            </h3>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              The mixed track should feel intentional, premium and emotionally mature —
              not uncertain, not vague, and not generic.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-2 text-sm font-semibold text-rose-300">
                  Open but guided
                </div>
                <p className="leading-7 text-stone-300">
                  Flexible enough for nuance, but still curated and well-designed.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-2 text-sm font-semibold text-sky-300">
                  Contemporary but warm
                </div>
                <p className="leading-7 text-stone-300">
                  A softer visual language with clarity, trust and a modern sensibility.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-2 text-sm font-semibold text-orange-300">
                  Built for complexity
                </div>
                <p className="leading-7 text-stone-300">
                  Better suited for real people whose lives and identities do not fit a single template.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="join"
          className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,241,246,0.98),rgba(240,249,255,0.96))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-stone-500 shadow-sm">
              Mixed track
            </div>
            <h2 className="text-3xl font-black md:text-4xl">
              Looking for a more flexible path?
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Explore a track built for nuance, openness and a more human-centered experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}`}
                className="rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_40px_rgba(244,63,94,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
              >
                Get early access
              </Link>

              <Link
                href={`/${locale}/traditional`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-stone-900 shadow-md ring-1 ring-stone-200 transition duration-300 hover:-translate-y-0.5"
              >
                Explore another track
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}