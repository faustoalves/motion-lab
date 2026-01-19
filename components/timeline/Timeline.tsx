"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useState } from "react";
import { TimelineProvider } from "./TimelineContext";
import Element1 from "./Element1";
import Element2 from "./Element2";
import Element3 from "./Element3";
import Element4 from "./Element4";
import Controls from "./Controls";



export default function Timeline() {
  const progress = useMotionValue(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const TOTAL = 3; // duração total da timeline

  const play = () => {
    setIsPlaying(true);
    const current = progress.get();
    const remaining = 1 - current;
    const duration = TOTAL * remaining;

    animate(progress, 1, {
      duration,
      onComplete: () => setIsPlaying(false)
    });
  };

  const reverse = () => {
    setIsPlaying(true);
    const current = progress.get();
    const duration = TOTAL * current;

    animate(progress, 0, {
      duration,
      onComplete: () => setIsPlaying(false)
    });
  };

  const pause = () => {
    progress.stop();
    setIsPlaying(false);
  };

  const reset = () => {
    progress.set(0);
    setIsPlaying(false);
  };

  return (
    <TimelineProvider progress={progress}>
      <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center p-8">

        {/* ELEMENTOS */}
        <div className="space-y-8 mb-12">
          <Element1 />
          <Element2 />
          <Element3 />
          <Element4 />
        </div>

        {/* CONTROLES */}
        <Controls
          onPlay={play}
          onPause={pause}
          onReverse={reverse}
          onReset={reset}
          isPlaying={isPlaying}
        />

        {/* PROGRESS BAR */}
        <motion.div className="w-full max-w-2xl h-2 bg-gray-800 rounded-full mt-8 overflow-hidden">
          <motion.div
            style={{ scaleX: progress }}
            className="h-full bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green origin-left"
          />
        </motion.div>
      </div>
    </TimelineProvider>
  );
}
