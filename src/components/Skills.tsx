const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "J2EE", "SQL", "HTML", "CSS"],
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "Spring Security", "Hibernate", "Spring Cloud"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Maven", "Git", "Postman", "Swagger", "Docker", "Apache Kafka"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-6 text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
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
