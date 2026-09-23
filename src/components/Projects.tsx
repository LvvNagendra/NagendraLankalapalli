import {
  TrendingUp,
  Shield,
  Cpu,
  Smartphone,
  Key,
  Zap,
  CreditCard,
  ExternalLink,
  Building2,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/Reveal";
import { ORGMITRA_HREF } from "@/lib/site";

const featured = {
  title: "OrgMitraHQ",
  tag: "Own product · Marketing live",
  role: "Founder · Full-stack (Java + React)",
  description:
    "Multi-sector HRMS SaaS for schools, hospitals, IT, retail, and more—hiring, attendance, leave, payroll, letters, and India compliance in one calm portal. Four role portals, 15+ live modules, multi-tenant security.",
  technologies: [
    "Java",
    "Spring Boot",
    "React",
    "PostgreSQL",
    "Multi-tenant SaaS",
    "Payroll",
    "India compliance",
  ],
  highlights: [
    { icon: Building2, text: "7 industry sectors ready" },
    { icon: Layers, text: "15 live HR modules · 4 role portals" },
  ],
  href: ORGMITRA_HREF,
};

const projects = [
  {
    title: "Payment Service Hub (PSH) — CIBC",
    duration: "Apr 2025 – Present",
    role: "Product Engineer · Intellect Design Arena",
    description:
      "Enterprise BFSI payments stack: extending PSH for CIBC with bank-specific workflows, high-throughput transaction processing, and strict security and audit alignment.",
    technologies: [
      "Java 17",
      "Spring Boot",
      "PostgreSQL",
      "Kafka",
      "ActiveMQ",
      "WebSockets",
      "Angular",
    ],
    highlights: [
      { icon: CreditCard, text: "Enterprise payment & transaction processing" },
      { icon: Shield, text: "Regulated banking — security, audit, compliance" },
    ],
  },
  {
    title: "Nexus of Agri (NoA)",
    duration: "SaaS platform · Beauto Systems",
    role: "Backend & React delivery",
    description:
      "Scalable agricultural SaaS with React and Spring; Kafka and WebSockets; OAuth2 and AWS. Served 100K+ users; ~35% query latency reduction.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Kafka", "WebSockets", "OAuth2", "AWS"],
    highlights: [
      { icon: TrendingUp, text: "100K+ active users" },
      { icon: Zap, text: "~35% query latency reduction" },
    ],
  },
  {
    title: "IIOTCONNX",
    duration: "Industrial IoT · Beauto Systems",
    role: "Microservices & integrations",
    description:
      "Industrial IoT platform on Java 17 and Spring Cloud with Kafka, PostgreSQL, and Redis. Hardened APIs with Spring Security and Swagger 3.",
    technologies: [
      "Java 17",
      "Spring Cloud",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Spring Security",
      "Swagger 3",
    ],
    highlights: [
      { icon: Cpu, text: "Event-driven, real-time IoT workloads" },
      { icon: Shield, text: "Hardened APIs and service boundaries" },
    ],
  },
  {
    title: "OnePlatform",
    duration: "Enterprise suite · Beauto Systems",
    role: "Full-stack & mobile",
    description:
      "Multi-surface enterprise system: Spring Boot, React, Android, PostgreSQL, Keycloak SSO, Docker, and AWS.",
    technologies: ["Spring Boot", "React", "Android", "PostgreSQL", "Keycloak", "Docker", "AWS"],
    highlights: [
      { icon: Smartphone, text: "Web + Android surfaces" },
      { icon: Key, text: "SSO with Keycloak" },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 relative overflow-x-clip">
      <div className="absolute inset-0 bg-secondary/35 -z-10" />
      <div
        aria-hidden
        className="absolute left-[-10%] top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work"
          subtitle="Own product marketing site plus enterprise platforms. Confidential details summarized where needed."
        />

        {/* Featured: OrgMitraHQ */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55 }}
          className="relative max-w-6xl mx-auto mb-8 overflow-hidden rounded-3xl border border-accent/30 bg-card shadow-xl"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(174_72%_36%/0.16),transparent_55%)]"
          />
          <div className="relative p-6 sm:p-8 md:p-10 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent/15 text-accent text-xs font-semibold px-3 py-1 mb-4">
                {featured.tag}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">
                {featured.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">
                {featured.role}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm sm:text-base">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="space-y-3 mb-6">
                {featured.highlights.map((h) => (
                  <div key={h.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <h.icon className="text-accent" size={16} />
                    </div>
                    <span className="text-sm text-muted-foreground">{h.text}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-gradient-accent hover:shadow-glow min-h-11"
                asChild
              >
                <a href={featured.href} target="_blank" rel="noopener noreferrer">
                  Visit marketing site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl border border-border overflow-hidden bg-gradient-primary aspect-[4/3] shadow-lg"
            >
              <div className="absolute inset-0 bg-grid-fade opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-primary-foreground">
                <p className="font-display text-3xl font-bold tracking-tight mb-2">OrgMitraHQ</p>
                <p className="text-sm text-primary-foreground/75 mb-4 max-w-xs">
                  Multi-sector HRMS · Schools · Hospitals · IT · Retail
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-primary-foreground/10 px-3 py-1.5 rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Open live site <ExternalLink size={14} />
                </span>
              </div>
            </a>
          </div>
        </motion.article>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg hover:shadow-xl hover:border-accent/30 transition-colors duration-300 flex flex-col"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_right,hsl(174_72%_36%/0.08),transparent_55%)]"
              />
              <div className="p-6 md:p-8 flex-1 flex flex-col relative">
                <div className="mb-4">
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium">{project.duration}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                    {project.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <div key={highlight.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <highlight.icon className="text-accent" size={16} />
                      </div>
                      <span className="text-sm text-muted-foreground">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
