import Link from "next/link";
import * as React from "react";

type SecondaryLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function SecondaryLink({ href, children }: SecondaryLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-white/85 px-7 py-3.5 text-base font-semibold text-stone-900 ring-1 ring-stone-200 shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-white"
    >
      {children}
    </Link>
  );
}