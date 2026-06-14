"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="mt-12 md:mt-20 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-5">
              Hey, I&apos;m{" "}
              <span className="text-white font-medium">
                Pediredla Sai Lokesh
              </span>
              — a B.Tech student in Computer Science (Data Science) at GITAM
              University, Visakhapatnam. I love building things for the web and
              exploring how AI can make digital products smarter.
            </p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-5">
              I work with React, JavaScript, Tailwind CSS on the frontend and
              understand backend concepts like REST APIs, Fastify, and
              PostgreSQL. On the AI/ML side, I&apos;ve worked with TensorFlow,
              Keras, and Scikit-Learn during my internships.
            </p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              I enjoy solving problems, learning new tools, and turning ideas
              into clean, functional interfaces. Currently looking for
              opportunities where I can grow and contribute.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3 md:gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, i) => (
              <GlassCard key={stat.label} className="p-5 md:p-6 text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                >
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-xs md:text-sm text-white/40">
                    {stat.label}
                  </p>
                </motion.div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
