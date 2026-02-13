"use client";

import { useEffect, useState } from "react";
import { SplineScene } from "@/components/3d/SplineScene";

const DISABLE_SPLINE_QUERY = "(max-width: 900px), (hover: none), (pointer: coarse)";

export const GlobalSplineBackground = () => {
  const [enableSpline, setEnableSpline] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(DISABLE_SPLINE_QUERY);

    const update = () => {
      setEnableSpline(!media.matches);
    };

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  if (!enableSpline) return null;

  return (
    <div className="fixed inset-0 z-0 opacity-80 spline-container pointer-events-auto render-isolate gpu-layer">
      <SplineScene
        url="https://prod.spline.design/ParJWjNwBpaB6b-N/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
};
