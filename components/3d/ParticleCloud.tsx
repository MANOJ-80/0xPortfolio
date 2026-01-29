"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 8000;
const SPHERE_RADIUS = 2.5;

export const ParticleCloud = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  // Generate particle positions in a sphere
  const { positions, scales } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const scl = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Fibonacci sphere distribution for even spread
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;

      // Add some randomness to radius for cloud-like effect
      const radius = SPHERE_RADIUS * (0.8 + Math.random() * 0.4);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      // Random scale for size variation
      scl[i] = Math.random() * 0.5 + 0.5;
    }

    return { positions: pos, scales: scl };
  }, []);

  // Store original positions for morphing
  const originalPositions = useMemo(
    () => new Float32Array(positions),
    [positions],
  );

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    const { x: mouseX, y: mouseY } = state.pointer;

    // Rotate the entire particle system
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = mouseY * 0.2;
    pointsRef.current.rotation.z = mouseX * 0.1;

    // Get position attribute
    const posArray = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    // Animate each particle
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Get original position
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];

      // Add noise-based movement
      const noiseScale = 0.3;
      const noiseSpeed = 0.5;

      posArray[i3] =
        ox + Math.sin(time * noiseSpeed + i * 0.01) * noiseScale * scales[i];
      posArray[i3 + 1] =
        oy + Math.cos(time * noiseSpeed + i * 0.02) * noiseScale * scales[i];
      posArray[i3 + 2] =
        oz +
        Math.sin(time * noiseSpeed * 0.5 + i * 0.015) * noiseScale * scales[i];
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Pulse the particle size
    if (materialRef.current) {
      materialRef.current.size = 0.02 + Math.sin(time * 2) * 0.005;
    }
  });

  // Create geometry with buffer attribute
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        ref={materialRef}
        size={0.025}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
