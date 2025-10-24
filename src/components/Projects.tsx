import { Users, TrendingUp, Cpu, Shield, Smartphone, Key, CreditCard, Building2, Lock, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PSH Core Banking Platform",
      duration: "April 2022 – Present",
      description:
        "Enterprise-grade core banking solution serving major clients including ICICI, Barclays, and CBX. Built with Java 17, Spring Boot, and APRON framework for modular development and robust transaction processing.",
      technologies: ["Java 17", "Spring Boot", "ActiveMQ", "MySQL", "APRON Framework"],
      highlights: [
        { icon: Building2, text: "Major Banking Clients" },
        { icon: Shield, text: "Secure Transaction Systems" },
      ],
    },
    {
      title: "Payment Gateway Integration System",
      duration: "2023 – 2024",
      description:
        "Designed and implemented comprehensive payment gateway integrations for FinTech applications, supporting real-time transaction processing, secure authentication, and seamless payment flows for banking operations.",
      technologies: ["Spring Boot", "Spring Security", "PostgreSQL", "Redis", "Swagger"],
      highlights: [
        { icon: CreditCard, text: "Multi-Gateway Support" },
        { icon: Lock, text: "PCI-DSS Compliant" },
      ],
    },
    {
      title: "Real-time Messaging & Transaction System",
      duration: "2022 – 2023",
      description:
        "Developed high-performance messaging infrastructure using ActiveMQ and Kafka for asynchronous communication in banking microservices. Enabled decoupled service architecture with reliable message delivery.",
      technologies: ["ActiveMQ", "Kafka", "Spring Boot", "Docker", "Jenkins"],
      highlights: [
        { icon: Zap, text: "Real-time Processing" },
        { icon: Cpu, text: "Event-Driven Architecture" },
      ],
    },
    {
      title: "Intellect Design FinTech Solutions",
      duration: "2022 – Present",
      description:
        "Contributing to enterprise FinTech solutions with focus on scalable microservices, RESTful API development, and database optimization. Implementing CI/CD pipelines and maintaining 99.9% system uptime.",
      technologies: ["Java", "Spring Cloud", "Maven", "Git", "Docker"],
      highlights: [
        { icon: TrendingUp, text: "99.9% System Uptime" },
        { icon: Shield, text: "Spring Security & OAuth2" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-accent font-medium">{project.duration}</p>
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

                <p className="text-muted-foreground mb-6 flex-1">{project.description}</p>

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
