import { motion } from "framer-motion";

export default function AppExperience() {
  return (
    <section id="experience" className="py-32 bg-secondary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 max-w-xl"
          >
            <div className="inline-block px-3 py-1 border border-border bg-background/50 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Digital Integration
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-6 leading-tight">
              YOUR VAULT,<br/>ANYWHERE.
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-10 leading-relaxed">
              The IronVault app acts as your central command. Track biometrics, schedule recovery sessions, and communicate directly with your coaching team in real-time.
            </p>
            
            <ul className="space-y-6">
              {[
                "Real-time workout telemetry",
                "Concierge scheduling",
                "Nutritional protocol tracking",
                "Recovery analytics"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center text-foreground font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            {/* Abstract Phone Mockup */}
            <div className="relative w-[300px] h-[600px] rounded-[40px] border-[8px] border-border/80 bg-background shadow-2xl overflow-hidden flex flex-col">
              {/* Screen Content */}
              <div className="flex-1 p-6 flex flex-col relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <div className="w-24 h-4 bg-muted rounded-sm" />
                  <div className="w-8 h-8 rounded-full bg-muted" />
                </div>
                
                {/* Stats */}
                <div className="w-full h-32 rounded-lg bg-card border border-border mb-6 p-4 flex flex-col justify-end">
                  <div className="w-16 h-2 bg-primary/50 mb-2 rounded-full" />
                  <div className="w-32 h-6 bg-foreground rounded-sm" />
                </div>

                {/* Graph placeholder */}
                <div className="flex items-end space-x-2 h-24 mb-6">
                  {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className={`flex-1 rounded-t-sm ${i === 6 ? 'bg-primary' : 'bg-muted'}`}
                    />
                  ))}
                </div>
                
                {/* List items */}
                <div className="space-y-3 flex-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-full h-12 bg-card border border-border rounded-sm flex items-center px-4">
                      <div className="w-8 h-8 rounded-sm bg-muted mr-3" />
                      <div className="w-24 h-2 bg-muted rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Glass reflection */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none transform -skew-x-12 translate-x-1/2" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
