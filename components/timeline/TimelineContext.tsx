"use client";

import { createContext, useContext } from "react";
import { MotionValue } from "motion/react";

interface TimelineContextType {
  progress: MotionValue<number>;
}

const TimelineContext = createContext<TimelineContextType | null>(null);

export function TimelineProvider({
  children,
  progress
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
}) {
  return (
    <TimelineContext.Provider value={{ progress }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const ctx = useContext(TimelineContext);
  if (!ctx) throw new Error("useTimeline must be inside TimelineProvider");
  return ctx;
}
