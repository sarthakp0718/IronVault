import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The environment strips away every excuse. It's just you and the work. Best facility I've ever trained in.",
      author: "Marcus T.",
      role: "Venture Capitalist",
      image: "/images/avatar-1.png"
    },
    {
      quote: "IronVault isn't just a gym, it's a recalibration of standards. The coaching is surgical in its precision.",
      author: "Elena R.",
      role: "Creative Director",
      image: "/images/avatar-2.png"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-32 bg-secondary/50 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 text-center max-w-4xl relative">
        <div className="flex justify-center mb-12 space-x-2 text-primary">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>

        <div className="relative h-64 md:h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-3xl font-light leading-relaxed text-foreground mb-8">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].author}
                  className="w-12 h-12 rounded-full grayscale border border-border"
                />
                <div className="text-left">
                  <div className="font-bold text-foreground text-sm uppercase tracking-wide">
                    {testimonials[current].author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 transition-all duration-300 ${
                i === current ? "w-8 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
