import Link from "next/link";
import { KesherAnimatedLogo } from "../../components/brand/KesherAnimatedLogo";
import LocaleSwitcher from "../../components/i18n/LocaleSwitcher";
import { getMessages, isSupportedLocale, supportedLocales } from "../site-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function MixedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const t = getMessages(locale);
  const page = t.tracks.mixed;

  return (
    <div dir={t.direction} className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-sky-50 text-stone-900">
      <header className="border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight text-stone-900">
            KesherMatch
          </Link>
          <LocaleSwitcher locale={locale} />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-4 inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
          {page.badge}
        </div>
        <h1 className="text-4xl font-black leading-tight md:text-6xl">{page.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700 md:text-xl">{page.description}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {page.highlights.map((item: string) => (
            <div key={item} className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-white/70">
              <p className="font-medium text-stone-800">{item}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
