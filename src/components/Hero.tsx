import { Mail, Phone, MapPin, Linkedin, Github, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import { RESUME_HREF, LINKEDIN_HREF } from "@/lib/site";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[100dvh] min-h-screen pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-8 relative overflow-x-clip"
    >
      <div className="absolute inset-0 bg-gradient-subtle -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(33,150,243,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(33,150,243,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-full py-12 sm:py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in min-w-0">
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 max-w-full px-3 py-2 sm:px-4 sm:py-2 bg-accent/10 text-accent rounded-2xl sm:rounded-full text-xs sm:text-sm font-medium leading-snug">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse shrink-0" aria-hidden />
              <span>
                Full-time · hybrid · relocation · consulting (backend, docs, web, mentoring)
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] break-words">
                <span className="text-muted-foreground text-xl sm:text-2xl md:text-3xl block mb-2">
                  Hello, I&apos;m
                </span>
                <span className="bg-gradient-accent bg-clip-text text-transparent">Nagendra</span>
                <br />
                <span className="text-foreground">Lankalapalli</span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-muted-foreground font-medium leading-snug break-words">
                Java Backend Engineer · Banking, Payments &amp; BFSI · Microservices
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Results-driven Java engineer with <strong className="text-foreground font-semibold">4+ years</strong> across
              product-led and enterprise delivery in BFSI, FinTech, and SaaS. Currently on Intellect&apos;s{" "}
              <strong className="text-foreground font-semibold">Payment Service Hub (PSH)</strong> for{" "}
              <strong className="text-foreground font-semibold">CIBC</strong>—high-volume payments, Spring Boot
              microservices, Kafka, ActiveMQ, WebSockets, and PostgreSQL in a regulated banking context.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6">
              <div className="text-center sm:text-left rounded-xl border border-border/60 bg-card/30 px-4 py-3 sm:border-0 sm:bg-transparent sm:p-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">4+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-snug">Years experience</div>
              </div>
              <div className="text-center sm:text-left rounded-xl border border-border/60 bg-card/30 px-4 py-3 sm:border-0 sm:bg-transparent sm:p-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">~40%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-snug">
                  API latency cut <span className="hidden sm:inline">(prior role)</span>
                  <span className="sm:hidden">(prior)</span>
                </div>
              </div>
              <div className="text-center sm:text-left rounded-xl border border-border/60 bg-card/30 px-4 py-3 sm:border-0 sm:bg-transparent sm:p-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">99.9%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-snug">Uptime target</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto bg-gradient-accent hover:shadow-glow transition-all duration-300 touch-manipulation min-h-11"
              >
                <Eye className="mr-2 h-5 w-5" />
                View selected work
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 touch-manipulation min-h-11"
              >
                <a
                  href={RESUME_HREF}
                  download="Nagendra_Lankalapalli_Java_Backend_4Years.pdf"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download resume
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border">
              <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl animate-pulse"></div>
                <img
                  src={profilePhoto}
                  alt="Nagendra Lankalapalli - Java Backend Engineer"
                  className="relative w-full h-full object-contain rounded-2xl border-4 border-background shadow-lg bg-card p-2"
                />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-1">Nagendra Lankalapalli</h3>
                <p className="text-muted-foreground">Java Backend Engineer</p>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href="mailto:lvvnagendra99@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group min-w-0"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail size={16} />
                  </div>
                  <span className="break-all sm:break-words">lvvnagendra99@gmail.com</span>
                </a>
                <a
                  href="tel:+918897590280"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Phone size={16} />
                  </div>
                  <span>+91 88975 90280</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <span className="break-words">Hyderabad, India · Open to relocation / hybrid</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <a
                  href={LINKEDIN_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/LvvNagendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:lvvnagendra99@gmail.com"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="tel:+918897590280"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Phone"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
