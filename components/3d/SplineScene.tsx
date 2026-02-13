"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Lazy load the standard Spline component (not the Next.js one which has async issues)
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  url: string;
  className?: string;
}

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    const attributes: WebGLContextAttributes = {
      antialias: true,
      alpha: true,
      failIfMajorPerformanceCaveat: true,
      powerPreference: "high-performance",
    };

    const context = (
      canvas.getContext("webgl2", attributes) ||
      canvas.getContext("webgl", attributes) ||
      canvas.getContext("experimental-webgl", attributes)
    ) as WebGLRenderingContext | WebGL2RenderingContext | null;

    if (!context) return false;

    // Release test context immediately.
    context.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
};

export const SplineScene = ({ url, className = "" }: SplineSceneProps) => {
  const [webglSupported, setWebglSupported] = useState(false);

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      setWebglSupported(supportsWebGL());
    });

    return () => window.cancelAnimationFrame(rafId);
  }, []);

  // Track scroll progress across the entire page
  const { scrollYProgress } = useScroll();

  // Rotation effect: rotates the scene vertically as you scroll (like click-drag behavior)
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        rotateX,
        transformPerspective: 1200,
        transformOrigin: "center center",
      }}
    >
      {!webglSupported ? (
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(204,255,0,0.12),transparent_45%),radial-gradient(circle_at_70%_65%,rgba(255,255,255,0.08),transparent_50%),linear-gradient(180deg,rgba(6,6,6,0.8),rgba(3,3,3,0.95))]" />
      ) : (
      <Suspense
        fallback={
          <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-black/50">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-accent-lime border-t-transparent rounded-full animate-spin" />
              <span className="font-mono text-xs text-accent-lime/60">
                Loading 3D Scene...
              </span>
            </div>
          </div>
        }
      >
        <Spline scene={url} />
      </Suspense>
      )}
      {/* Watermark Blocker - covers bottom-right corner */}
      <div
        className="absolute bottom-0 right-0 w-48 h-16 bg-gradient-to-tl from-black via-black/80 to-transparent pointer-events-none z-50"
        aria-hidden="true"
      />
    </motion.div>
  );
};
