import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Trainers from "@/components/Trainers";
import AppExperience from "@/components/AppExperience";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full min-h-[100dvh] bg-background overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary transform origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Programs />
        <Testimonials />
        <Trainers />
        <AppExperience />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
