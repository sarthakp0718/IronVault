import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section id="join" className="py-40 relative bg-background overflow-hidden border-t border-border">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-8 uppercase">
            DISCIPLINE CREATES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">LEGENDS</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
            Membership is strictly limited to ensure an uncompromised experience. 
            Apply now to secure your access to the vault.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-primary text-primary-foreground font-bold text-lg tracking-widest uppercase hover:bg-primary/90 transition-colors shadow-[0_0_40px_rgba(180,140,80,0.3)]"
          >
            JOIN IRONVAULT
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
