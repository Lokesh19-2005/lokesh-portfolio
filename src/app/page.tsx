"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { AIAssistant } from "@/components/sections/AIAssistant";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { PremiumBackground } from "@/components/effects/PremiumBackground";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useSmoothScroll();

  return (
    <main className="relative">
      <LoadingScreen />
      {mounted && <CustomCursor />}
      <PremiumBackground />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
      <Footer />
      {mounted && <AIAssistant />}
    </main>
  );
}
