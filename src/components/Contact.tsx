import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_HREF, LINKEDIN_HREF } from "@/lib/site";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 88975 90280",
      href: "tel:+918897590280",
    },
    {
      icon: Mail,
      title: "Email",
      value: "lvvnagendra99@gmail.com",
      href: "mailto:lvvnagendra99@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "nagendra-lankalapalli-6a7457236",
      href: LINKEDIN_HREF,
    },
    {
      icon: Github,
      title: "GitHub",
      value: "LvvNagendra",
      href: "https://github.com/LvvNagendra",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, India — open to relocation / hybrid",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-secondary/30 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-1">Get in touch</h2>
          <p className="text-muted-foreground text-lg">Roles, collaborations, or freelance inquiries</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group min-w-0"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <info.icon size={24} className="text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground text-sm group-hover:text-accent transition-colors break-words">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-lg border border-border text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Let&apos;s talk</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-1">
              Full-time opportunities, payment/BFSI backend work, or a focused freelance engagement—send a short note with
              your stack and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto min-h-11 touch-manipulation bg-gradient-accent hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href="mailto:lvvnagendra99@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-h-11 touch-manipulation border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                asChild
              >
                <a href={RESUME_HREF} download="Nagendra_Lankalapalli_Java_Backend_4Years.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
