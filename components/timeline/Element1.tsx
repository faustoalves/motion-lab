"use client";

import { motion, useTransform } from "motion/react";
import { useTimeline } from "./TimelineContext";

export default function Element1() {
  const { progress } = useTimeline();

  const opacity = useTransform(progress, [0, 0.2], [0, 1]);
  const y = useTransform(progress, [0, 0.2], [50, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="w-64 h-16 bg-neon-pink/30 border border-neon-pink rounded-lg flex items-center justify-center"
    >
      <span className="text-neon-pink">Elemento 1</span>
    </motion.div>
  );
}
