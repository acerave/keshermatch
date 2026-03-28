import * as React from "react";

type KesherLogoProps = {
  size?: number;
  showText?: boolean;
  textColorClassName?: string;
  tagline?: string;
};

export default function KesherLogo({
  size = 54,
  showText = true,
  textColorClassName = "text-stone-900",
  tagline = "Smart matchmaking with heart, family and progress",
}: KesherLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_10px_25px_rgba(251,146,60,0.25)]"
        aria-label="KesherMatch logo"
        role="img"
      >
        <defs>
          <linearGradient id="km-gradient-main" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F43F5E" />
            <stop offset="0.45" stopColor="#FB923C" />
            <stop offset="1" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="km-gradient-soft" x1="16" y1="14" x2="48" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF1F2" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        <rect x="6" y="6" width="52" height="52" rx="18" fill="url(#km-gradient-main)" />
        <rect x="10" y="10" width="44" height="44" rx="15" fill="url(#km-gradient-soft)" fillOpacity="0.14" />

        <path
          d="M22 23C22 20.7909 23.7909 19 26 19C28.0801 19 29.7883 20.5878 29.9787 22.6173C30.1691 20.5878 31.8773 19 33.9574 19C36.1665 19 37.9574 20.7909 37.9574 23C37.9574 30.4 29.9787 35.5 29.9787 35.5C29.9787 35.5 22 30.4 22 23Z"
          fill="white"
          fillOpacity="0.96"
        />

        <path
          d="M18 39C20.2 35.8 23.6 34 27.4 34H32.6C36.4 34 39.8 35.8 42 39"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        <path
          d="M24.5 42.5C27.5 45.2 32.3 45.2 35.3 42.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle cx="46.5" cy="18.5" r="4.5" fill="#FFFFFF" fillOpacity="0.95" />
        <path d="M46.5 15.5V21.5M43.5 18.5H49.5" stroke="#F97316" strokeWidth="2.3" strokeLinecap="round" />
      </svg>

      {showText ? (
        <div>
          <div className={`text-xl font-black tracking-tight ${textColorClassName}`}>KesherMatch</div>
          <div className="text-xs font-medium text-stone-500">{tagline}</div>
        </div>
      ) : null}
    </div>
  );
}