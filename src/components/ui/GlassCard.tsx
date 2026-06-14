"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  glowColor?: string;
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  glowColor = "rgba(99,102,241,0.15)",
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden",
        hover && "transition-all duration-500",
        className
      )}
      whileHover={
        hover
          ? {
              y: -5,
              borderColor: "rgba(255,255,255,0.15)",
              transition: { duration: 0.3 },
            }
          : undefined
      }
    >
      {glow && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
