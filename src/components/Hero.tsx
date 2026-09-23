import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedResumeButton from "@/components/AnimatedResumeButton";
import {
  PROFILE_HREF,
  LINKEDIN_HREF,
  GITHUB_HREF,
  ORGMITRA_HREF,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  ROLE_TITLE,
  ROLE_FOCUS,
} from "@/lib/site";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] min-h-screen pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-10 overflow-x-clip"
    >
      <div className="absolute inset-0 bg-atmosphere -z-20" aria-hidden />
      <div className="absolute inset-0 bg-grid-fade -z-10 opacity-70" aria-hidden />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-accent/20 blur-3xl -z-10"
        animate={{ y: [0, 18, 0], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[12%] left-[-6%] h-80 w-80 rounded-full bg-[hsl(200_80%_50%/0.12)] blur-3xl -z-10"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-full py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          {/* Profile first on mobile so it always shows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-none order-1 lg:order-2"
          >
            <div className="relative aspect-square sm:aspect-[4/5] w-full max-h-[420px] mx-auto">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-gradient-accent opacity-35 blur-2xl animate-pulse-soft"
              />
              <div
                aria-hidden
                className="absolute -right-3 top-6 h-20 w-20 rounded-2xl border border-accent/30 bg-accent/5 backdrop-blur-sm animate-float hidden sm:block"
              />

              <img
                src={PROFILE_HREF}
                alt={`${ROLE_TITLE} — Nagendra Lankalapalli`}
                width={640}
                height={800}
                decoding="async"
                fetchPriority="high"
                className="relative z-10 h-full w-full object-cover object-[center_15%] rounded-[1.75rem] shadow-xl ring-1 ring-border/60 bg-card"
              />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute z-20 bottom-3 left-3 right-3 sm:left-5 sm:right-5 flex items-center gap-3 rounded-2xl bg-background/92 backdrop-blur-md border border-border/80 px-3.5 py-2.5 shadow-lg"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-display font-semibold text-sm truncate">Product Engineer</p>
                  <p className="text-xs text-muted-foreground truncate">Intellect · PSH @ CIBC</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={LINKEDIN_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={GITHUB_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="space-y-6 sm:space-y-7 min-w-0 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-accent"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" />
                <span className="relative rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              Open to full-time · hybrid · relocation
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="space-y-3"
            >
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                LNS · Portfolio
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[0.98] tracking-tight">
                <span className="block text-foreground">Nagendra</span>
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Lankalapalli
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/85 font-medium font-display tracking-tight">
                {ROLE_TITLE}
              </p>
              <p className="text-sm sm:text-base text-accent font-medium">{ROLE_FOCUS}</p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
                4+ years shipping Java + React products—enterprise payments at CIBC (PSH) and my own
                multi-sector HRMS SaaS,{" "}
                <a
                  href={ORGMITRA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold underline-offset-4 hover:underline"
                >
                  OrgMitraHQ
                </a>
                .
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto bg-gradient-accent hover:shadow-glow transition-all duration-300 touch-manipulation min-h-11"
              >
                View selected work
              </Button>
              <AnimatedResumeButton className="w-full sm:w-auto" />
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full sm:w-auto min-h-11 touch-manipulation"
              >
                <a href={ORGMITRA_HREF} target="_blank" rel="noopener noreferrer">
                  OrgMitraHQ
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground pt-1"
            >
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors min-w-0"
              >
                <Mail size={16} className="shrink-0 text-accent" />
                <span className="break-all">{EMAIL}</span>
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone size={16} className="shrink-0 text-accent" />
                {PHONE_DISPLAY}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-accent" />
                Hyderabad, India
              </span>
            </motion.div>
          </div>
        </div>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="mx-auto mt-10 sm:mt-14 flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          aria-label="Scroll to about"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Explore
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
