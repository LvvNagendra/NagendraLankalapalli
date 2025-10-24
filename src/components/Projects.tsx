import {
  TrendingUp,
  Shield,
  Cpu,
  Building2,
  Smartphone,
  Key,
  Zap,
  Lock,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PSH Core Banking Platform",
      duration: "April 2025 – Present",
      description:
        "Enterprise-grade core banking solution serving major clients including ICICI, Barclays, and CBX. Built with Java 17, Spring Boot, and APRON framework for modular development and robust transaction processing.",
      technologies: [
        "Java 17",
        "Spring Boot",
        "ActiveMQ",
        "MySQL",
        "APRON Framework",
      ],
      highlights: [
        { icon: Building2, text: "Major Banking Clients" },
        { icon: Shield, text: "Secure Transaction Systems" },
      ],
    },

    {
      title: "Nexus of Agri (NoA) SaaS Platform",
      duration: "Oct 2024 – Jan 2025",
      description:
        "Architected and developed a scalable SaaS platform for agricultural solutions, serving over 100,000 active users. Integrated AI-powered live translation and real-time messaging using WebSockets.",
      technologies: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "Kafka",
        "AWS",
      ],
      highlights: [
        { icon: TrendingUp, text: "100,000+ Active Users" },
        { icon: Zap, text: "35% Query Latency Reduction" },
      ],
    },

    {
      title: "IIOTCONNX – Industrial IoT Platform",
      duration: "Ongoing",
      description:
        "Developed an Industrial IoT platform leveraging microservices architecture for real-time industrial product showcasing. Integrated Apache Kafka for event-driven messaging and efficient data flow.",
      technologies: [
        "Java 17",
        "Spring Boot",
        "Kafka",
        "Redis",
        "PostgreSQL",
      ],
      highlights: [
        { icon: Cpu, text: "Real-time IoT Processing" },
        { icon: Shield, text: "Spring Security Integration" },
      ],
    },

    {
      title: "OnePlatform – Enterprise Management System",
      duration: "Oct 2022 -Jan 2024",
      description:
        "Led the development of a multi-functional enterprise system incorporating company website, HRM portal, and internal management tools with SSO authentication using Keycloak.",
      technologies: [
        "Spring Boot",
        "React",
        "Android",
        "Keycloak",
        "Docker",
      ],
      highlights: [
        { icon: Smartphone, text: "Android App Development" },
        { icon: Key, text: "SSO Integration with Keycloak" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {project.duration}
                  </p>
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

                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>

                <div className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <highlight.icon className="text-accent" size={16} />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {highlight.text}
                      </span>
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
