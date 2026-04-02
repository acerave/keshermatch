"use client";

import Link from "next/link";
import { Locale, getMessages } from "../../[locale]/site-data";
import { KesherAnimatedLogo } from "../brand/KesherAnimatedLogo";
import LocaleSwitcher from "./LocaleSwitcher";

const pageStyles = {
  traditional: {
    href: "traditional",
    gradient: "from-amber-50 via-orange-50 to-rose-50",
    button: "from-orange-500 to-rose-500",
    card: "from-orange-50 to-white",
  },
  secular: {
    href: "secular",
    gradient: "from-sky-50 via-white to-violet-50",
    button: "from-sky-500 to-violet-500",
    card: "from-sky-50 to-white",
  },
  mixed: {
    href: "mixed",
    gradient: "from-rose-50 via-white to-sky-50",
    button: "from-rose-500 via-orange-400 to-sky-500",
    card: "from-rose-50 to-white",
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
      className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.16),_transparent_24%),radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_20%),linear-gradient(to_bottom,_#fffaf7,_#ffffff,_#f8fafc)] text-stone-900"
    >
      <header className="sticky top-0 z-20 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`}>
            <KesherAnimatedLogo tagline="Love. Family. Smart Connection." />
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
              <Link
                href={`/${locale}/traditional`}
                className="transition hover:text-orange-600"
              >
                {t.nav.traditional}
              </Link>
              <Link
                href={`/${locale}/secular`}
                className="transition hover:text-sky-600"
              >
                {t.nav.secular}
              </Link>
              <Link
                href={`/${locale}/mixed`}
                className="transition hover:text-rose-600"
              >
                {t.nav.mixed}
              </Link>
            </nav>

            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-rose-100 via-orange-50 to-sky-100 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.10)] md:p-14">
          <div className="absolute -left-8 top-10 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
                {t.home.badge}
              </div>

              <h1 className="text-5xl font-black leading-[1.03] md:text-7xl">
                {t.home.title1}
                <span className="block bg-gradient-to-r from-rose-500 via-orange-500 to-sky-500 bg-clip-text text-transparent">
                  {t.home.title2}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
                {t.home.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("lead-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_40px_rgba(251,146,60,0.3)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  {t.nav.earlyAccess}
                </button>

                <a
                  href="#tracks"
                  className="rounded-full bg-white/90 px-8 py-4 text-lg font-semibold text-stone-900 ring-1 ring-stone-200 shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  {t.home.marketTitle}
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {(["traditional", "secular", "mixed"] as const).map((key) => {
                const page = t.tracks[key];
                const style = pageStyles[key];

                return (
                  <div
                    key={key}
                    className={`group rounded-[1.75rem] bg-gradient-to-br ${style.gradient} p-6 shadow-lg ring-1 ring-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                  >
                    <div
                      className={`mb-4 inline-flex rounded-full bg-gradient-to-r ${style.button} px-4 py-2 text-sm font-semibold text-white shadow-sm`}
                    >
                      {page.badge}
                    </div>

                    <h3 className="text-xl font-bold text-stone-900">
                      {page.title}
                    </h3>

                    <p className="mt-2 leading-8 text-stone-600">
                      {page.description}
                    </p>

                    <Link
                      href={`/${locale}/${style.href}`}
                      className={`mt-5 inline-flex rounded-full bg-gradient-to-r ${style.button} px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5`}
                    >
                      {page.button}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="tracks" className="mt-12 grid gap-6 md:grid-cols-3">
          {(["traditional", "secular", "mixed"] as const).map((key) => {
            const page = t.tracks[key];
            return (
              <div
                key={key}
                className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-stone-900">
                  {page.label}
                </h3>
                <p className="mt-3 leading-8 text-stone-600">
                  {page.description}
                </p>
              </div>
            );
          })}
        </section>

        <section
          id="lead-form"
          className="mt-12 rounded-[2rem] border border-white/80 bg-white/85 p-8 shadow-lg"
        >
          <h2 className="text-2xl font-black text-stone-900 md:text-3xl">
            {t.home.marketTitle}
          </h2>

          <p className="mt-3 max-w-2xl leading-8 text-stone-600">
            {t.home.marketDescription}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid gap-4 md:grid-cols-3"
          >
            <select
              name="track"
              defaultValue="traditional"
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-rose-400"
            >
              <option value="traditional">{t.form.traditional}</option>
              <option value="secular">{t.form.secular}</option>
              <option value="mixed">{t.form.mixed}</option>
            </select>

            <input
              name="fullName"
              type="text"
              placeholder={t.form.namePlaceholder}
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-orange-400"
            />

            <input
              name="email"
              type="email"
              placeholder={t.form.emailPlaceholder}
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400"
            />

            <button
              type="submit"
              className="md:col-span-3 rounded-2xl bg-gradient-to-r from-rose-500 via-orange-400 to-sky-500 px-6 py-3 font-semibold text-white shadow-[0_14px_40px_rgba(251,146,60,0.25)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
            >
              {t.form.submit}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}