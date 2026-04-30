"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const Hero = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative h-screen w-full flex items-center justify-start overflow-hidden z-20 pointer-events-none select-none pl-[15vw]"
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl pointer-events-auto select-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          {/* Top Line */}
          <div className="flex items-center gap-3 mb-4 opacity-90">
            <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-accent-lime">
              ~/0XECHO_
            </span>
            <span className="text-gray-600 text-[10px]">•</span>
            <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-accent-lime uppercase">
              Software Engineer
            </span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-title"
            className="text-[7rem] md:text-[11rem] leading-[0.85] tracking-tight mb-8 font-wide flex gap-4 group cursor-default"
          >
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] group-hover:-translate-y-1">MANOJ</span>
            <span className="text-accent-lime drop-shadow-[0_0_30px_rgba(var(--accent-primary-rgb),0.3)] transition-all duration-500 group-hover:drop-shadow-[0_0_50px_rgba(var(--accent-primary-rgb),0.6)] group-hover:-translate-y-1">G.</span>
          </h1>

          <p className="sr-only">
            Manoj Ganesan, also known as Manoj G and 0xEcho, is a Software
            Engineer focused on full stack, backend, AI, and security projects.
          </p>

          {/* Subheading / Skills */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-gray-300 uppercase flex flex-wrap gap-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <span>BACKEND</span> 
              <span className="text-gray-500">•</span> 
              <span>SECURITY</span> 
              <span className="text-gray-500">•</span> 
              <span>FULL STACK</span>
              <span className="text-gray-500">•</span> 
              <span>AI</span>
            </span>
            <div className="h-[1px] w-32 bg-gradient-to-r from-accent-lime/50 to-transparent"></div>
          </div>

          {/* Description */}
          <div className="mb-12 font-mono italic text-gray-200 text-sm md:text-[15px] leading-loose max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <p>This is my digital workspace.</p>
            <p>A collection of projects, experiments,</p>
            <p>and ideas I've built over time.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-[13px] font-bold tracking-widest uppercase">
            <MagneticButton>
              <a
                href="#about"
                className="relative inline-flex items-center justify-center px-8 py-4 bg-accent-lime text-black hover:bg-white transition-colors duration-300"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))"
                }}
              >
                ./EXPLORE
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-8 py-4 text-gray-200 hover:text-white transition-colors duration-300 bg-black/40 backdrop-blur-md border border-white/20 hover:border-accent-lime/50"
              >
                ./CONNECT
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
