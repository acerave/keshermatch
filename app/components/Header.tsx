"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import BrandMark from "./BrandMark";

type HeaderProps = {
  locale?: "he" | "en" | "fr" | "es";
};

export default function Header({ locale = "he" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHebrew = locale === "he";

  if (!isHebrew) {
    return null;
  }

  const navItems = [
    { href: "/#tracks", label: "למי זה מתאים" },
    { href: "/#how-it-works", label: "איך זה עובד" },
    { href: "/#faq", label: "שאלות נפוצות" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe3eb] bg-white/95 shadow-[0_8px_30px_rgba(19,34,63,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[94px] max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
        <Link href="/" aria-label="קשר - דף הבית" className="shrink-0">
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="ניווט ראשי">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-bold text-[#4f5970] transition hover:text-[#a53b55]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#interest"
          className="hidden rounded-full bg-[#a53b55] px-6 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(165,59,85,0.25)] transition hover:-translate-y-0.5 hover:bg-[#8b2d47] md:inline-flex"
        >
          הצטרפות לרשימה
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex rounded-xl border border-[#dfe3eb] bg-white p-2.5 text-[#17233f] md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "סגירת תפריט" : "פתיחת תפריט"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-[#e6e9ef] bg-white px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 font-bold text-[#4f5970] hover:bg-[#f3f5f9]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#interest"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-full bg-[#a53b55] px-5 py-3 text-center font-extrabold text-white"
            >
              הצטרפות לרשימת המתעניינים
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
