"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, supportedLocales } from "../../[locale]/site-data";

const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
};

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(/^\/(en|fr|es)(?=\/|$)/, "") || "/";

  return (
    <div className="flex items-center gap-2">
      {supportedLocales.map((item) => {
        const href = `/${item}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={href}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              isActive
                ? "bg-stone-900 text-white"
                : "bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-stone-50"
            }`}
          >
            {localeLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}
