import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/Reveal";
import {
  RESUME_HREF,
  RESUME_DOWNLOAD_NAME,
  LINKEDIN_HREF,
  GITHUB_HREF,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
  },
  {
    icon: Mail,
    title: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "nagendra-lankalapalli",
    href: LINKEDIN_HREF,
  },
  {
    icon: Github,
    title: "GitHub",
    value: "LvvNagendra",
    href: GITHUB_HREF,
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Hyderabad, India — open to relocation / hybrid",
    href: null as string | null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 relative overflow-x-clip">
      <div className="absolute inset-0 bg-secondary/40 -z-10" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(174_72%_36%/0.08),transparent_60%)] -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          subtitle="Roles, collaborations, or freelance inquiries—happy to talk."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-8%" }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-8"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={staggerItem}
                className="bg-card/90 p-5 sm:p-6 rounded-2xl shadow-md border border-border hover:shadow-lg hover:border-accent/25 transition-all duration-300"
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group min-w-0"
                  >
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <info.icon
                        size={20}
                        className="text-accent group-hover:text-accent-foreground"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold mb-0.5">{info.title}</h3>
                      <p className="text-muted-foreground text-sm group-hover:text-accent transition-colors break-words">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-0.5">{info.title}</h3>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <div className="relative overflow-hidden bg-card p-6 sm:p-10 rounded-2xl shadow-lg border border-border text-center">
            <div aria-hidden className="absolute inset-0 bg-gradient-accent opacity-[0.06]" />
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 tracking-tight relative">
              Let&apos;s talk
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base relative">
              Full-time opportunities, payment/BFSI backend work, or a focused freelance
              engagement—send a short note with your stack and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto relative">
              <Button
                size="lg"
                className="w-full sm:w-auto min-h-11 touch-manipulation bg-gradient-accent hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href={`mailto:${EMAIL}`}>
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
                <a href={RESUME_HREF} download={RESUME_DOWNLOAD_NAME}>
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
