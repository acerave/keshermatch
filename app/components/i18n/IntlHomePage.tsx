"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Crown,
  Globe2,
  HeartHandshake,
  Lock,
  ShieldCheck,
  Sparkles,
  Stars,
  UserRoundCheck,
} from "lucide-react";
import { Locale, getMessages } from "../../[locale]/site-data";
import { KesherAnimatedLogo } from "../brand/KesherAnimatedLogo";
import LocaleSwitcher from "./LocaleSwitcher";

const pageStyles = {
  traditional: {
    href: "traditional",
    gradient: "from-amber-50 via-orange-50 to-rose-50",
    button: "from-orange-500 to-rose-500",
    icon: HeartHandshake,
  },
  secular: {
    href: "secular",
    gradient: "from-sky-50 via-white to-violet-50",
    button: "from-sky-500 to-violet-500",
    icon: Brain,
  },
  mixed: {
    href: "mixed",
    gradient: "from-rose-50 via-white to-sky-50",
    button: "from-rose-500 via-orange-400 to-sky-500",
    icon: Globe2,
  },
} as const;

export function validateIntlLeadForm(
  values: { fullName?: string; email?: string; track?: string },
  locale: Locale
) {
  const t = getMessages(locale);
  const fullName = String(values.fullName ?? "").trim();
  const email = String(values.email ?? "").trim();
  const track = String(values.track ?? "").trim();

  if (!fullName) {
    return { ok: false, message: t.validation.fullName };
  }

  if (!email) {
    return { ok: false, message: t.validation.email };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { ok: false, message: t.validation.emailInvalid };
  }

  if (!["traditional", "secular", "mixed"].includes(track)) {
    return { ok: false, message: t.validation.track };
  }

  const trackLabel =
    t.tracks[track as "traditional" | "secular" | "mixed"].label;

  return {
    ok: true,
    message: t.validation.success
      .replace("{name}", fullName)
      .replace("{track}", trackLabel)
      .replace("{email}", email),
  };
}

function SectionTitle({
  badge,
  title,
  text,
}: {
  badge: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 inline-flex rounded-full border border-stone-200 bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-stone-500 shadow-sm">
        {badge}
      </div>
      <h2 className="text-3xl font-black leading-tight md:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-stone-600">
        {text}
      </p>
    </div>
  );
}

