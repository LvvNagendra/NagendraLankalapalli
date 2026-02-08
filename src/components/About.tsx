import { Code2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an experienced Java Backend Developer with 3.9 years of expertise in delivering 
              enterprise-grade applications for the Banking and Financial Services (BFSI) domain. 
              Currently working on the PSH product using Java 17, Spring Boot, Spring MVC, and ActiveMQ 
              for messaging, serving major banking clients including ICICI, Barclays, and CBX.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in designing and developing secure, scalable, and real-time transaction 
              systems using the APRON framework. My expertise includes building RESTful APIs, 
              integrating messaging queues (ActiveMQ, Kafka), implementing microservices architecture, 
              and ensuring robust performance for core banking platforms. Passionate about clean code, 
              security best practices, and continuous improvement in Agile environments.
            </p>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
            >
              <a href="/Nagendra Lankalapalli Java Developer .pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download My Resume
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-accent mb-2">3.9</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">System Uptime</div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center">
              <Code2 size={48} className="text-accent mb-2" />
              <div className="text-muted-foreground text-center text-sm">
                Clean Code Advocate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
