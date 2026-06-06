import type { Metadata } from "next";
import { Assistant, Rubik } from "next/font/google";
import RootShell from "./components/RootShell";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-assistant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keshermatch.co.il"),
  title: {
    default: "קשר | היכרות רצינית בדרך אישית ומשפחתית",
    template: "%s | קשר",
  },
  description:
    "קשר היא יוזמה ישראלית חדשה לתהליך היכרות רציני, אישי ודיסקרטי. הצטרפו לרשימת המתעניינים לקראת ההשקה.",
  applicationName: "קשר",
  keywords: ["היכרויות", "זוגיות רצינית", "שידוכים", "היכרות למשפחות"],
  openGraph: {
    title: "קשר | היכרות רצינית מתחילה בקשר אנושי",
    description:
      "יוזמה ישראלית חדשה לתהליך היכרות אישי, משפחתי ודיסקרטי.",
    url: "https://keshermatch.co.il",
    siteName: "קשר",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/images/israel-hero-family.jpg",
        width: 805,
        height: 523,
        alt: "קשר - היכרות רצינית בדרך אישית ומשפחתית",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "קשר | היכרות רצינית מתחילה בקשר אנושי",
    description: "יוזמה ישראלית חדשה לתהליך היכרות אישי ומשפחתי.",
    images: ["/images/israel-hero-family.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} ${assistant.variable} antialiased`}>
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
