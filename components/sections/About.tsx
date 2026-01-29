"use client";

import { motion } from "framer-motion";
import { KineticText } from "@/components/ui/KineticText";
import { SplineScene } from "@/components/3d/SplineScene";

const cards = [
  {
    title: "STACK",
    content: ["Next.js", "TypeScript", "Node.js", "Python", "Rust", "Solidity"],
    cols: "col-span-1",
  },
  {
    title: "LOCATION",
    content: "Coimbatore, TN, India (UTC+5:30)",
    cols: "col-span-1",
  },
  {
    title: "PHILOSOPHY",
    content:
      "Security is not a feature, it's the foundation. Building systems requires both architectural precision and chaotic resilience.",
    cols: "col-span-2",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 relative z-10 w-full max-w-7xl mx-auto min-h-screen"
    >
      {/* Spline Background Animation - Fullscreen Fixed */}
      <div className="fixed inset-0 -z-10 opacity-80 spline-container">
        <SplineScene
          url="https://prod.spline.design/ParJWjNwBpaB6b-N/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      <div className="mb-16 relative">
        <span className="font-mono text-accent-lime text-xs tracking-widest block mb-2 drop-shadow-[0_2px_10px_rgba(204,255,0,0.5)]">
          [01] // DATA_DUMP
        </span>
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
          <KineticText text="About_Me" />
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, borderColor: "#CCFF00" }}
            className={`p-8 border border-white/20 bg-black/50 backdrop-blur-md rounded-lg relative group hover:bg-black/70 transition-all ${card.cols}`}
          >
            <h3 className="font-mono text-xs text-accent-lime/70 tracking-widest mb-4 uppercase">
              {card.title}
            </h3>

            {Array.isArray(card.content) ? (
              <div className="flex flex-wrap gap-2">
                {card.content.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 border border-accent-lime/30 text-accent-lime text-xs font-mono bg-accent-lime/10 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : (
              <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed">
                {card.content}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
