"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="Career Journey"
        />

        <div className="mt-20 relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              className={`relative flex items-start gap-8 mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-black z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring" }}
              >
                <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20" />
              </motion.div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <motion.div
                  className="relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm group hover:border-white/[0.15] transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-indigo-400">{exp.role}</p>
                    </div>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.05] text-xs text-white/40 border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs text-white/30">{exp.duration}</span>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
