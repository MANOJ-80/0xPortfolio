"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useSound } from "./SoundProvider";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlowCard = ({
  children,
  className = "",
  glowColor = "rgba(var(--accent-primary-rgb), 0.15)",
}: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { playHover } = useSound();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for fluid glow movement
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Transform to rotation values
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    playHover();
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`relative group ${className}`}
    >
      {/* Glow effect following mouse */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${useTransform(springX, (x) => `${(x + 0.5) * 100}%`)} ${useTransform(springY, (y) => `${(y + 0.5) * 100}%`)}, ${glowColor}, transparent 40%)`,
        }}
      />

      {/* Border glow */}
      <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-accent-lime/30 transition-colors duration-300" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

// Liquid glass effect card
interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  const { playHover } = useSound();

  return (
    <motion.div
      onMouseEnter={playHover}
      whileHover={{
        borderColor: "rgba(var(--accent-primary-rgb), 0.3)",
        boxShadow: "0 0 30px rgba(var(--accent-primary-rgb), 0.1)",
      }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      }}
    >
      {/* Subtle inner shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

      {children}
    </motion.div>
  );
};
