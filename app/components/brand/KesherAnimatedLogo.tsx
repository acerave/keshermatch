"use client";

import { Heart, Users } from "lucide-react";

type Props = {
  tagline?: string;
};

export function KesherAnimatedLogo({
  tagline = "Love. Family. Smart Match",
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-16 w-16">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-500 via-orange-400 to-sky-500 blur-xl opacity-60 animate-pulse" />

        {/* Orbit ring */}
        <div
          className="absolute inset-0 rounded-full border border-white/40"
          style={{ animation: "spin 6s linear infinite" }}
        />

        {/* Core */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-rose-500 via-orange-400 to-sky-500 shadow-lg flex items-center justify-center">
          <Heart className="text-white w-6 h-6" />
        </div>

        {/* Orbit element */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{ animation: "spin 4s linear infinite reverse" }}
        >
          <Users className="text-white w-4 h-4" />
        </div>
      </div>

      <div>
        <div className="text-2xl font-black">KesherMatch</div>
        <div className="text-sm text-gray-500">{tagline}</div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg) translateX(0);
          }
          to {
            transform: rotate(360deg) translateX(0);
          }
        }
      `}</style>
    </div>
  );
}