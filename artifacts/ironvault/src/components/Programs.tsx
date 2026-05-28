import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Strength Training",
      image: "/images/program-strength.png",
      span: "md:col-span-2",
      height: "h-[500px]"
    },
    {
      title: "Fat Loss",
      image: "/images/program-fatloss.png",
      span: "md:col-span-1",
      height: "h-[500px]"
    },
    {
      title: "Athlete Performance",
      image: "/images/program-athlete.png",
      span: "md:col-span-1",
      height: "h-[400px]"
    },
    {
      title: "Functional Fitness",
      image: "/images/program-functional.png",
      span: "md:col-span-2",
      height: "h-[400px]"
    }
  ];

  return (
    <section id="programs" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase text-foreground">
            Disciplines
          </h2>
          <div className="h-[1px] w-24 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden bg-card cursor-pointer ${program.span} ${program.height}`}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500" />
              
              <motion.img 
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="overflow-hidden mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                    {program.title}
                  </h3>
                </div>
                
                <div className="flex items-center text-primary text-sm font-bold tracking-widest uppercase opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  <span>Explore Protocol</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
