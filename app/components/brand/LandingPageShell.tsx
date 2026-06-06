import { LucideIcon } from "lucide-react";
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
    <main
      dir="rtl"
      className="min-h-screen bg-[#f6f1ea] text-right text-[#2f241f]"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
        <section
          className={`relative overflow-hidden rounded-[3rem] border border-[#e6d8cb] bg-gradient-to-br ${heroGradient} p-8 shadow-[0_28px_70px_rgba(61,42,32,0.08)] md:p-14 lg:p-16`}
        >
          <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-white/45 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#d9b98c]/25 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-[#e2d1c2] bg-white/90 px-5 py-2.5 text-base font-bold text-[#5c4b41] shadow-sm">
                {badge}
              </div>

              <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.12] text-[#2a1f1a] md:text-5xl lg:text-6xl">
                <span
                  className={`bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}
                >
                  {title}
                </span>
              </h1>

              <p className="mt-6 max-w-3xl font-body text-xl leading-10 text-[#57473e]">
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

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {columns.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-[#e6d8cb] bg-white p-7 shadow-[0_14px_38px_rgba(61,42,32,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(61,42,32,0.10)]"
            >
              <h3 className="font-heading text-2xl font-bold text-[#2f241f]">
                {item.title}
              </h3>
              <p className="mt-4 font-body text-base leading-8 text-[#625249]">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#e6d8cb] bg-white p-8 shadow-[0_18px_50px_rgba(61,42,32,0.06)] md:p-10">
          <h2 className="font-heading text-3xl font-extrabold text-[#2f241f] md:text-4xl">
            שאלות נפוצות
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-[1.5rem] border border-[#e6d8cb] bg-[#fcf8f4] p-6 transition hover:bg-white"
              >
                <summary className="cursor-pointer font-heading text-xl font-bold text-[#2f241f]">
                  {item.q}
                </summary>
                <p className="mt-4 font-body text-base leading-8 text-[#625249]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}