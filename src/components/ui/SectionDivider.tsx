"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative w-full flex justify-center py-2">
      <motion.div
        className="w-32 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
