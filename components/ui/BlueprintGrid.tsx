"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const BlueprintGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [time, setTime] = useState("");

  useEffect(() => {
    // Clock
    const timer = setInterval(() => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", { hour12: false }) +
          ":" +
          d.getMilliseconds().toString().padStart(3, "0"),
      );
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gridSize = 60; // Slightly larger grid
    const width = canvas.width;
    const height = canvas.height;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Grid Color - slightly more visible
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Intersections
      ctx.fillStyle = "rgba(204, 255, 0, 0.3)"; // Brighter lime dots
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          // Occasional brighter dots
          if (Math.random() > 0.95) {
            ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
          } else {
            ctx.fillRect(x - 1, y - 1, 2, 2);
          }
        }
      }
    };

    draw();
  }, [windowSize]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Corner HUD Elements - Increased Opacity */}
      <div className="absolute top-8 left-8 font-mono text-xs text-accent-lime/60">
        [SYS_ONLINE] :: {time}
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
        COORD: {windowSize.width}x{windowSize.height} <br />
        LOC: INDIA
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-accent-silver/40">
        STATUS: STABLE
      </div>
    </div>
  );
};
