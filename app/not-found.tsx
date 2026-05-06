import Link from "next/link";
import type { Metadata } from "next";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { GlobalSplineBackground } from "@/components/ui/GlobalSplineBackground";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Manoj Ganesan",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent-lime selection:text-black">
      <GlobalSplineBackground />
      <BlueprintGrid />

      <main className="relative z-10 w-full max-w-4xl mx-auto py-32 px-6 flex flex-col items-center justify-center min-h-[80vh] text-center pointer-events-auto select-auto">
        <span className="font-mono text-accent-lime text-xs tracking-widest block mb-4 animate-pulse">
          [ERROR] // 404
        </span>
        <h1 
          className="text-6xl md:text-8xl font-bold uppercase leading-[0.95] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] mb-6 flex flex-wrap justify-center items-baseline gap-2 md:gap-3"
        >
          <span className="text-white font-mono tracking-tighter text-5xl md:text-7xl font-light opacity-90">404_</span>
          <span className="text-accent-lime text-4xl md:text-6xl" style={{ fontFamily: "var(--font-family-brettaline)" }}>NOT_FOUND.</span>
        </h1>
        <p className="font-mono text-gray-400 max-w-xl text-sm md:text-base leading-relaxed mb-12">
          The requested artifact or page could not be located in this directory. It may have been moved, deleted, or never existed.
        </p>

        <Link
          href="/"
          className="group relative inline-flex items-center justify-center px-10 py-5 bg-black/50 backdrop-blur-md border border-white/40 text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] hover:text-black hover:bg-accent-lime hover:border-accent-lime transition-all duration-300 font-mono text-[13px] font-bold tracking-widest uppercase"
          style={{
            clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))"
          }}
        >
          ./RETURN_HOME
        </Link>
      </main>
    </div>
  );
}