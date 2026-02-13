"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export const LenisScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Also scroll Lenis to top
    lenis.scrollTo(0, { immediate: true });

    let rafId = 0;
    let isActive = true;

    function raf(time: number) {
      if (!isActive) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const handleVisibility = () => {
      if (document.hidden) {
        isActive = false;
        cancelAnimationFrame(rafId);
        return;
      }

      if (!isActive) {
        isActive = true;
        rafId = requestAnimationFrame(raf);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      isActive = false;
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibility);
      lenis.destroy();
    };
  }, []);

  return null;
};
