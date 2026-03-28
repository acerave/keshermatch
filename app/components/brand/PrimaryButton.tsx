import * as React from "react";

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function PrimaryButton({ children, className = "", ...props }: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-sky-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_rgba(251,146,60,0.25)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:opacity-95 ${className}`}
    >
      {children}
    </button>
  );
}