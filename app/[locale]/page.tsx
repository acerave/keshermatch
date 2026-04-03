import IntlHomePage from "@/app/components/i18n/IntlHomePage";
import IsraelHomePage from "@/app/page";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const normalizedLocale = locale?.toLowerCase();

  if (normalizedLocale === "he" || normalizedLocale === "iw") {
    return <IsraelHomePage />;
  }

  if (
    normalizedLocale === "en" ||
    normalizedLocale === "fr" ||
    normalizedLocale === "es"
  ) {
    return <IntlHomePage locale={normalizedLocale as any} />;
  }

  return <IsraelHomePage />;
}