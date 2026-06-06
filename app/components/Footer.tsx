import Link from "next/link";
import { Mail } from "lucide-react";
import BrandMark from "./BrandMark";

type FooterProps = {
  locale?: "he" | "en" | "fr" | "es";
};

export default function Footer({ locale = "he" }: FooterProps) {
  if (locale !== "he") {
    return null;
  }

  return (
    <footer className="border-t border-white/10 bg-[#101a30] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <BrandMark inverse />
            <p className="mt-5 max-w-md leading-8 text-white/65">
              יוזמה ישראלית חדשה לתהליך היכרות רציני, אישי ודיסקרטי. האתר
              נמצא בשלב הקמה ואיסוף מתעניינים.
            </p>
            <a
              href="mailto:info@keshermatch.co.il"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e2ad68] transition hover:text-white"
            >
              <Mail className="h-4 w-4" />
              info@keshermatch.co.il
            </a>
          </div>

          <div>
            <h3 className="font-extrabold">קישורים</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <Link href="/#tracks" className="hover:text-white">למי זה מתאים</Link>
              <Link href="/#how-it-works" className="hover:text-white">איך זה עובד</Link>
              <Link href="/#faq" className="hover:text-white">שאלות נפוצות</Link>
              <Link href="/#interest" className="hover:text-white">הצטרפות לרשימה</Link>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold">מידע ושקיפות</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <Link href="/privacy" className="hover:text-white">מדיניות פרטיות</Link>
              <Link href="/terms" className="hover:text-white">תנאי שימוש</Link>
              <a href="mailto:info@keshermatch.co.il" className="hover:text-white">יצירת קשר</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} קשר. כל הזכויות שמורות.</p>
          <p>נבנה בישראל, עבור קשרים משמעותיים.</p>
        </div>
      </div>
    </footer>
  );
}
