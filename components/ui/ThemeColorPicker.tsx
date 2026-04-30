"use client";

import { useEffect, useState } from "react";
import { Check, Palette } from "lucide-react";

type AccentColor = {
  name: string;
  value: string;
  rgb: string;
};

const STORAGE_KEY = "0xme-accent-color";

const accentColors: AccentColor[] = [
  { name: "Lime", value: "#ccff00", rgb: "204, 255, 0" },
  { name: "Volt", value: "#00f5ff", rgb: "0, 245, 255" },
  { name: "Violet", value: "#b26cff", rgb: "178, 108, 255" },
  { name: "Signal", value: "#ff4d00", rgb: "255, 77, 0" },
  { name: "Pulse", value: "#ff2f7d", rgb: "255, 47, 125" },
];

const defaultAccent = accentColors[0];

const applyAccentColor = (color: AccentColor) => {
  document.documentElement.style.setProperty("--accent-primary", color.value);
  document.documentElement.style.setProperty("--accent-primary-rgb", color.rgb);
  window.dispatchEvent(new CustomEvent("accent-color-change"));
};

export const ThemeColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(defaultAccent);

  useEffect(() => {
    const savedColor = window.localStorage.getItem(STORAGE_KEY);
    const initialColor =
      accentColors.find((color) => color.value === savedColor) ?? defaultAccent;

    setSelectedColor(initialColor);
    applyAccentColor(initialColor);
  }, []);

  const selectColor = (color: AccentColor) => {
    setSelectedColor(color);
    applyAccentColor(color);
    window.localStorage.setItem(STORAGE_KEY, color.value);
    setIsOpen(false);
  };

  return (
    <div className="fixed right-6 top-6 z-50 pointer-events-auto">
      <button
        type="button"
        aria-label="Choose accent color"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:border-accent-lime hover:text-accent-lime"
      >
        <Palette size={18} />
        <span
          className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border border-black"
          style={{ backgroundColor: selectedColor.value }}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-52 rounded-lg border border-white/15 bg-black/85 p-3 shadow-[0_0_35px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
              Primary
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-lime">
              {selectedColor.name}
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {accentColors.map((color) => {
              const isSelected = color.value === selectedColor.value;

              return (
                <button
                  key={color.value}
                  type="button"
                  aria-label={`Use ${color.name} accent`}
                  title={color.name}
                  onClick={() => selectColor(color)}
                  className="relative h-8 rounded border border-white/15 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-lime"
                  style={{ backgroundColor: color.value }}
                >
                  {isSelected && (
                    <span className="absolute inset-0 flex items-center justify-center text-black">
                      <Check size={15} strokeWidth={3} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
