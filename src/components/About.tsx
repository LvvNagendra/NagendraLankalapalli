import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_HREF } from "@/lib/site";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 bg-secondary/30 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About me</h2>
          <p className="text-muted-foreground text-lg">Professional summary &amp; strengths</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a results-driven Java backend engineer with <strong className="text-foreground">4+ years</strong> in
              product-led and enterprise delivery across banking, BFSI, FinTech, and SaaS. Today I contribute to
              high-volume <strong className="text-foreground">payment and transaction processing</strong> on Intellect
              Design Arena&apos;s <strong className="text-foreground">Payment Service Hub (PSH)</strong> within{" "}
              <strong className="text-foreground">CIBC</strong>&apos;s program—aligning delivery with security, audit, and
              compliance expectations typical of regulated financial services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My toolkit spans <strong className="text-foreground">Java 8–17</strong>, the Spring ecosystem (Boot, Security,
              Cloud), REST, <strong className="text-foreground">Kafka</strong>, <strong className="text-foreground">Redis</strong>,{" "}
              <strong className="text-foreground">PostgreSQL</strong>, OAuth2/JWT, containerized CI/CD, and AWS. I care about
              measurable outcomes: lower API latency, stronger availability toward 99.9%, safer releases, and APIs documented
              well enough for fast onboarding.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed border-l-4 border-accent pl-4">
              <span className="font-semibold text-foreground">Core strengths: </span>
              cross-functional collaboration, written communication (API docs), end-to-end ownership, stakeholder alignment,
              and adaptability in fast-paced Agile/Scrum sprints.
            </p>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
            >
              <a href={RESUME_HREF} download="Nagendra_Lankalapalli_Java_Backend_4Years.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download resume
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-accent mb-2">4+</div>
              <div className="text-muted-foreground">Years experience</div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-accent mb-2">PSH</div>
              <div className="text-muted-foreground text-sm">Enterprise payments @ CIBC</div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-accent mb-2">~40%</div>
              <div className="text-muted-foreground text-sm">API latency reduction (prior)</div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">Platform availability target</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
