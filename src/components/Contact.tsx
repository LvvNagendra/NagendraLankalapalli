import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8897590280",
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
      value: "nagendra-lankalapalli",
      href: "https://www.linkedin.com/in/nagendra-lankalapalli/",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kakinada, Andhra Pradesh, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">Let's work together</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <info.icon size={24} className="text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground text-sm group-hover:text-accent transition-colors">
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

          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to
              be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-accent hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href="mailto:lvvnagendra99@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                asChild
              >
                <a href="/Nagendra_Lankalapalli_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
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
