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

  return (
    <div
      dir={t.direction}
      className="min-h-screen overflow-x-hidden bg-[linear-gradient(to_bottom,_#fffaf7_0%,_#ffffff_32%,_#f8fafc_100%)] text-stone-900"
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
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,#1c1917,#292524,#451a03)] p-8 text-white shadow-[0_30px_100px_rgba(0,0,0,0.28)] md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.12),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 shadow-lg backdrop-blur">
                <Sparkles className="h-4 w-4 text-amber-300" />
                {page.badge}
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] md:text-7xl">
                {page.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
                {page.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#join"
                  className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_50px_rgba(251,146,60,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  Join this track
                </a>

                <Link
                  href={`/${locale}`}
                  className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-white/10"
                >
                  Back to home
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <HeartHandshake className="mb-3 h-5 w-5 text-rose-300" />
                  <div className="text-sm font-semibold text-white">
                    Human warmth
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-300">
                    Built around trust, values and respectful matching.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <Users className="mb-3 h-5 w-5 text-amber-300" />
                  <div className="text-sm font-semibold text-white">
                    Family-aware
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-300">
                    A journey that feels considerate and culturally sensitive.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <ShieldCheck className="mb-3 h-5 w-5 text-orange-300" />
                  <div className="text-sm font-semibold text-white">
                    Respectful process
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-300">
                    More clarity, less noise, and a calmer user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* VISUAL */}
            <div className="relative">
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
                      <div className="text-sm text-stone-200">Traditional path</div>
                      <div className="mt-1 text-xl font-bold">
                        Elegant, respectful and values-led
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-stone-300">Why it feels different</div>
                        <div className="text-xl font-bold text-white">
                          Tradition with modern clarity
                        </div>
                      </div>
                      <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 p-3 shadow-lg">
                        <Crown className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {page.highlights.slice(0, 2).map((item: string) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-stone-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
                    <div className="mb-3 text-sm font-semibold text-white/90">
                      Premium journey
                    </div>
                    <p className="text-sm leading-7 text-stone-300">
                      A more thoughtful path for people who want emotional clarity,
                      family sensitivity and a polished experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
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

        {/* VALUE SECTION */}
        <section className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow-lg">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-black text-stone-900">Warmth & trust</h3>
            <p className="mt-3 leading-8 text-stone-600">
              This track is designed to feel calmer, kinder and more aligned with
              people who want sincere, respectful introductions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-black text-stone-900">Family sensitivity</h3>
            <p className="mt-3 leading-8 text-stone-600">
              The experience acknowledges values, pace and family context without
              turning the process into something heavy or outdated.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 text-white shadow-lg">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-black text-stone-900">Private by design</h3>
            <p className="mt-3 leading-8 text-stone-600">
              Better control over exposure, clearer steps and a premium user
              journey that feels safe from the first interaction.
            </p>
          </div>
        </section>

        {/* DARK STORY SECTION */}
        <section className="mt-20 rounded-[2.5rem] bg-[linear-gradient(135deg,#1c1917,#292524,#111827)] p-8 text-white shadow-[0_30px_100px_rgba(0,0,0,0.22)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-stone-300">
                Why this track matters
              </div>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                A traditional path does not have to feel old-fashioned.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-300">
                The goal is to combine warmth, values and human dignity with a
                polished digital experience that feels current, elegant and easy
                to trust.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-2 text-sm font-semibold text-orange-300">
                  Clearer experience
                </div>
                <p className="leading-7 text-stone-300">
                  Simpler navigation, stronger trust signals and better visual calm.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-2 text-sm font-semibold text-rose-300">
                  More emotional safety
                </div>
                <p className="leading-7 text-stone-300">
                  A tone that feels respectful, gentle and intentional.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-2 text-sm font-semibold text-amber-300">
                  Better first impression
                </div>
                <p className="leading-7 text-stone-300">
                  Premium visuals help users feel they are in the right place.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-2 text-sm font-semibold text-sky-300">
                  Modern confidence
                </div>
                <p className="leading-7 text-stone-300">
                  Tradition can still be beautifully designed and digitally mature.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="join"
          className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,247,237,0.98),rgba(255,250,247,0.96))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-stone-500 shadow-sm">
              Traditional track
            </div>
            <h2 className="text-3xl font-black md:text-4xl">
              Ready to explore a more respectful path?
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Start with a track designed for warmth, clarity and meaningful
              connection — with a more premium user experience from the very first step.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}`}
                className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_40px_rgba(251,146,60,0.25)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
              >
                Get early access
              </Link>

              <Link
                href={`/${locale}/mixed`}
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