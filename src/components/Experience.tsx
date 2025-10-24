import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Java Developer",
      company: "Intellect Design Arena",
      duration: "April 2025 – Present",
      responsibilities: [
        "Developing and maintaining high-volume transaction processing systems for major banking clients",
        "Building scalable and resilient financial services using Spring Boot and microservices architecture",
        "Collaborating with cross-functional teams in Agile environment for core banking platform features",
      ],
    },
    {
      title: "Java Developer",
      company: "Beauto Systems",
      duration: "July 2022 – March 2025",
      responsibilities: [
        "Optimized backend services, reducing API response time by 40% using Redis caching",
        "Designed scalable database solutions, increasing system uptime to 99.9%",
        "Integrated payment gateways (M-Pesa, Stripe, Paystack), improving transaction success rates",
        "Enhanced security with OAuth2.0, JWT, reducing unauthorized access by 30%",
        "Implemented Docker-based CI/CD pipelines, cutting deployment time by 50%",
        "Developed API documentation with Swagger, increasing onboarding efficiency",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg">My professional journey</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline Marker */}
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
                      <p className="text-accent font-semibold mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 ml-16">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground flex items-start gap-2"
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
