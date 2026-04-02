import * as React from "react";
import { Heart, Sparkles, Users } from "lucide-react";

type AnimatedLogoProps = {
  showText?: boolean;
  tagline?: string;
};

export function KesherAnimatedLogo({
  showText = true,
  tagline = "Love. Family. Smart Connection.",
}: AnimatedLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-16 w-16 shrink-0">
        <div className="absolute inset-0 rounded-full border-2 border-orange-300/70 animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-2 rounded-full border border-rose-300/70 animate-[spin_7s_linear_infinite_reverse]" />
        <div className="absolute inset-0 rounded-[1.4rem] bg-gradient-to-br from-rose-500 via-orange-400 to-sky-500 shadow-[0_14px_40px_rgba(251,146,60,0.35)]" />
        <div className="absolute inset-[6px] rounded-[1.1rem] bg-white/20 backdrop-blur-sm" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <Heart className="h-7 w-7 fill-white text-white" />
            <Users className="absolute -bottom-4 h-5 w-5 text-white" />
            <Sparkles className="absolute -top-4 -right-4 h-4 w-4 text-white" />
          </div>
        </div>
      </div>

      {showText ? (
        <div>
          <div className="text-2xl font-black tracking-tight text-stone-900">
            KesherMatch
          </div>
          <div className="text-sm font-medium text-stone-500">
            {tagline}
          </div>
        </div>
      ) : null}
    </div>
  );
}