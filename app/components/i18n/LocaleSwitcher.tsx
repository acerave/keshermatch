"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, localeLabels, supportedLocales } from "../../[locale]/site-data";

type Props = {
  currentLocale: Locale;
};

export default function LocaleSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();

  const pathWithoutLocale = pathname.replace(/^\/(en|fr|es)/, "") || "/";

  return (
    <div className="flex items-center gap-2">
      {supportedLocales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
          className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
            currentLocale === locale
              ? "bg-stone-900 text-white"
              : "border border-stone-300 text-stone-700 hover:bg-stone-50"
          }`}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  );
}