import { TrendingUp, Shield, Cpu, Smartphone, Key, Zap, CreditCard } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Payment Service Hub (PSH) — CIBC",
      duration: "Apr 2025 – Present",
      role: "Product Engineer · Intellect Design Arena",
      description:
        "Enterprise BFSI payments stack: extending PSH for CIBC with bank-specific workflows, high-throughput transaction processing, and strict security and audit alignment. Real-time and async channels alongside PostgreSQL and internal frameworks (APRON).",
      technologies: [
        "Java 17",
        "Spring Boot",
        "PostgreSQL",
        "Kafka",
        "ActiveMQ",
        "WebSockets",
        "APRON",
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
      role: "Backend & platform delivery",
      description:
        "Scalable agricultural SaaS with React and Spring; Kafka and WebSockets; OAuth2 and AWS. Served 100K+ users with read replicas and payments-related flows; achieved ~35% query latency reduction.",
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
        "Industrial IoT platform on Java 17 and Spring Cloud with Kafka, PostgreSQL, and Redis. Spring Security, Swagger 3, and Log4j2 for observable, integratable services.",
      technologies: [
        "Java 17",
        "Spring Cloud",
        "Kafka",
        "PostgreSQL",
        "Redis",
        "Spring Security",
        "Swagger 3",
        "Log4j2",
      ],
      highlights: [
        { icon: Cpu, text: "Event-driven, real-time IoT workloads" },
        { icon: Shield, text: "Hardened APIs and service boundaries" },
      ],
    },
    {
      title: "OnePlatform",
      duration: "Enterprise suite · Beauto Systems",
      role: "Full-stack & mobile contribution",
      description:
        "Multi-surface enterprise system: Spring Boot, React, Android, PostgreSQL, Keycloak SSO, Docker, and AWS—company site, HRM, and internal tooling with unified identity.",
      technologies: ["Spring Boot", "React", "Android", "PostgreSQL", "Keycloak", "Docker", "AWS"],
      highlights: [
        { icon: Smartphone, text: "Web + Android surfaces" },
        { icon: Key, text: "SSO with Keycloak" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 bg-secondary/30 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected work</h2>
          <p className="text-muted-foreground text-lg">
            Flagship payments program and high-impact platforms from prior roles. Details may be summarized for confidentiality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-accent font-medium">{project.duration}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{project.role}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>

                <div className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <highlight.icon className="text-accent" size={16} />
                      </div>
                      <span className="text-sm text-muted-foreground">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
