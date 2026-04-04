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
import { Button } from "@/components/ui/button";
import { LINKEDIN_HREF } from "@/lib/site";

const Freelance = () => {
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
        "OpenAPI/Swagger, architecture notes, runbooks, onboarding guides—so engineers and partners ship faster with less confusion.",
    },
    {
      icon: Globe,
      title: "Marketing & company websites",
      description:
        "Fast, credible marketing sites and landing pages (e.g. React/Vite) aligned with your brand—performance, accessibility, and maintainability.",
    },
    {
      icon: Palette,
      title: "Design support & UI polish",
      description:
        "Partnering with your designers: component structure, responsive layouts, and implementation that matches Figma without fragile shortcuts.",
    },
    {
      icon: GraduationCap,
      title: "Java backend for freshers",
      description:
        "Structured mentoring—core Java, Spring Boot, REST, SQL, Git, and code review habits that mirror real product work.",
    },
    {
      icon: LifeBuoy,
      title: "Engineer & team support",
      description:
        "Office hours, architecture sanity checks, and hands-on help so your team stays unblocked on backend and integration work.",
    },
    {
      icon: FileCode,
      title: "API contracts & integration clarity",
      description:
        "Versioned APIs, consistent error models, and documentation that reduces back-and-forth between backend, mobile, and web.",
    },
  ];

  const models = [
    { icon: MessageSquare, label: "Discovery", detail: "Goals, constraints, and fit—before scope or estimates." },
    { icon: Clock, label: "Milestones", detail: "Fixed deliverables: features, docs, or launch-ready slices." },
    { icon: Layers, label: "Retainer", detail: "Ongoing reviews, mentoring blocks, or release support." },
  ];

  return (
    <section id="freelance" className="py-16 sm:py-20 md:py-32 relative overflow-x-clip">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="text-center mb-12 max-w-3xl mx-auto px-1">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-3">Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Consulting, delivery &amp; enablement
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Principal-style Java backend work plus the surrounding layer teams often need: clear docs, credible web presence,
            design-aligned UI, and structured support for junior engineers—without sacrificing clean code or professional standards.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {pillars.map((p) => (
            <span
              key={p}
              className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border shadow-sm text-foreground/90"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="group bg-card p-6 md:p-7 rounded-2xl shadow-lg border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                <item.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-base font-bold mb-2 leading-snug">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8">How we work together</h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {models.map((m, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-secondary/40 border border-border backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <m.icon className="text-accent" size={20} />
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
              <a href="mailto:lvvnagendra99@gmail.com?subject=Services%20%E2%80%94%20backend%2C%20docs%2C%20or%20training">
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
