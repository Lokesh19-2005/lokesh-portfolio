"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GradientMesh } from "@/components/effects/GradientMesh";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";

const ParticleField = dynamic(
  () =>
    import("@/components/effects/ParticleField").then(
      (mod) => mod.ParticleField
    ),
  { ssr: false }
);

function TypeWriter() {
  const [currentRole, setCurrentRole] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = personalInfo.roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(role.slice(0, text.length + 1));
          if (text === role) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(role.slice(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % personalInfo.roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentRole]);

  return (
    <span className="text-indigo-400">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] md:w-[3px] h-[1em] bg-indigo-400 ml-1 align-middle"
      />
    </span>
  );
}

function FloatingCode() {
  const codeLines = [
    "const buildFuture = async () => {",
    "  const skills = await learn();",
    "  const impact = create(skills);",
    "  return transform(impact);",
    "};",
  ];

  return (
    <motion.div
      className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl" />
        <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 font-mono text-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-white/30">mindset.ts</span>
          </div>
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              className="text-white/60"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 + i * 0.2 }}
            >
              <span className="text-white/30 mr-4">{i + 1}</span>
              {line}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-0"
    >
      {/* Only render 3D particles on desktop for performance */}
      <div className="hidden md:block">
        <ParticleField />
      </div>
      <GradientMesh />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 md:pt-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] md:text-xs text-white/60">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] md:leading-[0.9] tracking-tight mb-4 md:mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {personalInfo.headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.2em] md:mr-[0.25em]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="text-base sm:text-lg md:text-2xl text-white/50 mb-3 md:mb-4 h-7 md:h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <TypeWriter />
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white/40 max-w-xl mb-8 md:mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            Crafting next-generation web experiences with AI-powered solutions,
            modern frameworks, and thoughtful design.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <MagneticButton href="#projects" variant="primary">
              <ExternalLink size={16} />
              View Projects
            </MagneticButton>
            <MagneticButton href="/resume.pdf" variant="secondary">
              <Download size={16} />
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Mail size={16} />
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        <FloatingCode />
      </div>

      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-white/30" size={20} />
      </motion.div>
    </section>
  );
}
