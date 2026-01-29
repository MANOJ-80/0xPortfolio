"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export const AbstractCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // Rotate slowly
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.rotation.z = time * 0.05;

    // React to mouse (subtle sway)
    const { x, y } = state.pointer;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      y * 0.2,
      0.1,
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      x * 0.2 + time * 0.1,
      0.1,
    );
  });

  return (
    <Sphere args={[2.2, 64, 64]} ref={meshRef}>
      <MeshDistortMaterial
        color="#050505"
        emissive="#CCFF00"
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
        distort={0.6}
        speed={1.5}
        wireframe={true}
      />
    </Sphere>
  );
};
