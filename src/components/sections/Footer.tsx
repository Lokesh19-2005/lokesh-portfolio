"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-sm text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2024 Pediredla Sai Lokesh. All rights reserved.
          </motion.p>

          <motion.p
            className="flex items-center gap-1.5 text-sm text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Crafted with <Heart size={14} className="text-red-400 fill-red-400" /> and modern tech
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {["Next.js", "React", "Three.js", "Framer"].map((tech) => (
              <span key={tech} className="text-xs text-white/30">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
