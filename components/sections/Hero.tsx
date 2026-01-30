"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden z-20 pointer-events-none select-none">
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pointer-events-auto select-auto">
        {/* Liquid Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Glass Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

          {/* Status Badge */}
          <div className="relative flex justify-center mb-8">
            <div
              className="flex items-center gap-3 px-5 py-2.5 rounded-full"
              style={{
                background: "rgba(204, 255, 0, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(204, 255, 0, 0.3)",
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent-lime animate-pulse shadow-[0_0_15px_#CCFF00]"></span>
              <span className="font-mono text-xs text-accent-lime tracking-widest uppercase">
                Available for Work
              </span>
            </div>
          </div>

          {/* Main Heading - Ultra Wide Typography with Brettaline */}
          <h1
            className="relative text-6xl sm:text-7xl md:text-9xl font-bold tracking-wider leading-[0.9] mb-8"
            style={{ fontFamily: "var(--font-family-brettaline)" }}
          >
            <span className="text-white block drop-shadow-lg">System</span>
            <span className="text-accent-lime block drop-shadow-[0_0_30px_rgba(204,255,0,0.5)]">
              Architect
            </span>
          </h1>

          {/* Description */}
          <p className="relative font-mono text-sm md:text-base text-gray-300 max-w-lg mx-auto leading-relaxed mb-10">
            Building scalable systems & secure infrastructure.{" "}
            <span className="text-accent-lime font-semibold">
              Full-stack engineering
            </span>{" "}
            with a focus on performance, security & AI integration.
          </p>

          {/* CTA Buttons */}
          <div className="relative flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <a
                href="#about"
                className="inline-block px-8 py-4 bg-accent-lime text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(204,255,0,0.5)]"
              >
                Explore
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="inline-block px-8 py-4 text-white font-mono text-sm tracking-widest uppercase hover:text-accent-lime transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Connect
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
