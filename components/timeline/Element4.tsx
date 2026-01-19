"use client";

import { motion, useTransform } from "motion/react";
import { useTimeline } from "./TimelineContext";

export default function Element4() {
  const { progress } = useTimeline();

  const opacity = useTransform(progress, [0.6, 0.8], [0, 1]);
  const x = useTransform(progress, [0.6, 0.8], [-100, 0]);

  return (
    <motion.div
      style={{ opacity, x }}
      className="w-64 h-16 bg-neon-yellow/30 border border-neon-yellow rounded-lg flex items-center justify-center"
    >
      <span className="text-neon-yellow">Elemento 4</span>
    </motion.div>
  );
}
