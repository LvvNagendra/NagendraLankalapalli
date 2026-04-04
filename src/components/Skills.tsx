const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & core",
      skills: ["Java (8–17)", "J2EE", "SQL", "OOP", "Design patterns"],
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "Hibernate/JPA"],
    },
    {
      title: "Architecture & messaging",
      skills: ["Microservices", "REST", "Event-driven design", "WebSockets", "Apache Kafka", "ActiveMQ"],
    },
    {
      title: "Data",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Query tuning", "Read replicas"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, RDS, S3)", "Docker", "CI/CD", "Maven", "Git", "GitHub", "Tomcat", "NGINX"],
    },
    {
      title: "Security, APIs & practice",
      skills: ["OAuth2", "JWT", "SSL/TLS", "Keycloak (SSO)", "Swagger/OpenAPI", "Payment gateways", "Agile/Scrum", "SDLC", "Log4j2"],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-32 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical skills</h2>
          <p className="text-muted-foreground text-lg">Aligned with my resume</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-7 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold mb-4 text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-secondary text-foreground text-xs font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
