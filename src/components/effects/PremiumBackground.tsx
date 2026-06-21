"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function PremiumBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#030014]" />

      {/* Static blobs on mobile, animated on desktop */}
      {isMobile ? (
        <>
          <div
            className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[80px]"
            style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
          />
          <div
            className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full opacity-[0.04] blur-[80px]"
            style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
          />
        </>
      ) : (
        <>
          <motion.div
            className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[100px]"
            style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -60, 40, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[30%] right-[-15%] w-[700px] h-[700px] rounded-full opacity-[0.05] blur-[120px]"
            style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
            animate={{
              x: [0, -60, 30, 0],
              y: [0, 50, -30, 0],
              scale: [1.1, 0.9, 1.15, 1.1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[100px]"
            style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
            animate={{
              x: [0, 40, -60, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Dot grid - desktop only */}
      <div
        className="absolute inset-0 opacity-[0.03] hidden md:block"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top light beam - desktop only */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[40vh] bg-gradient-to-b from-indigo-500/20 to-transparent hidden md:block" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, #030014 75%)" }}
      />
    </div>
  );
}
