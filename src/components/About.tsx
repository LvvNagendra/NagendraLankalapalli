import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal, staggerContainer, staggerItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { RESUME_HREF, RESUME_DOWNLOAD_NAME } from "@/lib/site";

const highlights = [
  { value: "4+", label: "Years experience" },
  { value: "PSH", label: "Enterprise payments @ CIBC" },
  { value: "~40%", label: "API latency cut (prior role)" },
  { value: "99.9%", label: "Availability target" },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative overflow-x-clip">
      <div className="absolute inset-0 bg-secondary/40 -z-10" />
      <div
        aria-hidden
        className="absolute right-0 top-0 h-64 w-64 bg-accent/10 blur-3xl rounded-full -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <SectionHeading
          eyebrow="About"
          title="Backend engineer for regulated systems"
          subtitle="Clear delivery, measurable outcomes, and documentation teams can trust."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          <Reveal className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I&apos;m a Java backend engineer with{" "}
              <strong className="text-foreground font-semibold">4+ years</strong> across
              product-led and enterprise delivery in BFSI, FinTech, and SaaS. Today I work on
              Intellect&apos;s{" "}
              <strong className="text-foreground font-semibold">Payment Service Hub (PSH)</strong>{" "}
              for <strong className="text-foreground font-semibold">CIBC</strong>—high-volume
              payments, Spring Boot microservices, Kafka, ActiveMQ, WebSockets, and PostgreSQL.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              My toolkit spans <strong className="text-foreground">Java 8–17</strong>, the Spring
              ecosystem, REST, <strong className="text-foreground">Kafka</strong>,{" "}
              <strong className="text-foreground">Redis</strong>,{" "}
              <strong className="text-foreground">PostgreSQL</strong>, OAuth2/JWT, containerized
              CI/CD, and AWS. I care about lower latency, safer releases, and APIs documented well
              enough for fast onboarding.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed border-l-4 border-accent pl-4">
              <span className="font-semibold text-foreground">Core strengths: </span>
              cross-functional collaboration, written communication, end-to-end ownership, and
              adaptability in Agile/Scrum delivery.
            </p>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
            >
              <a href={RESUME_HREF} download={RESUME_DOWNLOAD_NAME}>
                <Download className="mr-2 h-5 w-5" />
                Download resume
              </a>
            </Button>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/80 backdrop-blur-sm p-5 sm:p-6 shadow-md hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
              >
                <div
                  aria-hidden
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 group-hover:bg-accent/15 transition-colors"
                />
                <div className="font-display text-3xl sm:text-4xl font-bold text-accent mb-2 relative">
                  {item.value}
                </div>
                <div className="text-muted-foreground text-sm leading-snug relative">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
