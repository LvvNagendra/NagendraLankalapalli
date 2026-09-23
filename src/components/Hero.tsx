import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import {
  RESUME_HREF,
  RESUME_DOWNLOAD_NAME,
  LINKEDIN_HREF,
  GITHUB_HREF,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] min-h-screen pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-10 overflow-x-clip"
    >
      <div className="absolute inset-0 bg-atmosphere -z-20" aria-hidden />
      <div className="absolute inset-0 bg-grid-fade -z-10 opacity-70" aria-hidden />

      {/* Graphic orbs */}
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
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-[18%] h-40 w-40 rounded-full border border-accent/20 animate-spin-slow -z-10 hidden md:block"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-full py-10 sm:py-14 md:py-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-7 sm:space-y-8 min-w-0">
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
              className="space-y-4"
            >
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold leading-[0.95] tracking-tight">
                <span className="block text-foreground">Nagendra</span>
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Lankalapalli
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-medium font-display tracking-tight">
                Java Backend Engineer
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
                4+ years building payments and BFSI microservices—Spring Boot, Kafka, and
                PostgreSQL on Intellect&apos;s Payment Service Hub for CIBC.
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
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 touch-manipulation min-h-11"
              >
                <a href={RESUME_HREF} download={RESUME_DOWNLOAD_NAME}>
                  <Download className="mr-2 h-5 w-5" />
                  Download resume
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

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/6] w-full max-h-[min(72vh,560px)] mx-auto">
              <div
                aria-hidden
                className="absolute -inset-3 sm:-inset-4 rounded-[2rem] bg-gradient-accent opacity-30 blur-2xl animate-pulse-soft"
              />
              <div
                aria-hidden
                className="absolute -right-4 top-8 h-24 w-24 rounded-2xl border border-accent/30 bg-accent/5 backdrop-blur-sm animate-float hidden sm:block"
              />
              <div
                aria-hidden
                className="absolute -left-3 bottom-16 h-16 w-16 rounded-full border border-foreground/10 bg-background/60 backdrop-blur-sm animate-float hidden sm:block"
                style={{ animationDelay: "1.2s" }}
              />

              <img
                src={profilePhoto}
                alt="Nagendra Lankalapalli — Java Backend Engineer"
                className="relative z-10 h-full w-full object-cover object-top rounded-[1.75rem] shadow-xl ring-1 ring-border/60 bg-card"
              />

              <div className="absolute z-20 bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6 flex items-center gap-3 rounded-2xl bg-background/90 backdrop-blur-md border border-border/80 px-4 py-3 shadow-lg">
                <div className="min-w-0">
                  <p className="font-display font-semibold text-sm sm:text-base truncate">
                    Product Engineer
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    Intellect · PSH @ CIBC
                  </p>
                </div>
                <div className="ml-auto flex gap-2 shrink-0">
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
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="mx-auto mt-12 sm:mt-16 flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
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
