"use client";

import { motion } from "framer-motion";

export function FloatingGlow({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.96, 1.04, 0.96] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
