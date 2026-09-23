import { GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/Reveal";

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

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-28 relative overflow-x-clip">
      <div className="absolute inset-0 bg-secondary/35 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <SectionHeading eyebrow="Background" title="Education" subtitle="Academic foundation." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {items.map((item) => (
            <motion.div
              key={item.degree}
              variants={staggerItem}
              className="bg-card/90 p-6 md:p-7 rounded-2xl shadow-md border border-border hover:shadow-lg hover:border-accent/25 transition-all duration-300 flex gap-5 items-start"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="text-accent" size={26} />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-1 tracking-tight">
                  {item.degree}
                </h3>
                <p className="text-accent font-medium mb-1">{item.institution}</p>
                <p className="text-sm text-muted-foreground">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
