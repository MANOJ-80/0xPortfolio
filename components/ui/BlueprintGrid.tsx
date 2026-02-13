"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const BlueprintGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const coordRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const updateClock = () => {
      if (!timeRef.current) return;
      const d = new Date();
      timeRef.current.textContent =
        "[SYS_ONLINE] :: " +
        d.toLocaleTimeString("en-US", { hour12: false }) +
        ":" +
        d.getMilliseconds().toString().padStart(3, "0");
    };

    updateClock();
    const timer = setInterval(() => {
      if (document.hidden) return;
      updateClock();
    }, 100);

    const handleVisibility = () => {
      if (!document.hidden) updateClock();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawGrid = (width: number, height: number) => {
      const gridSize = 60;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(204, 255, 0, 0.3)";
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          if (Math.random() > 0.95) {
            ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
          } else {
            ctx.fillRect(x - 1, y - 1, 2, 2);
          }
        }
      }
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (coordRef.current) {
        coordRef.current.textContent = `COORD: ${width}x${height}`;
      }

      drawGrid(width, height);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Corner HUD Elements - Increased Opacity */}
      <div
        ref={timeRef}
        className="absolute top-8 left-8 font-mono text-xs text-accent-lime/60"
      >
        [SYS_ONLINE] :: --:--:--:000
      </div>

      <div className="absolute bottom-8 right-8 font-mono text-xs text-accent-lime/60 flex flex-col items-end gap-1">
        <span>SCROLL_Y</span>
        <motion.div
          style={{ width: 100, height: 2, background: "rgba(255,255,255,0.1)" }}
        >
          <motion.div
            className="h-full bg-accent-lime"
            style={{ scaleX: smoothScroll, transformOrigin: "left" }}
          />
        </motion.div>
      </div>

      <div className="absolute top-8 right-8 font-mono text-xs text-accent-silver/40 text-right">
        <span ref={coordRef}>COORD: 0x0</span> <br />
        LOC: INDIA
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-accent-silver/40">
        STATUS: STABLE
      </div>
    </div>
  );
};
