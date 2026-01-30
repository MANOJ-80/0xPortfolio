"use client";

import { motion } from "framer-motion";
import { useSound } from "./SoundProvider";

interface SoundToggleProps {
  className?: string;
}

export const SoundToggle = ({ className = "" }: SoundToggleProps) => {
  const { isMuted, toggleMute, playClick } = useSound();

  const handleToggle = () => {
    toggleMute();
    if (isMuted) {
      // Will play after unmuting
      setTimeout(() => playClick(), 50);
    }
  };

  return (
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:border-accent-lime transition-colors group ${className}`}
      aria-label={isMuted ? "Enable sounds" : "Mute sounds"}
    >
      {isMuted ? (
        <svg
          className="w-5 h-5 text-white/50 group-hover:text-accent-lime transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-accent-lime"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      )}
    </motion.button>
  );
};
