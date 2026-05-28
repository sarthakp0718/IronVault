import { motion } from "framer-motion";
import { Dumbbell, Activity, HeartPulse } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Elite Coaching",
      description: "Train with industry-leading professionals who demand nothing less than your absolute best.",
      icon: Dumbbell,
    },
    {
      title: "Smart Recovery",
      description: "State-of-the-art contrast therapy, cryotherapy, and advanced biomechanical restoration.",
      icon: HeartPulse,
    },
    {
      title: "Performance Nutrition",
      description: "Bespoke fuel protocols engineered to optimize output, recovery, and aesthetic transformation.",
      icon: Activity,
    }
  ];

  return (
    <section className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
              BEYOND THE <span className="text-muted-foreground">SURFACE</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              We don't do compromises. Every element of IronVault is precision-engineered to eliminate friction between you and your ultimate potential.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Animated Border Gradient on Hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-card p-10 flex flex-col border border-border/50 group-hover:border-transparent transition-colors duration-500">
                <div className="w-12 h-12 mb-8 text-primary flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-sm transform rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-out" />
                  <feature.icon className="w-6 h-6 relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
