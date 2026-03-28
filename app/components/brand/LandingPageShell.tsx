import Link from "next/link";
import { LucideIcon } from "lucide-react";
import KesherLogo from "./KesherLogo";
import PrimaryButton from "./PrimaryButton";
import FeatureCard from "./FeatureCard";

type LandingFeature = {
  title: string;
  text: string;
  icon: LucideIcon;
  accentClassName?: string;
};

type LandingPageShellProps = {
  active: "traditional" | "secular" | "mixed";
  badge: string;
  title: string;
  titleGradient: string;
  description: string;
  heroGradient: string;
  ctaText: string;
  ctaGradient: string;
  features: LandingFeature[];
  columns: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export default function LandingPageShell({
  active,
  badge,
  title,
  titleGradient,
  description,
  heroGradient,
  ctaText,
  ctaGradient,
  features,
  columns,
  faqs,
}: LandingPageShellProps) {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(251,146,60,0.12),_transparent_28%),radial-gradient(circle_at_top_left,_rgba(14,165,233,0.10),_transparent_25%),linear-gradient(to_bottom,_#fffaf7,_#ffffff,_#f8fafc)] text-stone-900"
    >
      <header className="sticky top-0 z-30 border-b border-white/70 bg-white/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/">
            <KesherLogo tagline="Heart, connection, family, progress" />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link
              href="/traditional"
              className={
                active === "traditional"
                  ? "text-orange-600"
                  : "transition hover:text-orange-600"
              }
            >
              מסורתיים
            </Link>

            <Link
              href="/secular"
              className={
                active === "secular"
                  ? "text-sky-600"
                  : "transition hover:text-sky-600"
              }
            >
              חילוניים
            </Link>

            <Link
              href="/mixed"
              className={
                active === "mixed"
                  ? "text-rose-600"
                  : "transition hover:text-rose-600"
              }
            >
              מעורב
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <section
          className={`relative overflow-hidden rounded-[3rem] border border-white/80 bg-gradient-to-br ${heroGradient} p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:p-16`}
        >
          <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/35 blur-3xl" />

          <div className="relative grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
                {badge}
              </div>

              <h1 className="text-5xl font-black leading-[1.05] md:text-7xl">
                <span
                  className={`bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}
                >
                  {title}
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700 md:text-xl">
                {description}
              </p>

              <div className="mt-8">
                <PrimaryButton className={`bg-gradient-to-r ${ctaGradient}`}>
                  {ctaText}
                </PrimaryButton>
              </div>
            </div>

            <div className="grid gap-4">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  text={feature.text}
                  accentClassName={feature.accentClassName}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {columns.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] bg-white/85 p-6 shadow-lg shadow-stone-200/60 ring-1 ring-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-stone-900">{item.title}</h3>
              <p className="mt-3 leading-8 text-stone-600">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-[2rem] bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] ring-1 ring-stone-100 md:p-10">
          <h2 className="text-3xl font-black md:text-4xl">שאלות נפוצות</h2>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6 transition hover:bg-white"
              >
                <summary className="cursor-pointer text-lg font-bold text-stone-800">
                  {item.q}
                </summary>
                <p className="mt-4 leading-8 text-stone-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}