"use client";

import { motion, useTransform } from "motion/react";
import { useTimeline } from "./TimelineContext";

export default function Element3() {
  const { progress } = useTimeline();

  const opacity = useTransform(progress, [0.4, 0.6], [0, 1]);
  const rotate = useTransform(progress, [0.4, 0.6], [-90, 0]);

  return (
    <motion.div
      style={{ opacity, rotate }}
      className="w-64 h-16 bg-neon-green/30 border border-neon-green rounded-lg flex items-center justify-center"
    >
      <span className="text-neon-green">Elemento 3</span>
    </motion.div>
  );
}
