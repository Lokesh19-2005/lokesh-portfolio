"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-xs md:text-sm text-white/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2024 Pediredla Sai Lokesh. All rights reserved.
          </motion.p>

          <motion.p
            className="flex items-center gap-1.5 text-xs md:text-sm text-white/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built with{" "}
            <Heart size={12} className="text-red-400 fill-red-400" /> using
            Next.js & React
          </motion.p>

          <motion.p
            className="text-xs text-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Designed & Developed by Sai Lokesh
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
