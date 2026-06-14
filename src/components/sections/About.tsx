"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/portfolio";
import { Code2, Brain, Palette, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Engineering",
    description:
      "Building end-to-end applications with modern JavaScript frameworks, type-safe APIs, and scalable databases.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Developing intelligent systems with TensorFlow, Scikit-Learn, and natural language processing.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive, beautiful interfaces with attention to micro-interactions and user experience.",
  },
  {
    icon: Rocket,
    title: "Performance & Innovation",
    description:
      "Optimizing applications for speed, accessibility, and delivering cutting-edge digital solutions.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="mt-12 md:mt-20 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              I&apos;m <span className="text-white font-medium">Pediredla Sai Lokesh</span>, 
              a passionate Full Stack Developer and AI enthusiast currently 
              pursuing Data Science. I thrive at the intersection of creative 
              design and technical innovation.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              With experience spanning from frontend engineering to machine 
              learning, I build digital products that are not only visually 
              stunning but also intelligent and performant.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              My approach combines clean code architecture with AI-powered 
              features to create experiences that feel magical. Every project 
              I take on is an opportunity to push boundaries and deliver 
              something extraordinary.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, i) => (
              <GlassCard key={stat.label} className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-sm text-white/40">{stat.label}</p>
                </motion.div>
              </GlassCard>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="p-6 h-full group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
