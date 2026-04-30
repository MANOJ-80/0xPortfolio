"use client";

import Image from "next/image";
import { KineticText } from "@/components/ui/KineticText";
import { GlowCard } from "@/components/ui/GlowCard";
import { ScrollReveal } from "@/components/ui/ScrollAnimations";

const cards = [
  {
    title: "CORE STACK",
    content: ["Python", "FastAPI", "Node.js", "React", "Docker", "Linux"],
    mdCols: "md:col-span-1",
  },
  {
    title: "AI / LLM",
    content: ["MCP", "ChromaDB", "RAG", "Agents", "Embeddings"],
    mdCols: "md:col-span-1",
  },
  {
    title: "PHILOSOPHY",
    content:
      "I see life as a series of experiments. Some succeed, some fail, but all teach. What matters most to me is staying conscious of my choices and intentional about my direction.",
    mdCols: "md:col-span-2",
  },
  {
    title: "CURRENTLY",
    content: [
      { label: "work", value: "SWE Intern @ Froze Communication" },
      { label: "edu", value: "B.Tech CS @ PSG iTech" },
      { label: "status", value: "Freelancer, Open Source Contributor" },
      { label: "building", value: "0x Tools" },
    ],
    mdCols: "md:col-span-2",
    isStatus: true,
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="content-visibility-auto py-32 px-6 relative z-10 w-full max-w-7xl mx-auto min-h-screen pointer-events-none select-none"
    >
      <ScrollReveal
        direction="up"
        className="mb-16 relative pointer-events-auto"
      >
        <span className="font-mono text-accent-lime text-xs tracking-widest block mb-6 drop-shadow-[0_2px_10px_rgba(var(--accent-primary-rgb),0.5)]">
          [01] // DATA_DUMP
        </span>
        <h2
          className="font-display text-5xl md:text-7xl font-bold uppercase text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] cursor-pointer"
          style={{ fontFamily: "var(--font-family-brettaline)" }}
        >
          <KineticText text="About_Me" />
        </h2>
      </ScrollReveal>

      {/* Profile Photo + Cards Layout */}
      <div className="flex flex-col lg:flex-row gap-8 relative pointer-events-auto select-auto">
        {/* Profile Photo Card */}
        <ScrollReveal direction="left" className="lg:w-1/3 flex-shrink-0">
          <GlowCard className="p-4 bg-black/60 backdrop-blur-md overflow-hidden group">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/20 via-transparent to-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/Images/profile.png"
                alt="Manojkumar S - Software Engineer"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                priority
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none" />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-lime/70" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-lime/70" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-lime/70" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-lime/70" />
            </div>
            {/* Name tag */}
            <div className="mt-4 text-center">
              <p className="font-mono text-accent-lime text-sm tracking-widest">
                &gt; MANOJ
              </p>
              <p className="font-mono text-accent-cyan/80 text-xs mt-1">
                aka 0xEcho
              </p>
              <p className="font-sans text-gray-400 text-xs mt-2">
                Software Engineer • Builder
              </p>
            </div>
          </GlowCard>
        </ScrollReveal>

        {/* Info Cards Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 auto-rows-min gap-6 items-start">
          {cards.map((card, i) => (
            <ScrollReveal
              key={i}
              direction="up"
              delay={i * 0.1}
              className={card.mdCols}
            >
              <GlowCard className="p-8 bg-black/50 backdrop-blur-md h-auto md:h-full">
                <h3 className="font-mono text-xs font-semibold text-accent-lime/80 tracking-widest mb-4 uppercase">
                  {card.title}
                </h3>

                {Array.isArray(card.content) && "isStatus" in card ? (
                  // Terminal-style status display
                  <div className="space-y-2 font-mono text-sm font-medium">
                    {(card.content as { label: string; value: string }[]).map(
                      (item) => (
                        <div
                          key={item.label}
                          className="flex items-start gap-2"
                        >
                          <span className="text-accent-lime/80 font-semibold shrink-0">
                            {item.label}:
                          </span>
                          <span className="text-gray-100 font-semibold">
                            {item.value}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                ) : Array.isArray(card.content) ? (
                  <div className="flex flex-wrap gap-2">
                    {(card.content as string[]).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 border border-accent-lime/30 text-accent-lime text-xs font-mono bg-accent-lime/10 rounded hover:bg-accent-lime/20 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="font-sans font-semibold text-gray-100 text-sm md:text-base leading-relaxed">
                    {card.content}
                  </p>
                )}
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
