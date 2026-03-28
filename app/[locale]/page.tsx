import IntlHomePage from "./components/IntlHomePage";
import { getMessages, isSupportedLocale, supportedLocales } from "./site-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <IntlHomePage locale={locale} />;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getMessages(locale);

  return {
    title: `KesherMatch - ${t.brandTagline}`,
    description: t.home.description,
  };
}
