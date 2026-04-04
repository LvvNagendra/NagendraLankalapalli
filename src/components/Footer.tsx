import { Linkedin, Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 pb-[max(2rem,env(safe-area-inset-bottom,0px))]">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm text-balance max-w-prose">
            © {currentYear} Nagendra Lankalapalli. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/nagendra-lankalapalli-6a7457236/"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 min-w-11 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/LvvNagendra"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 min-w-11 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:lvvnagendra99@gmail.com"
              className="min-h-11 min-w-11 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+918897590280"
              className="min-h-11 min-w-11 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
