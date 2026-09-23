import { cn } from "@/lib/utils";

type LnsLogoProps = {
  className?: string;
  showWordmark?: boolean;
};

/** Professional LNS brand mark (matches logo Option A). */
const LnsLogo = ({ className, showWordmark = false }: LnsLogoProps) => {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 sm:h-11 sm:w-11 drop-shadow-sm"
        role="img"
        aria-label="LNS logo"
      >
        <defs>
          <linearGradient id="lnsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="url(#lnsGrad)" />
        <rect x="4" y="4" width="56" height="56" rx="13" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fill="white"
          fontFamily="Space Grotesk, system-ui, sans-serif"
          fontWeight="700"
          fontSize="20"
          letterSpacing="-0.5"
        >
          LNS
        </text>
      </svg>
      {showWordmark && (
        <span className="font-display font-semibold text-base text-foreground tracking-tight hidden sm:block">
          Nagendra Lankalapalli
        </span>
      )}
    </span>
  );
};

export default LnsLogo;
