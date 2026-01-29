"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { KineticText } from "@/components/ui/KineticText";

const projects = [
  {
    id: "01",
    name: "0xARMOR",
    desc: "Distributed Security Compliance Platform",
    tech: "Python / FastAPI / Docker",
  },
  {
    id: "02",
    name: "0xMEMORY",
    desc: "Cross-LLM Context Engine",
    tech: "MCP / ChromaDB / RAG",
  },
  {
    id: "03",
    name: "0xSHELF",
    desc: "E-Commerce Microservices",
    tech: "React / Node.js / MongoDB",
  },
  {
    id: "04",
    name: "0xRUPEX",
    desc: "Local-First Financial Analytics",
    tech: "Kotlin / Self-Hosted",
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 relative z-10 w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center"
    >
      <div className="mb-12 border-b border-white/20 pb-8 flex items-end justify-between bg-black/60 backdrop-blur-xl p-6 rounded-lg">
        <div>
          <span className="font-mono text-accent-lime text-xs tracking-widest block mb-2 drop-shadow-[0_2px_10px_rgba(204,255,0,0.5)]">
            [02] // ARTIFACTS
          </span>
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase text-white leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            <KineticText text="Selected_Works" />
          </h2>
        </div>
        <div className="hidden md:block font-mono text-xs text-accent-silver/60 text-right drop-shadow-lg">
          /// INDEX_OF_PROJECTS <br />
          /// ACCESS_LEVEL: PUBLIC
        </div>
      </div>

      <div className="flex flex-col">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, paddingLeft: "10px" }}
            onHoverStart={() => setActiveProject(project.id)}
            onHoverEnd={() => setActiveProject(null)}
            className="group py-8 border-b border-white/20 relative cursor-pointer transition-all duration-300 bg-black/50 backdrop-blur-md px-4 hover:bg-black/70"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <span className="col-span-1 font-mono text-accent-lime/60 text-base group-hover:text-accent-lime transition-colors">
                {project.id}
              </span>
              <h3 className="col-span-4 font-display text-2xl md:text-4xl font-bold uppercase text-white group-hover:text-accent-lime transition-colors drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
                {project.name}
              </h3>
              <div className="col-span-4 text-left">
                <span className="font-mono text-sm text-accent-silver/70">
                  {project.desc}
                </span>
              </div>
              <div className="col-span-3 text-right">
                <p className="font-mono text-accent-silver/50 text-xs uppercase tracking-wider">
                  {project.tech}
                </p>
              </div>
            </div>

            {/* Hover Reveal - Keep simplified */}
            {activeProject === project.id && (
              <motion.div
                layoutId="project-preview"
                className="absolute top-0 right-1/4 w-64 h-full bg-accent-lime/5 border-l border-accent-lime backdrop-blur-sm pointer-events-none hidden md:flex items-center justify-center z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span className="font-mono text-accent-lime text-xs animate-pulse">
                  [PREVIEW_ACTIVE]
                </span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
