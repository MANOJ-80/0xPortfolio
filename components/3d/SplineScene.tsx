"use client";

import { lazy, Suspense } from "react";

// Lazy load the standard Spline component (not the Next.js one which has async issues)
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  url: string;
  className?: string;
}

export const SplineScene = ({ url, className = "" }: SplineSceneProps) => {
  return (
    <div className={`relative ${className}`}>
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
      {/* Watermark Blocker - covers bottom-right corner */}
      <div
        className="absolute bottom-0 right-0 w-48 h-16 bg-gradient-to-tl from-black via-black/80 to-transparent pointer-events-none z-50"
        aria-hidden="true"
      />
    </div>
  );
};
