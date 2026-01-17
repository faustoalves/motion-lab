"use client";

import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Motion Lab
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            A Next.js 16 project with Framer Motion, Tailwind CSS, and TypeScript
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            {["Next.js 16", "Framer Motion", "Tailwind CSS", "TypeScript"].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {tech}
                  </span>
                </motion.div>
              )
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
