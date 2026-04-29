"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { KineticText } from "@/components/ui/KineticText";

import Link from "next/link";

const projects = [
  {
    id: "01",
    name: "0xMEMORY",
    desc: "Cross-LLM Context Engine with Persistent Memory",
    tech: "MCP / ChromaDB / Python / RAG",
    url: "https://github.com/MANOJ-80/0xMemory",
  },
  {
    id: "02",
    name: "0xLYNK",
    desc: "Direct peer-to-peer file transfer in the browser using WebRTC",
    tech: "WebRTC / JavaScript / P2P",
    url: "https://github.com/MANOJ-80/0xLynk",
  },
  {
    id: "03",
    name: "0xARMOR",
    desc: "Distributed Security Hardening & Compliance Platform",
    tech: "Python / FastAPI / Docker / Linux",
    url: "https://github.com/MANOJ-80/0xArmor",
  },
  {
    id: "04",
    name: "0xRUPEX",
    desc: "Privacy-First Personal Finance Analytics",
    tech: "Android (Kotlin) / Node.js / Self-Hosted",
    url: "https://github.com/MANOJ-80/0xRupex",
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="content-visibility-auto py-24 px-6 relative z-10 w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center pointer-events-none select-none"
    >
      <div className="mb-12 border-b border-white/20 pb-8 flex items-end justify-between pointer-events-auto select-auto">
        <div>
          <span className="font-mono text-accent-lime text-xs tracking-widest block mb-6 drop-shadow-[0_2px_10px_rgba(204,255,0,0.5)]">
            [02] // ARTIFACTS
          </span>
          <h2
            className="font-display text-4xl md:text-6xl font-bold uppercase text-white leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "var(--font-family-brettaline)" }}
          >
            <KineticText text="Selected_Works" />
          </h2>
        </div>
        <div className="hidden md:block font-mono text-xs text-accent-silver/60 text-right drop-shadow-lg">
          /// INDEX_OF_PROJECTS <br />
          /// ACCESS_LEVEL: PUBLIC
        </div>
      </div>

      <div className="flex flex-col pointer-events-auto select-auto">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, paddingLeft: "10px" }}
            onHoverStart={() => setActiveProject(project.id)}
            onHoverEnd={() => setActiveProject(null)}
            className="group py-8 border-b border-white/20 relative cursor-pointer transition-all duration-300 bg-black/50 backdrop-blur-md px-4 hover:bg-black/70 block"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <span className="col-span-1 font-mono text-accent-lime/60 text-base group-hover:text-accent-lime transition-colors">
                {project.id}
              </span>
              <h3
                className="col-span-4 text-xl md:text-3xl font-bold uppercase text-white group-hover:text-accent-lime transition-colors drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
                style={{ fontFamily: "var(--font-family-brooklyn)" }}
              >
                {project.name}
              </h3>
              <div className="col-span-4 text-left">
                <span className="font-mono text-sm text-accent-silver/70">
                  {project.desc}
                </span>
              </div>
              <div className="hidden md:block col-span-3 text-right">
                <p className="font-mono text-accent-silver/50 text-xs uppercase tracking-wider">
                  {project.tech}
                </p>
              </div>
            </div>

            {/* Hover Reveal */}
            {activeProject === project.id && (
              <motion.div
                layoutId="project-preview"
                className="absolute top-0 right-1/4 w-64 h-full bg-accent-lime/5 border-l border-accent-lime backdrop-blur-sm pointer-events-none hidden md:flex items-center justify-center z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span className="font-mono text-accent-lime text-xs animate-pulse">
                  → VIEW ON GITHUB
                </span>
              </motion.div>
            )}
          </motion.a>
        ))}
      </div>

      <div className="mt-16 flex justify-center pointer-events-auto select-auto">
        <Link
          href="/works"
          className="group relative inline-flex items-center justify-center px-10 py-5 bg-black/50 backdrop-blur-md border border-white/40 text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] hover:text-black hover:bg-accent-lime hover:border-accent-lime transition-all duration-300 font-mono text-[13px] font-bold tracking-widest uppercase"
          style={{
            clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))"
          }}
        >
          ./SEE_MORE_WORKS
        </Link>
      </div>
    </section>
  );
};
