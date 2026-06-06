import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { isSupportedLocale, type Locale } from "./site-data";

export const metadata: Metadata = {
  title: "KesherMatch",
  description: "Matchmaking for parents and families",
};

export default async function IntlLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <div lang={locale} dir="ltr">
      <Header locale={locale as Locale} />
      {children}
      <Footer locale={locale as Locale} />
    </div>
  );
}