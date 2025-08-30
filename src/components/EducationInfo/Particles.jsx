import React, { useRef, useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
  const pointsRef = useRef();

  // Generate random positions
  const points = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500 * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10; // Spread wider
    }
    return positions;
  }, []);

  // Create random speeds
  const speeds = useMemo(() => {
    return new Float32Array(500).map(() => Math.random() * 0.02 + 0.01);
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += speeds[i / 3]; // Move up
        if (positions[i + 1] > 5) positions[i + 1] = -5; // Reset if out of bounds
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={points}>
      <PointMaterial 
        size={0.08} 
        color="#ffcc00" 
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </Points>
  );
};

export default Particles;
