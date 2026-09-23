import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_HREF, RESUME_DOWNLOAD_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

type AnimatedResumeButtonProps = {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "outline" | "default" | "secondary";
  label?: string;
};

const AnimatedResumeButton = ({
  className,
  size = "lg",
  variant = "outline",
  label = "Download resume",
}: AnimatedResumeButtonProps) => {
  return (
    <Button
      size={size}
      variant={variant}
      asChild
      className={cn(
        "group relative overflow-hidden border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 touch-manipulation min-h-11",
        className
      )}
    >
      <a href={RESUME_HREF} download={RESUME_DOWNLOAD_NAME}>
        <motion.span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/15 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
        />
        <motion.span
          className="relative mr-2 inline-flex"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Download className="h-5 w-5" />
        </motion.span>
        <span className="relative">{label}</span>
      </a>
    </Button>
  );
};

export default AnimatedResumeButton;
