import { Briefcase, Calendar } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

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

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 overflow-x-clip relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <SectionHeading
          eyebrow="Career"
          title="Work experience"
          subtitle="Product and enterprise delivery across banking payments and SaaS platforms."
        />

        <div className="max-w-4xl mx-auto relative">
          <div
            aria-hidden
            className="absolute left-8 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent hidden sm:block"
          />

          <div className="space-y-10 md:space-y-14">
            {experiences.map((exp, index) => (
              <Reveal
                key={exp.company}
                delay={index * 0.08}
                direction={index % 2 === 0 ? "left" : "right"}
                className={`relative ${index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%] md:ml-auto"}`}
              >
                <div
                  aria-hidden
                  className="absolute left-8 md:left-1/2 w-3.5 h-3.5 bg-accent rounded-full border-[3px] border-background -ml-[7px] hidden sm:block shadow-glow z-10"
                />

                <div
                  className={`relative overflow-hidden bg-card/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-border hover:border-accent/25 hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                  }`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-accent opacity-80"
                  />
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-accent" size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl md:text-2xl font-bold mb-1 tracking-tight">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-semibold mb-1">{exp.company}</p>
                      {exp.context && (
                        <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                          {exp.context}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={15} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 ml-0 sm:ml-14 md:ml-16">
                    {exp.responsibilities.map((resp) => (
                      <li
                        key={resp.slice(0, 40)}
                        className="text-muted-foreground flex items-start gap-2.5 text-sm md:text-base leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
