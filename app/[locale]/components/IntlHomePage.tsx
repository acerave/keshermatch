"use client";

import Link from "next/link";
import { Locale, getMessages } from "../site-data";
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

export function validateIntlLeadForm(values: { fullName?: string; email?: string; track?: string }, locale: Locale) {
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

  const trackLabel = t.tracks[track as "traditional" | "secular" | "mixed"].label;
  return {
    ok: true,
    message: t.validation.success
      .replace("{name}", fullName)
      .replace("{track}", trackLabel)
      .replace("{email}", email),
  };
}

export const validationTests = [
  {
    name: "valid en lead",
    input: { fullName: "John Doe", email: "john@example.com", track: "traditional" },
    locale: "en",
    expected: { ok: true },
  },
  {
    name: "missing email fr",
    input: { fullName: "Jean Dupont", email: "", track: "mixed" },
    locale: "fr",
    expected: { ok: false, message: "Veuillez saisir votre adresse e-mail." },
  },
  {
    name: "invalid email es",
    input: { fullName: "Juan Pérez", email: "bad-email", track: "secular" },
    locale: "es",
    expected: { ok: false, message: "Por favor ingresa un correo electrónico válido." },
  },
];

function BrandLogo({ tagline }: { tagline: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 via-orange-400 to-sky-500 text-lg font-black text-white shadow-lg">
        K
      </div>
      <div>
        <div className="text-xl font-extrabold tracking-tight text-stone-900">KesherMatch</div>
        <div className="text-xs font-medium text-stone-500">{tagline}</div>
      </div>
    </div>
  );
}

function LeadForm({ locale }: { locale: Locale }) {
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
      locale,
    );

    if (!result.ok) {
      window.alert(result.message);
      return;
    }

    window.alert(result.message);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl space-y-4 rounded-[2rem] bg-white p-6 shadow-xl shadow-stone-200 md:p-8">
      <div>
        <label htmlFor="track" className="mb-2 block text-sm font-medium text-stone-700">
          {t.form.preferredTrack}
        </label>
        <select
          id="track"
          name="track"
          defaultValue="traditional"
          className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900"
        >
          <option value="traditional">{t.form.traditional}</option>
          <option value="secular">{t.form.secular}</option>
          <option value="mixed">{t.form.mixed}</option>
        </select>
      </div>
      <div>
        <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-stone-700">
          {t.form.fullName}
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder={t.form.namePlaceholder}
          className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-700">
          {t.form.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={t.form.emailPlaceholder}
          className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900"
        />
      </div>
      <button type="submit" className="w-full rounded-full bg-stone-900 px-6 py-3 text-base font-semibold text-white transition hover:opacity-90">
        {t.form.submit}
      </button>
    </form>
  );
}

export default function IntlHomePage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <div dir={t.direction} className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-100 text-stone-900">
      <header className="sticky top-0 z-20 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <BrandLogo tagline={t.brandTagline} />
          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
              <Link href={`/${locale}/traditional`} className="transition hover:text-orange-600">{t.nav.traditional}</Link>
              <Link href={`/${locale}/secular`} className="transition hover:text-sky-600">{t.nav.secular}</Link>
              <Link href={`/${locale}/mixed`} className="transition hover:text-rose-600">{t.nav.mixed}</Link>
            </nav>
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <section className="mb-12 text-center md:mb-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
              {t.home.badge}
            </div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              {t.home.title1}
              <span className="block bg-gradient-to-r from-orange-500 via-rose-500 to-sky-500 bg-clip-text text-transparent">
                {t.home.title2}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600 md:text-xl">
              {t.home.description}
            </p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {(["traditional", "secular", "mixed"] as const).map((key) => {
            const page = t.tracks[key];
            const style = pageStyles[key];
            return (
              <div key={key} className={`rounded-[2rem] bg-gradient-to-br ${style.gradient} p-6 shadow-lg shadow-stone-200/50`}>
                <div className="mb-4 inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
                  {page.badge}
                </div>
                <h3 className="text-2xl font-black leading-tight text-stone-900 md:text-3xl">{page.title}</h3>
                <p className="mt-4 leading-8 text-stone-700">{page.description}</p>
                <div className="mt-5 space-y-3">
                  {page.highlights.map((highlight: string, index: number) => (
                    <div key={highlight} className={`rounded-2xl bg-gradient-to-br ${style.card} p-4 shadow-sm ring-1 ring-white/70`}>
                      <div className={`mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r ${style.button} text-sm font-bold text-white`}>
                        {index + 1}
                      </div>
                      <p className="font-medium text-stone-800">{highlight}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/${locale}/${style.href}`}
                  className={`mt-6 inline-flex rounded-full bg-gradient-to-r ${style.button} px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:opacity-95`}
                >
                  {page.button}
                </Link>
              </div>
            );
          })}
        </section>

        <section id="lead-form" className="py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black md:text-5xl">{t.home.marketTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">{t.home.marketDescription}</p>
          </div>
          <LeadForm locale={locale} />
        </section>
      </main>
    </div>
  );
}
