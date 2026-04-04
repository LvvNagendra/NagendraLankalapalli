import { GraduationCap, School } from "lucide-react";

const Education = () => {
  const items = [
    {
      icon: GraduationCap,
      degree: "B.Tech, Computer Science",
      institution: "Kakinada Institute of Engineering Technology (KIET)",
      year: "2022",
    },
    {
      icon: School,
      degree: "Intermediate (MPC)",
      institution: "Sri Ravi Junior College",
      year: "2018",
    },
    {
      icon: School,
      degree: "SSC",
      institution: "ZPP High School, G. Vemavaram",
      year: "2016",
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-20 md:py-32 bg-secondary/30 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">Academic foundation</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 flex gap-6 items-start"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <p className="text-accent font-medium mb-2">{item.institution}</p>
                <p className="text-sm text-muted-foreground">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
