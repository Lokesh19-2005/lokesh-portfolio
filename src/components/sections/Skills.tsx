"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const categories = [
  { key: "frontend", label: "Frontend", color: "#6366f1" },
  { key: "backend", label: "Backend", color: "#8b5cf6" },
  { key: "database", label: "Database", color: "#06b6d4" },
  { key: "aiml", label: "AI / ML", color: "#f59e0b" },
  { key: "tools", label: "Tools", color: "#10b981" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

// Mobile: Grid-based skill cards
function SkillCard({
  skill,
  index,
  color,
}: {
  skill: { name: string; level: number };
  index: number;
  color: string;
}) {
  return (
    <motion.div
      className="relative p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm group hover:border-white/[0.15] transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -3 }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-white">{skill.name}</span>
        <span className="text-xs text-white/40">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
      {/* Subtle glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${color}08, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

// Desktop: Orbital skill orbs
function SkillOrb({
  skill,
  index,
  color,
  total,
}: {
  skill: { name: string; level: number };
  index: number;
  color: string;
  total: number;
}) {
  const [hovered, setHovered] = useState(false);

  const angle = (index / total) * Math.PI * 2;
  const radius = 100 + (index % 3) * 50;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 200 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.3 }}
      >
        <div
          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-[10px] lg:text-xs font-medium text-white border backdrop-blur-sm transition-all duration-300"
          style={{
            backgroundColor: `${color}20`,
            borderColor: hovered ? color : `${color}40`,
            boxShadow: hovered ? `0 0 30px ${color}40` : "none",
          }}
        >
          {skill.name.split(" ")[0]}
        </div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-2 rounded-lg bg-black/90 border border-white/10 backdrop-blur-xl whitespace-nowrap z-50"
              initial={{ opacity: 0, y: -5, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.9 }}
            >
              <p className="text-sm font-medium text-white">{skill.name}</p>
              <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <p className="text-xs text-white/40 mt-1">
                Proficiency: {skill.level}%
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("frontend");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentSkills = skills[activeCategory];
  const currentColor =
    categories.find((c) => c.key === activeCategory)?.color || "#6366f1";

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title="Skill Galaxy" subtitle="Technologies" />

        {/* Category Tabs */}
        <div className="mt-10 md:mt-16 flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-3.5 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border",
                activeCategory === cat.key
                  ? "text-white border-white/20 shadow-lg"
                  : "text-white/50 border-white/[0.05] hover:text-white/80 hover:border-white/10"
              )}
              style={
                activeCategory === cat.key
                  ? {
                      backgroundColor: `${cat.color}20`,
                      borderColor: `${cat.color}50`,
                      boxShadow: `0 0 20px ${cat.color}20`,
                    }
                  : {}
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile: Grid View */}
        <div className="mt-10 md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {currentSkills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={i}
                  color={currentColor}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop: Galaxy View */}
        <div className="mt-16 relative h-[450px] hidden md:flex items-center justify-center">
          {/* Central Core */}
          <motion.div
            className="absolute w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center z-10"
            style={{
              background: `radial-gradient(circle, ${currentColor}30, transparent)`,
              boxShadow: `0 0 60px ${currentColor}20`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border flex items-center justify-center"
              style={{ borderColor: `${currentColor}50` }}
            >
              <span className="text-xs font-bold text-white/80">AI</span>
            </div>
          </motion.div>

          {/* Orbit Rings */}
          {[100, 150, 200].map((radius, i) => (
            <motion.div
              key={radius}
              className="absolute rounded-full border border-white/[0.03]"
              style={{
                width: radius * 2,
                height: radius * 2,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            />
          ))}

          {/* Skill Orbs */}
          <AnimatePresence mode="wait">
            {mounted && (
              <motion.div
                key={activeCategory}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {currentSkills.map((skill, i) => (
                  <SkillOrb
                    key={skill.name}
                    skill={skill}
                    index={i}
                    color={currentColor}
                    total={currentSkills.length}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
