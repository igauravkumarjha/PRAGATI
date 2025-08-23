"use client";

import { motion } from "framer-motion";

export default function ExperimentCard({ title, description, link, color }) {
  return (
    <motion.a
      href={link}
      whileHover={{ scale: 1.08, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className={`p-6 rounded-3xl shadow-2xl text-center cursor-pointer bg-gradient-to-br ${color} transform transition duration-300`}
    >
      <h2 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h2>
      <p className="text-gray-100 mt-3">{description}</p>
    </motion.a>
  );
}
