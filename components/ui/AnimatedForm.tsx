"use client";

import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "./SoundProvider";

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const AnimatedInput = forwardRef<HTMLInputElement, AnimatedInputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const { playHover, playClick } = useSound();

    const handleFocus = () => {
      setIsFocused(true);
      playHover();
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
    };

    return (
      <div className="relative group">
        {label && (
          <motion.label
            animate={{
              y: isFocused || hasValue ? -24 : 0,
              scale: isFocused || hasValue ? 0.85 : 1,
              color: isFocused
                ? "var(--accent-primary)"
                : error
                  ? "#ff4444"
                  : "rgba(255,255,255,0.5)",
            }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 top-4 font-mono text-xs uppercase tracking-wider origin-left pointer-events-none"
          >
            {label}
          </motion.label>
        )}

        <motion.div
          animate={error ? { x: [0, -10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <input
            ref={ref}
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`w-full py-4 px-4 text-sm font-mono text-white bg-black/50 backdrop-blur-md border rounded-lg focus:outline-none transition-all placeholder:text-white/30 ${
              error
                ? "border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                : isFocused
                  ? "border-accent-lime shadow-[0_0_15px_rgba(var(--accent-primary-rgb),0.2)]"
                  : "border-white/20"
            } ${className}`}
          />
        </motion.div>

        {/* Focus line animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-accent-lime"
          initial={{ width: "0%" }}
          animate={{ width: isFocused ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.span
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute -bottom-5 left-0 text-xs text-red-400 font-mono"
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedInput.displayName = "AnimatedInput";

// Animated button with loading state
interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "primary" | "secondary";
}

export const AnimatedButton = forwardRef<
  HTMLButtonElement,
  AnimatedButtonProps
>(
  (
    {
      children,
      isLoading,
      variant = "primary",
      className = "",
      onClick,
      disabled,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const { playClick } = useSound();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      playClick();
      onClick?.(e);
    };

    const variants = {
      primary: "bg-accent-lime text-black hover:bg-white",
      secondary:
        "bg-white/10 text-white hover:bg-white/20 border border-white/20",
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={handleClick}
        disabled={isLoading || disabled}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative px-8 py-4 font-bold tracking-widest text-sm uppercase transition-all overflow-hidden ${variants[variant]} ${className}`}
      >
        <motion.span animate={{ opacity: isLoading ? 0 : 1 }}>
          {children}
        </motion.span>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>
    );
  },
);

AnimatedButton.displayName = "AnimatedButton";
