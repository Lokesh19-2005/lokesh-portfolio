"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";
import { ExternalLink, Code2 } from "lucide-react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.15] transition-all duration-500">
        {/* Project Visual */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}30, ${project.color}08, #030014)`,
            }}
          />
          {/* Project Icon / Visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${project.color}25, ${project.color}08)`,
                }}
              >
                <span
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: project.color }}
                >
                  {project.title.charAt(0)}
                </span>
              </div>
              {/* Glow ring */}
              <div
                className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                style={{ background: `${project.color}15` }}
              />
            </motion.div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4">
            <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[10px] md:text-xs text-white/70 border border-white/10">
              {project.category}
            </span>
          </div>

          {/* Hover Overlay with buttons */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            {project.liveUrl !== "#" && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
            {project.githubUrl !== "#" && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View source code for ${project.title}`}
              >
                <Code2 size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-md bg-white/[0.05] text-[10px] md:text-xs text-white/50 border border-white/[0.05]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title="Featured Projects" subtitle="My Work" />

        <div className="mt-12 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
