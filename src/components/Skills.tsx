import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/Reveal";

const skillCategories = [
  {
    title: "Languages & core",
    skills: ["Java (8–17)", "JavaScript / TypeScript", "SQL", "OOP", "Design patterns"],
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "HTML / CSS", "Tailwind CSS", "Responsive UI", "Component design"],
  },
  {
    title: "Backend frameworks",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "Hibernate/JPA"],
  },
  {
    title: "Architecture & messaging",
    skills: ["Microservices", "REST", "Event-driven design", "WebSockets", "Apache Kafka", "ActiveMQ"],
  },
  {
    title: "Data & cloud",
    skills: ["PostgreSQL", "Redis", "MongoDB", "AWS (EC2, RDS, S3)", "Docker", "CI/CD"],
  },
  {
    title: "Security, APIs & practice",
    skills: [
      "OAuth2",
      "JWT",
      "Keycloak (SSO)",
      "Swagger/OpenAPI",
      "Payment gateways",
      "Agile/Scrum",
      "Git / GitHub",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28 overflow-x-clip relative">
      <div
        aria-hidden
        className="absolute right-[-8%] bottom-0 h-64 w-64 rounded-full bg-[hsl(200_80%_50%/0.1)] blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical skills"
          subtitle="Full-stack toolkit—Java + React for payments, SaaS, and product builds."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              className="group relative overflow-hidden bg-card p-6 md:p-7 rounded-2xl shadow-md border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div
                aria-hidden
                className="absolute top-0 left-0 h-full w-1 bg-gradient-accent opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <h3 className="font-display text-lg font-bold mb-4 text-foreground tracking-tight">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-foreground text-xs font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
