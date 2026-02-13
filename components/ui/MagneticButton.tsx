"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useSound } from "./SoundProvider";

interface RippleType {
  x: number;
  y: number;
  id: number;
}

export const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 20, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 220, damping: 20, mass: 0.1 });
  const [ripples, setRipples] = useState<RippleType[]>([]);
  const { playHover, playClick } = useSound();

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const handleMouseEnter = useCallback(() => {
    playHover();
  }, [playHover]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      playClick();

      // Create ripple effect
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();

      setRipples((prev) => [...prev, { x, y, id }]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    },
    [playClick],
  );

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={reset}
      onClick={handleClick}
      style={{ x: springX, y: springY }}
      className="relative z-10 overflow-hidden"
    >
      {children}

      {/* Ripple Effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute pointer-events-none bg-accent-lime/30 rounded-full"
            style={{
              left: ripple.x - 25,
              top: ripple.y - 25,
              width: 50,
              height: 50,
            }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};
