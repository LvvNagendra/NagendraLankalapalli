import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Product Engineer",
      company: "Intellect Design Arena",
      context: "CIBC — Payment Service Hub (PSH) · Enterprise banking, payments, transaction systems",
      duration: "Apr 2025 – Present",
      responsibilities: [
        "Integrated and extended Intellect's Payment Service Hub (PSH) within CIBC's banking program, coordinating with client and internal stakeholders and aligning delivery with security, audit, and compliance expectations.",
        "Delivered PSH capabilities end to end—requirements, technical design, implementation, testing, and deployment support—including bank-specific workflows and integration points.",
        "Engineered and maintained modules for a high-throughput transaction processing stack; prioritized data integrity, security controls, and performance under peak load.",
        "Built financial workflow capabilities using Spring Boot microservices with architects, QA, and product owners in two-week Agile cycles.",
        "Integrated Kafka, ActiveMQ, and WebSockets for asynchronous and real-time channels; persisted state in PostgreSQL alongside internal banking frameworks (e.g., APRON).",
        "Stack: Java 17, Spring, Angular, PostgreSQL, Kafka, ActiveMQ, WebSockets, APRON.",
      ],
    },
    {
      title: "Java Developer",
      company: "Beauto Systems",
      context: "SaaS and enterprise backends — integrations, reliability, secure releases",
      duration: "Jul 2022 – Mar 2025",
      responsibilities: [
        "Reduced API response times by ~40% via Redis-backed caching and targeted service optimizations.",
        "Improved operational stability toward 99.9% uptime through resilient schema design, monitoring-minded practices, and disciplined rollouts.",
        "Onboarded payment gateways (M-Pesa, Stripe, Paystack) and contributed to higher end-to-end transaction success rates.",
        "Strengthened authentication and authorization with OAuth2 and JWT; supported reduction in unauthorized access attempts.",
        "Automated release paths with containerized CI/CD (~50% faster deployments); standardized Swagger/OpenAPI contracts for faster onboarding.",
        "Delivered features across SaaS, IoT, and internal enterprise modules using Kafka, PostgreSQL, and AWS.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-32 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work experience</h2>
          <p className="text-muted-foreground text-lg">Product and enterprise delivery</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background -ml-2 hidden sm:block shadow-lg"></div>

                <div
                  className={`bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-accent font-semibold mb-1">{exp.company}</p>
                      {exp.context && (
                        <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{exp.context}</p>
                      )}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 ml-0 sm:ml-14 md:ml-16 pl-1 sm:pl-0">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground flex items-start gap-2 text-sm md:text-base"
                      >
                        <span className="text-accent mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
