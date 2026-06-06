import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { intlContent, isSupportedLocale, type Locale } from "./site-data";
import { notFound } from "next/navigation";

function TrustBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#dccbbe] bg-white px-5 py-3 shadow-sm">
      <CheckCircle2 className="h-4 w-4 text-[#7a1737]" />
      <span className="text-base font-medium text-[#55463d]">{text}</span>
    </div>
  );
}

export default async function IntlHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content = intlContent[locale as Locale];

  return (
    <main className="bg-[#f6f1ea] text-left text-[#2f241f]">
      <section className="relative overflow-hidden border-b border-[#e2d4c8] bg-[linear-gradient(135deg,#f3ece4_0%,#e9ddd0_52%,#e4d6c8_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.65),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(122,23,55,0.09),transparent_22%),radial-gradient(circle_at_70%_70%,rgba(212,176,122,0.14),transparent_24%)]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 py-16 md:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e2d1c2] bg-white/90 px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#7a1737]" />
              <span className="text-base font-semibold tracking-[0.01em] text-[#5c4b41]">
                {content.badge}
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] text-[#2a1f1a] md:text-6xl lg:text-[68px]">
              {content.titleLine1}
              <span className="mt-2 block text-[#7a1737]">
                {content.titleLine2}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-10 text-[#57473e] md:text-[22px]">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}/register`}
                className="inline-flex items-center justify-center rounded-full bg-[#7a1737] px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(122,23,55,0.22)] transition hover:bg-[#65112d]"
              >
                {content.primaryCta}
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-[#d8cabd] bg-white/90 px-7 py-3.5 text-base font-semibold text-[#463932] transition hover:bg-[#fffdfa]"
              >
                {content.secondaryCta}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {content.trust.map((item) => (
                <TrustBadge key={item} text={item} />
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[640px]">
              <div className="relative overflow-hidden rounded-[34px] border border-[#e5d8cc] bg-white p-3 shadow-[0_28px_70px_rgba(56,38,28,0.12)]">
                <div className="relative min-h-[540px] overflow-hidden rounded-[28px]">
                  <Image
                    src="/images/hero-family.jpg"
                    alt="Warm family atmosphere"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,16,12,0.04),rgba(24,16,12,0.20))]" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/60 bg-white/92 p-5 shadow-xl backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7a1737] text-white">
                        <HeartHandshake className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-[#2e241f] md:text-2xl">
                          A safe place to begin
                        </h2>
                        <p className="mt-1 text-base leading-8 text-[#51433b] md:text-[17px]">
                          Less noise, more clarity, warmth, and trust.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                      {[
                        "Clear profile",
                        "Private process",
                        "Family-friendly approach",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-[#e3d6ca] bg-[#fffdfa] px-4 py-4 text-base font-medium text-[#54463d]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.24em] text-[#947966]">
            Simple and respectful
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-[#2f241f]">
            Start with confidence
          </h2>
          <p className="mt-4 font-body text-lg leading-8 text-[#625249]">
            A calm and thoughtful experience designed for meaningful long-term connections.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Create a profile",
              text: "Build a clear and respectful profile that presents what truly matters.",
              icon: <HeartHandshake className="h-6 w-6" />,
            },
            {
              title: "Explore matches",
              text: "Move through a calm and structured experience without unnecessary noise.",
              icon: <Sparkles className="h-6 w-6" />,
            },
            {
              title: "Stay private",
              text: "A private and respectful process designed to create trust from the beginning.",
              icon: <ShieldCheck className="h-6 w-6" />,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-[#e6d8cb] bg-white p-8 shadow-[0_14px_38px_rgba(61,42,32,0.06)]"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8eef1] text-[#7a1737]">
                {item.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#2f241f]">
                {item.title}
              </h3>
              <p className="mt-4 font-body text-base leading-8 text-[#625249]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}