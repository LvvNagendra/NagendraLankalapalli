import { LOGO_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

type LnsLogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

/** Professional LNS brand mark — replace public/lns-logo.png to update. */
const LnsLogo = ({ className, showWordmark = false, size = "md" }: LnsLogoProps) => {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={LOGO_HREF}
        alt="LNS"
        width={88}
        height={88}
        className={cn(
          sizes[size],
          "rounded-xl object-contain bg-white shadow-sm ring-1 ring-border/50"
        )}
        decoding="async"
      />
      {showWordmark && (
        <span className="font-display font-semibold text-base text-foreground tracking-tight hidden sm:block">
          Nagendra Lankalapalli
        </span>
      )}
    </span>
  );
};

export default LnsLogo;
