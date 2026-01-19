"use client";

import { motion, useTransform } from "motion/react";
import { useTimeline } from "./TimelineContext";

export default function Element2() {
  const { progress } = useTimeline();

  const opacity = useTransform(progress, [0.2, 0.4], [0, 1]);
  const scale = useTransform(progress, [0.2, 0.4], [0.5, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="w-64 h-16 bg-neon-blue/30 border border-neon-blue rounded-lg flex items-center justify-center"
    >
      <span className="text-neon-blue">Elemento 2</span>
    </motion.div>
  );
}
