import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const step = end / (duration * 60); // Assuming 60fps
      
      const timer = setInterval(() => {
        start += step;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { label: "Elite Members", value: 12, suffix: "K+" },
    { label: "Satisfaction", value: 98, suffix: "%" },
    { label: "Master Trainers", value: 250, suffix: "+" },
    { label: "Access", value: 24, suffix: "/7" },
  ];

  return (
    <section className="py-24 bg-secondary relative border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-x divide-border/0 md:divide-border">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center flex flex-col items-center justify-center relative"
            >
              <div className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-primary font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
