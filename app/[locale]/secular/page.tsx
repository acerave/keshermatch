import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Eye,
  Globe2,
  LayoutGrid,
  Lock,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  CheckCircle2,
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

  return (
    <div
      dir={t.direction}
      className="min-h-screen overflow-x-hidden bg-[linear-gradient(to_bottom,_#f8fbff_0%,_#ffffff_35%,_#f8fafc_100%)] text-stone-900"
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
        <section className="relative overflow-hidden rounded-[2.5rem] border border-sky-100 bg-[linear-gradient(135deg,#eef6ff,#f8fbff,#f4f7ff)] p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(15,23,42,1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,1)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative grid gap-10 md:grid-cols-[1.02fr_0.98fr] md:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/85 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-sky-500" />
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
                  className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_50px_rgba(14,165,233,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
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
                <div className="rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-white/90">
                  <Brain className="mb-3 h-5 w-5 text-sky-500" />
                  <div className="text-sm font-semibold text-stone-900">
                    Smart matching
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    Better filtering, better fit, less friction.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-white/90">
                  <Lock className="mb-3 h-5 w-5 text-violet-500" />
                  <div className="text-sm font-semibold text-stone-900">
                    Privacy controls
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    Modern privacy expectations built into the flow.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-white/90">
                  <LayoutGrid className="mb-3 h-5 w-5 text-sky-600" />
                  <div className="text-sm font-semibold text-stone-900">
                    Clean experience
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    A product-like journey that feels structured and calm.
                  </p>
                </div>
              </div>
            </div>

            {/* VISUAL */}
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

                  <div className="absolute left-5 right-5 top-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-xl">
                      <div className="text-xs uppercase tracking-[0.18em] text-sky-100">
                        Product feel
                      </div>
                      <div className="mt-1 text-lg font-bold">
                        Clean, intentional, modern
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-xl">
                      <div className="text-xs uppercase tracking-[0.18em] text-violet-100">
                        Better flow
                      </div>
                      <div className="mt-1 text-lg font-bold">
                        Less noise, more relevance
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-5 right-5 w-full max-w-sm rounded-[1.5rem] border border-white/15 bg-slate-950/40 p-4 text-white backdrop-blur-xl">
                    <div className="text-sm text-stone-200">Secular path</div>
                    <div className="mt-1 text-xl font-bold">
                      Modern dating experience, elevated and focused
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-[1.5rem] bg-white p-5 shadow-md ring-1 ring-stone-100">
                    <Eye className="mb-3 h-5 w-5 text-sky-500" />
                    <div className="text-sm font-semibold text-stone-900">
                      Clarity
                    </div>
                    <p className="mt-1 text-sm leading-6 text-stone-600">
                      A more understandable and transparent process.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] bg-white p-5 shadow-md ring-1 ring-stone-100">
                    <WandSparkles className="mb-3 h-5 w-5 text-violet-500" />
                    <div className="text-sm font-semibold text-stone-900">
                      Simplicity
                    </div>
                    <p className="mt-1 text-sm leading-6 text-stone-600">
                      Cleaner steps and a smoother user journey.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] bg-white p-5 shadow-md ring-1 ring-stone-100">
                    <ShieldCheck className="mb-3 h-5 w-5 text-sky-600" />
                    <div className="text-sm font-semibold text-stone-900">
                      Control
                    </div>
                    <p className="mt-1 text-sm leading-6 text-stone-600">
                      More control over visibility and progression.
                    </p>
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
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-500" />
              <span className="text-sm font-semibold text-stone-700">{item}</span>
            </div>
          ))}
        </section>

        {/* FEATURE GRID */}
        <section className="mt-20 grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-stone-500 shadow-sm">
              Modern by design
            </div>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Built for people who want a cleaner, smarter experience.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              This track is meant to feel current, product-driven and respectful
              of personal choice — without the clutter or awkwardness of generic dating sites.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-stone-100">
                <div className="mb-2 text-sm font-semibold text-sky-500">
                  Better structure
                </div>
                <p className="leading-7 text-stone-600">
                  Clearer hierarchy, better screens, and a calmer decision-making flow.
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-stone-100">
                <div className="mb-2 text-sm font-semibold text-violet-500">
                  More personal control
                </div>
                <p className="leading-7 text-stone-600">
                  You decide what to share, when to move forward, and how visible you want to be.
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-stone-100">
                <div className="mb-2 text-sm font-semibold text-sky-600">
                  Product-level polish
                </div>
                <p className="leading-7 text-stone-600">
                  It should feel like a premium digital product, not a generic matchmaking directory.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#0f172a,#1e293b,#312e81)] p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-3 text-sm font-semibold text-sky-300">
                  AI-assisted
                </div>
                <p className="leading-7 text-stone-300">
                  Smart recommendations help reduce noise and increase relevance.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-3 text-sm font-semibold text-violet-300">
                  UX-first
                </div>
                <p className="leading-7 text-stone-300">
                  The journey is designed around usability, not just forms and fields.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-3 text-sm font-semibold text-sky-200">
                  Privacy-aware
                </div>
                <p className="leading-7 text-stone-300">
                  Modern expectations for exposure and control are part of the core design.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-3 text-sm font-semibold text-indigo-200">
                  International feel
                </div>
                <p className="leading-7 text-stone-300">
                  Visually and emotionally ready for global audiences, not just local adaptation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="join"
          className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(240,249,255,0.98),rgba(245,243,255,0.96))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-stone-500 shadow-sm">
              Secular track
            </div>
            <h2 className="text-3xl font-black md:text-4xl">
              Ready for a smarter, cleaner path?
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Explore a track designed for clarity, privacy and a more modern product experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}`}
                className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_40px_rgba(14,165,233,0.22)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
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