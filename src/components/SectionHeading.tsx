import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
};

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) => {
  return (
    <Reveal className={cn("mb-12 md:mb-16 max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
