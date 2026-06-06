type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

export default function BrandMark({
  inverse = false,
  compact = false,
}: BrandMarkProps) {
  const textColor = inverse ? "#ffffff" : "#17233f";
  const tileColor = inverse ? "#ffffff" : "#17233f";
  const secondLinkColor = inverse ? "#17233f" : "#f5f7fb";
  const accent = "#d39a52";

  return (
    <div className="inline-flex items-center gap-4" aria-label="קשר - היכרות עם כוונה">
      <svg
        viewBox="0 0 64 64"
        className="h-14 w-14 shrink-0"
        role="img"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="18" fill={tileColor} />
        <path
          d="M28.5 22.5 23 17a11 11 0 0 0-15.5 15.5l9 9A11 11 0 0 0 32 26l-3.5-3.5"
          fill="none"
          stroke={accent}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m35.5 41.5 5.5 5.5a11 11 0 0 0 15.5-15.5l-9-9A11 11 0 0 0 32 38l3.5 3.5"
          fill="none"
          stroke={secondLinkColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {!compact && (
        <div className="min-w-[126px]">
          <div
            className="font-heading text-[2.35rem] font-black leading-[0.85] tracking-[-0.045em]"
            style={{ color: textColor }}
          >
            קשר
          </div>
          <div
            className="font-body mt-2.5 whitespace-nowrap text-[0.95rem] font-extrabold leading-none tracking-normal"
            style={{ color: inverse ? "#f1c787" : "#8f2945" }}
          >
            היכרות עם כוונה
          </div>
        </div>
      )}
    </div>
  );
}
