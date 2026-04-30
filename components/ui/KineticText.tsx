"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useSound } from "./SoundProvider";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

interface KineticTextProps {
  text: string;
  className?: string;
  enableScroll?: boolean;
}

export const KineticText = ({
  text,
  className,
  enableScroll = true,
}: KineticTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const { playHover } = useSound();

  // Scroll-based typography effects
  const { scrollYProgress } = useScroll();

  // Smooth spring for fluid animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll into typography effects
  const letterSpacing = useTransform(smoothProgress, [0, 0.5, 1], [0, 3, 6]);
  const fontWeight = useTransform(smoothProgress, [0, 0.5, 1], [700, 800, 900]);
  const skewX = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, -1, 1, 0]);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

    let intervalId: NodeJS.Timeout;
    let iteration = 0;

    intervalId = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join(""),
      );

      if (iteration >= text.length) {
        clearInterval(intervalId);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(intervalId);
  }, [isHovered, text]);

  const handleHover = () => {
    setIsHovered(true);
    playHover();
  };

  return (
    <motion.span
      className={className}
      onMouseEnter={handleHover}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "inline-block",
        cursor: "default",
        letterSpacing: enableScroll ? letterSpacing : 0,
        fontWeight: enableScroll ? fontWeight : undefined,
        skewX: enableScroll ? skewX : 0,
      }}
      whileHover={{
        scale: 1.02,
        textShadow: "0 0 30px rgba(var(--accent-primary-rgb), 0.5)",
      }}
      transition={{ duration: 0.2 }}
    >
      {displayText}
    </motion.span>
  );
};
