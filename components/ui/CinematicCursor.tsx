"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CinematicCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const hoverScale = useMotionValue(1);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const scaleSpring = useSpring(hoverScale, { damping: 24, stiffness: 360 });

  const [isEnabled, setIsEnabled] = useState(false);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setIsEnabled(media.matches);

    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const updateHoverState = (value: boolean) => {
      if (isHoveringRef.current === value) return;
      isHoveringRef.current = value;
      hoverScale.set(value ? 2.5 : 1);
    };

    const moveCursor = (e: PointerEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      updateHoverState(
        target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          !!target.closest('[data-hover="true"]'),
      );
    };

    const handlePointerLeaveWindow = () => {
      cursorX.set(-100);
      cursorY.set(-100);
      updateHoverState(false);
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeaveWindow);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerleave", handlePointerLeaveWindow);
    };
  }, [cursorX, cursorY, hoverScale, isEnabled]);

  if (!isEnabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="w-8 h-8 rounded-full border border-white bg-white/10 backdrop-blur-[2px]"
        style={{
          scale: scaleSpring,
          opacity: 1,
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
        }}
      />
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-accent-lime rounded-full" />
    </motion.div>
  );
};
