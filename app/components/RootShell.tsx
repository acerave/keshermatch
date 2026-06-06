"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isInternational =
    pathname.startsWith("/en") ||
    pathname.startsWith("/fr") ||
    pathname.startsWith("/es");

  if (isInternational) {
    return <>{children}</>;
  }

  return (
    <>
      <Header locale="he" />
      {children}
      <Footer locale="he" />
    </>
  );
}