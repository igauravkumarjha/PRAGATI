"use client";

import { motion } from "framer-motion";
import Particles from "@tsparticles/react";

export default function Hero() {
  return (
    <div className="relative h-[75vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <Particles
        id="tsparticles"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#38bdf8" },
            opacity: { value: 0.6 },
            size: { value: 3 }
          }
        }}
        className="absolute inset-0 -z-10"
      />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold drop-shadow-lg"
      >
        Welcome to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">PRAGATI</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-xl text-gray-300"
      >
        Your Virtual Science Playground 🚀
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 flex gap-6"
      >
        <a href="#experiments" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold shadow-md transition">
          Explore Simulations
        </a>
        <a href="/login" className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-xl font-semibold shadow-md transition">
          Get Started
        </a>
      </motion.div>
    </div>
  );
}
