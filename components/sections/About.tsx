"use client";

import { KineticText } from "@/components/ui/KineticText";
import { SplineScene } from "@/components/3d/SplineScene";
import { GlowCard } from "@/components/ui/GlowCard";
import { ScrollReveal } from "@/components/ui/ScrollAnimations";

const cards = [
  {
    title: "CORE STACK",
    content: ["Python", "FastAPI", "Node.js", "React", "Docker", "Linux"],
    cols: "col-span-1",
  },
  {
    title: "AI / LLM",
    content: ["MCP", "ChromaDB", "RAG", "Agents", "Embeddings"],
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
      "Security is architectural, not an afterthought. Building systems that are both battle-tested and blazingly fast.",
    cols: "col-span-2",
  },
  {
    title: "CURRENTLY",
    content:
      "B.Tech CS @ PSG iTech • Open Source Contributor • Building 0x Tools",
    cols: "col-span-1",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 relative z-10 w-full max-w-7xl mx-auto min-h-screen pointer-events-none select-none"
    >
      {/* Spline Background Animation - Fullscreen Fixed */}
      <div className="fixed inset-0 -z-10 opacity-80 spline-container pointer-events-auto">
        <SplineScene
          url="https://prod.spline.design/ParJWjNwBpaB6b-N/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      <ScrollReveal
        direction="up"
        className="mb-16 relative pointer-events-auto"
      >
        <span className="font-mono text-accent-lime text-xs tracking-widest block mb-2 drop-shadow-[0_2px_10px_rgba(204,255,0,0.5)]">
          [01] // DATA_DUMP
        </span>
        <h2
          className="font-display text-5xl md:text-7xl font-bold uppercase text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] cursor-pointer"
          style={{ fontFamily: "var(--font-family-brettaline)" }}
        >
          <KineticText text="About_Me" />
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative pointer-events-auto select-auto">
        {cards.map((card, i) => (
          <ScrollReveal
            key={i}
            direction="up"
            delay={i * 0.1}
            className={card.cols}
          >
            <GlowCard className="p-8 bg-black/50 backdrop-blur-md h-full">
              <h3 className="font-mono text-xs text-accent-lime/70 tracking-widest mb-4 uppercase">
                {card.title}
              </h3>

              {Array.isArray(card.content) ? (
                <div className="flex flex-wrap gap-2">
                  {card.content.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 border border-accent-lime/30 text-accent-lime text-xs font-mono bg-accent-lime/10 rounded hover:bg-accent-lime/20 transition-colors cursor-default"
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
            </GlowCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
