import {
  Code2,
  CreditCard,
  Layers,
  FileCode,
  MessageSquare,
  Clock,
  BookOpen,
  Globe,
  Palette,
  GraduationCap,
  LifeBuoy,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/Reveal";
import { LINKEDIN_HREF, EMAIL } from "@/lib/site";

const pillars = [
  "Production-grade Java & Spring",
  "Documentation that teams actually use",
  "Clean code & reviewable PRs",
  "Security- and audit-aware delivery",
];

const offerings = [
  {
    icon: Code2,
    title: "Java & Spring backends",
    description:
      "Microservices, REST APIs, Spring Security, PostgreSQL, Redis, Kafka/ActiveMQ—built for clarity, tests, and steady releases.",
  },
  {
    icon: CreditCard,
    title: "Payments & BFSI integrations",
    description:
      "Payment flows, gateways, OAuth2/JWT, and patterns that fit regulated environments and stakeholder review.",
  },
  {
    icon: Layers,
    title: "Event-driven systems",
    description:
      "Async pipelines, reliability, and observability-minded design when throughput and ordering matter.",
  },
  {
    icon: BookOpen,
    title: "Technical documentation",
    description:
      "OpenAPI/Swagger, architecture notes, runbooks, onboarding guides—so engineers and partners ship faster.",
  },
  {
    icon: Globe,
    title: "Marketing & company websites",
    description:
      "Fast, credible marketing sites and landing pages aligned with your brand—performance and maintainability.",
  },
  {
    icon: Palette,
    title: "Design support & UI polish",
    description:
      "Partnering with designers: component structure, responsive layouts, and Figma-faithful implementation.",
  },
  {
    icon: GraduationCap,
    title: "Java backend for freshers",
    description:
      "Structured mentoring—core Java, Spring Boot, REST, SQL, Git, and code review habits from real product work.",
  },
  {
    icon: LifeBuoy,
    title: "Engineer & team support",
    description:
      "Office hours, architecture sanity checks, and hands-on help so your team stays unblocked.",
  },
  {
    icon: FileCode,
    title: "API contracts & integration clarity",
    description:
      "Versioned APIs, consistent error models, and documentation that reduces back-and-forth across teams.",
  },
];

const models = [
  { icon: MessageSquare, label: "Discovery", detail: "Goals, constraints, and fit—before scope or estimates." },
  { icon: Clock, label: "Milestones", detail: "Fixed deliverables: features, docs, or launch-ready slices." },
  { icon: Layers, label: "Retainer", detail: "Ongoing reviews, mentoring blocks, or release support." },
];

const Freelance = () => {
  return (
    <section id="freelance" className="py-16 sm:py-20 md:py-28 relative overflow-x-clip">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/25 to-transparent pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <SectionHeading
          eyebrow="Services"
          title="Consulting, delivery & enablement"
          subtitle="Principal-style Java backend work plus docs, web presence, design-aligned UI, and mentoring—without sacrificing clean code."
        />

        <div className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-4xl mx-auto">
          {pillars.map((p) => (
            <span
              key={p}
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-card border border-border shadow-sm text-foreground/90"
            >
              {p}
            </span>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-16"
        >
          {offerings.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="group bg-card p-6 rounded-2xl shadow-md border border-border hover:border-accent/30 hover:shadow-lg transition-colors duration-300"
            >
              <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <item.icon className="text-accent group-hover:text-accent-foreground" size={20} />
              </div>
              <h3 className="font-display text-base font-bold mb-2 leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-xl font-bold text-center mb-8 tracking-tight">
            How we work together
          </h3>
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {models.map((m) => (
              <div
                key={m.label}
                className="text-center p-6 rounded-2xl bg-card/80 border border-border backdrop-blur-sm shadow-sm"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <m.icon className="text-accent" size={18} />
                </div>
                <p className="font-semibold mb-1">{m.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto min-h-11 touch-manipulation bg-gradient-accent hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a
                href={`mailto:${EMAIL}?subject=Services%20%E2%80%94%20backend%2C%20docs%2C%20or%20training`}
              >
                Start a conversation
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-h-11 touch-manipulation border-2"
              asChild
            >
              <a href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer">
                Message on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
