import { Mail, Phone, MapPin, Linkedin, Github, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-subtle -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(33,150,243,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(33,150,243,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Available for Work
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-muted-foreground text-2xl md:text-3xl block mb-2">
                  Hello, I'm
                </span>
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Nagendra
                </span>
                <br />
                <span className="text-foreground">Lankalapalli</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Java Developer
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Experienced Backend Developer with 4+ years of expertise in Spring Boot,
              Microservices Architecture, and FinTech applications. Specialized in building
              scalable, secure, and high-performance enterprise systems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">4+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-muted-foreground mt-1">System Uptime</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-accent hover:shadow-glow transition-all duration-300"
              >
                <Eye className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
              >
                <a href="/Nagendra_Lankalapalli_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="animate-slide-in-right">
            <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border">
              <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl animate-pulse"></div>
                <img
                  src={profilePhoto}
                  alt="Nagendra Lankalapalli"
                  className="relative w-full h-full object-cover rounded-2xl border-4 border-background shadow-lg"
                />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-1">Nagendra Lankalapalli</h3>
                <p className="text-muted-foreground">Java Developer</p>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href="mailto:lvvnagendra99@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail size={16} />
                  </div>
                  <span>lvvnagendra99@gmail.com</span>
                </a>
                <a
                  href="tel:+918897590280"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Phone size={16} />
                  </div>
                  <span>+91 8897590280</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <span>Kakinada, India</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <a
                  href="https://www.linkedin.com/in/nagendra-lankalapalli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/LvvNagendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:lvvnagendra99@gmail.com"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="tel:+918897590280"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
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
