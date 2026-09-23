import { Linkedin, Github, Mail, Phone } from "lucide-react";
import LnsLogo from "@/components/LnsLogo";
import { LINKEDIN_HREF, GITHUB_HREF, EMAIL, PHONE_HREF, ROLE_TITLE } from "@/lib/site";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary text-primary-foreground py-10 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(174_72%_36%/0.2),transparent_55%)]"
      />
      <div className="container mx-auto px-4 sm:px-6 max-w-full relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <LnsLogo size="sm" />
            <p className="font-display font-semibold tracking-tight">Nagendra Lankalapalli</p>
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} · {ROLE_TITLE}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKEDIN_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 min-w-11 rounded-xl bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-105 touch-manipulation"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={GITHUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 min-w-11 rounded-xl bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-105 touch-manipulation"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="min-h-11 min-w-11 rounded-xl bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-105 touch-manipulation"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={PHONE_HREF}
              className="min-h-11 min-w-11 rounded-xl bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-105 touch-manipulation"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