export default function IntlHomePage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const result = validateIntlLeadForm(
      {
        fullName: String(formData.get("fullName") ?? ""),
        email: String(formData.get("email") ?? ""),
        track: String(formData.get("track") ?? ""),
      },
      locale
    );

    if (!result.ok) {
      window.alert(result.message);
      return;
    }

    window.alert(result.message);
    form.reset();
  };

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

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 lg:flex">
              <Link
                href={`/${locale}/traditional`}
                className="transition hover:text-stone-950"
              >
                {t.nav.traditional}
              </Link>
              <Link
                href={`/${locale}/secular`}
                className="transition hover:text-stone-950"
              >
                {t.nav.secular}
              </Link>
              <Link
                href={`/${locale}/mixed`}
                className="transition hover:text-stone-950"
              >
                {t.nav.mixed}
              </Link>
            </nav>

            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
        {/* HERO */}
        <section className="relative mt-2 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,#111218,#181a20,#0f172a)] p-8 text-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(244,63,94,0.12),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:44px_44px]" />

          <div className="relative grid gap-10 md:grid-cols-[1.02fr_0.98fr] md:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 shadow-lg">
                <Sparkles className="h-4 w-4 text-orange-300" />
                {t.home.badge}
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] md:text-7xl">
                {t.home.title1}
                <span className="mt-1 block bg-gradient-to-r from-rose-300 via-orange-300 to-sky-300 bg-clip-text text-transparent">
                  {t.home.title2}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
                {t.home.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("lead-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_50px_rgba(251,146,60,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  {t.nav.earlyAccess}
                </button>

                <a
                  href="#tracks"
                  className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-white/10"
                >
                  Explore Tracks
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <ShieldCheck className="mb-3 h-5 w-5 text-sky-300" />
                  <div className="text-sm font-semibold text-white">
                    Privacy-first
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-300">
                    Control visibility, photos and pace.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <Brain className="mb-3 h-5 w-5 text-orange-300" />
                  <div className="text-sm font-semibold text-white">
                    AI-assisted
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-300">
                    Smart guidance without losing the human touch.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <Crown className="mb-3 h-5 w-5 text-rose-300" />
                  <div className="text-sm font-semibold text-white">
                    Premium feel
                  </div>
                  <p className="mt-1 text-sm leading-6 text-stone-300">
                    A modern, elegant and respectful journey.
                  </p>
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative">
              <div className="absolute -top-6 right-6 z-10 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                <Stars className="mr-2 inline h-4 w-4 text-orange-300" />
                Luxury + Modern
              </div>

              <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur">
                  <Image
                    src="/images/global-hero-couple.jpg"
                    alt="Premium matchmaking"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="max-w-xs rounded-[1.5rem] border border-white/10 bg-black/35 p-4 text-white backdrop-blur-xl">
                      <div className="text-sm text-stone-200">
                        Curated journey
                      </div>
                      <div className="mt-1 text-xl font-bold">
                        Meaningful connections, thoughtfully guided
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-stone-300">
                          Smart matching layer
                        </div>
                        <div className="text-xl font-bold text-white">
                          Human values + intelligent filtering
                        </div>
                      </div>
                      <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 p-3 shadow-lg">
                        <HeartHandshake className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-stone-200">
                        Personal fit, family sensitivity, and pace that respects
                        people.
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-stone-200">
                        Elegant UX designed to build trust from the very first
                        screen.
                      </div>
                    </div>
                  </div>

                  <div className="relative min-h-[200px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur">
                    <Image
                      src="/images/global-story-1.jpg"
                      alt="Elegant matchmaking experience"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="mt-8 grid gap-4 rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-2xl bg-stone-50/80 p-4 ring-1 ring-white/80">
            <Lock className="h-5 w-5 text-sky-500" />
            <span className="text-sm font-semibold text-stone-700">
              Full privacy controls
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-stone-50/80 p-4 ring-1 ring-white/80">
            <Brain className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-semibold text-stone-700">
              AI-assisted recommendations
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-stone-50/80 p-4 ring-1 ring-white/80">
            <UserRoundCheck className="h-5 w-5 text-rose-500" />
            <span className="text-sm font-semibold text-stone-700">
              Human-centered process
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-stone-50/80 p-4 ring-1 ring-white/80">
            <Crown className="h-5 w-5 text-violet-500" />
            <span className="text-sm font-semibold text-stone-700">
              Premium brand experience
            </span>
          </div>
        </section>

        {/* TRACKS */}
        <section id="tracks" className="mt-20">
          <SectionTitle
            badge="Tracks"
            title="Choose the path that fits your world"
            text="Each track is designed with its own language, tone and user experience — so the journey feels more natural, more respectful, and more relevant."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {(["traditional", "secular", "mixed"] as const).map((key) => {
              const page = t.tracks[key];
              const style = pageStyles[key];
              const Icon = style.icon;

              return (
                <div
                  key={key}
                  className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${style.gradient} p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] ring-1 ring-white/80 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_34%)]" />
                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div
                        className={`inline-flex rounded-full bg-gradient-to-r ${style.button} px-4 py-2 text-sm font-semibold text-white shadow-sm`}
                      >
                        {page.badge}
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/85 shadow-sm ring-1 ring-white/90">
                        <Icon className="h-5 w-5 text-stone-700" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-stone-900">
                      {page.title}
                    </h3>

                    <p className="mt-3 leading-8 text-stone-600">
                      {page.description}
                    </p>

                    <Link
                      href={`/${locale}/${style.href}`}
                      className={`mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${style.button} px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5`}
                    >
                      {page.button}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* STORY / IMAGE SECTION */}
        <section className="mt-20 grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/90 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/global-story-1.jpg"
                  alt="Luxury modern relationship experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/global-story-2.jpg"
                  alt="Human-centered matchmaking"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 inline-flex rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-stone-500 shadow-sm">
              Designed to feel elevated
            </div>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              More than a dating site. A guided premium experience.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              The goal is not just to collect signups. It is to create trust,
              emotional clarity, and a sense that this platform already feels
              mature, intentional, and beautifully built.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-stone-100">
                <div className="mb-2 text-sm font-semibold text-rose-500">
                  Elegant visual language
                </div>
                <p className="leading-7 text-stone-600">
                  Richer imagery, stronger hierarchy, calmer whitespace and
                  product-level polish.
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-stone-100">
                <div className="mb-2 text-sm font-semibold text-sky-500">
                  Luxury + modern balance
                </div>
                <p className="leading-7 text-stone-600">
                  Warmth and emotion on one side, clarity and tech confidence on
                  the other.
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-stone-100">
                <div className="mb-2 text-sm font-semibold text-orange-500">
                  Built for international trust
                </div>
                <p className="leading-7 text-stone-600">
                  A visual tone that works for English, French and Spanish
                  audiences without feeling generic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEAD FORM */}
        <section
          id="lead-form"
          className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,250,247,0.98),rgba(248,250,252,0.96))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-stone-500 shadow-sm">
              Early access
            </div>
            <h2 className="text-3xl font-black md:text-4xl">
              {t.home.marketTitle}
            </h2>

            <p className="mt-4 text-lg leading-8 text-stone-600">
              {t.home.marketDescription}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-4"
          >
            <select
              name="track"
              defaultValue="traditional"
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-rose-400 focus:shadow-md"
            >
              <option value="traditional">{t.form.traditional}</option>
              <option value="secular">{t.form.secular}</option>
              <option value="mixed">{t.form.mixed}</option>
            </select>

            <input
              name="fullName"
              type="text"
              placeholder={t.form.namePlaceholder}
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-orange-400 focus:shadow-md"
            />

            <input
              name="email"
              type="email"
              placeholder={t.form.emailPlaceholder}
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:shadow-md"
            />

            <button
              type="submit"
              className="rounded-2xl bg-gradient-to-r from-rose-500 via-orange-400 to-sky-500 px-6 py-3 font-semibold text-white shadow-[0_14px_40px_rgba(251,146,60,0.25)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
            >
              {t.form.submit}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}