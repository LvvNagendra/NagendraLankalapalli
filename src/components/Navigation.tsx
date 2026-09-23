import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_HREF, RESUME_DOWNLOAD_NAME } from "@/lib/site";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#freelance" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", ...navItems.map((item) => item.href.substring(1)), "education"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 88;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="flex items-center justify-between min-h-[4rem] h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 bg-gradient-accent rounded-xl flex items-center justify-center shadow-md group-hover:shadow-glow transition-all duration-300">
              <span className="text-white font-display font-bold text-lg">NL</span>
            </div>
            <span className="font-display font-semibold text-base text-foreground hidden sm:block tracking-tight">
              Nagendra Lankalapalli
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              asChild
              className="hidden md:inline-flex border hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              <a href={RESUME_HREF} download={RESUME_DOWNLOAD_NAME}>
                <Download className="mr-1.5 h-4 w-4" />
                Resume
              </a>
            </Button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden min-h-11 min-w-11 inline-flex items-center justify-center rounded-lg hover:bg-secondary transition-colors touch-manipulation"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden pb-4 animate-fade-in border-t border-border/60 mt-2 max-h-[min(70vh,calc(100dvh-5.5rem))] overflow-y-auto overscroll-y-contain -mx-4 px-4"
          >
            <ul className="space-y-1 pt-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`flex items-center min-h-11 px-4 py-3 rounded-lg text-base font-medium transition-colors touch-manipulation ${
                      activeSection === item.href.substring(1)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={RESUME_HREF}
                  download={RESUME_DOWNLOAD_NAME}
                  className="flex items-center justify-center gap-2 min-h-11 px-4 py-3 rounded-lg text-base font-medium bg-gradient-accent text-accent-foreground"
                >
                  <Download size={18} />
                  Download resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
