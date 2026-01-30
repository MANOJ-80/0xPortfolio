"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  ReactNode,
} from "react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
  playSuccess: () => void;
  playWhoosh: () => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [isMuted, setIsMuted] = useState(true); // Start muted by default for politeness
  const audioContextRef = useRef<AudioContext | null>(null);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  // Handle background music based on mute state
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Create audio element only once
    if (!bgMusicRef.current) {
      bgMusicRef.current = new Audio("/sounds/theme-trimmed.webm");
      bgMusicRef.current.preload = "none";
      bgMusicRef.current.loop = true;
      bgMusicRef.current.volume = 0.3; // 30% volume for background ambience
    }

    const music = bgMusicRef.current;

    if (!isMuted) {
      music.play().catch(() => {
        // Autoplay blocked - will play on next user interaction
      });
    } else {
      music.pause();
    }

    return () => {
      // Don't destroy on cleanup, just pause
      music.pause();
    };
  }, [isMuted]);

  // Initialize AudioContext on first user interaction
  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (
        window.AudioContext || (window as any).webkitAudioContext
      )();
    }
    return audioContextRef.current;
  }, []);

  // Play a tone with customizable parameters
  const playTone = useCallback(
    (
      frequency: number,
      duration: number,
      volume: number,
      type: OscillatorType = "sine",
      detune: number = 0,
    ) => {
      if (isMuted) return;

      try {
        const ctx = getAudioContext();
        if (ctx.state === "suspended") ctx.resume();

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
        oscillator.type = type;
        oscillator.detune.setValueAtTime(detune, ctx.currentTime);

        // Low-pass filter for smoother sound
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(2000, ctx.currentTime);

        // Envelope for smooth sound
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          ctx.currentTime + duration,
        );

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + duration);
      } catch (e) {
        // Silently fail if audio isn't available
      }
    },
    [isMuted, getAudioContext],
  );

  // Hover sound disabled per user preference
  const playHover = useCallback(() => {
    // No sound on hover - user prefers clicks only
  }, []);

  // Satisfying click - punchy with sub-bass
  const playClick = useCallback(() => {
    playTone(150, 0.08, 0.25, "sine"); // Sub bass thump
    playTone(800, 0.1, 0.2, "square"); // Click accent
    setTimeout(() => playTone(600, 0.05, 0.1, "sine"), 30); // Tail
  }, [playTone]);

  // Success sound - ascending arpeggio
  const playSuccess = useCallback(() => {
    playTone(523, 0.12, 0.2, "sine"); // C5
    setTimeout(() => playTone(659, 0.12, 0.18, "sine"), 80); // E5
    setTimeout(() => playTone(784, 0.15, 0.2, "sine"), 160); // G5
  }, [playTone]);

  // Cache the whoosh buffer
  const whooshBufferRef = useRef<AudioBuffer | null>(null);

  const getWhooshBuffer = useCallback((ctx: AudioContext) => {
    if (whooshBufferRef.current) return whooshBufferRef.current;

    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2);
    }

    whooshBufferRef.current = buffer;
    return buffer;
  }, []);

  // Whoosh sound for scrolling/transitions
  const playWhoosh = useCallback(() => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (ctx.state === "suspended") ctx.resume();

      const buffer = getWhooshBuffer(ctx);
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1000, ctx.currentTime);
      filter.Q.setValueAtTime(0.5, ctx.currentTime);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

      noise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      noise.start(ctx.currentTime);
    } catch (e) {
      // Silently fail
    }
  }, [isMuted, getAudioContext, getWhooshBuffer]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return (
    <SoundContext.Provider
      value={{
        isMuted,
        toggleMute,
        playHover,
        playClick,
        playSuccess,
        playWhoosh,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    // Return no-op functions if outside provider
    return {
      isMuted: true,
      toggleMute: () => {},
      playHover: () => {},
      playClick: () => {},
      playSuccess: () => {},
      playWhoosh: () => {},
    };
  }
  return context;
};
