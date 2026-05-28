import { motion } from "framer-motion";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function Trainers() {
  const trainers = [
    {
      name: "Jaxson Vane",
      specialty: "Strength & Conditioning",
      image: "/images/trainer-1.png"
    },
    {
      name: "Sienna Cross",
      specialty: "Biomechanical Optimization",
      image: "/images/trainer-2.png"
    },
    {
      name: "Kaelen Thorne",
      specialty: "Combat & Agility",
      image: "/images/trainer-3.png"
    }
  ];

  return (
    <section id="trainers" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">
            THE ARCHITECTS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Our coaching staff are elite practitioners, selected for their relentless pursuit of excellence and their ability to forge greatness in others.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden relative bg-card border border-border">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4">
                    {trainer.specialty}
                  </p>
                  
                  {/* Socials - Reveal on hover */}
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <a href="#" className="text-white/70 hover:text-primary transition-colors">
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white/70 hover:text-primary transition-colors">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
