import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState, useRef, useMemo } from "react";
import React from "react";
const Earth = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("https://raw.githubusercontent.com/Uma-Shankar-Niddena/glb-models/main/earth-v1.glb");

  // ✅ Memoize Model for Better Performance
  const cachedModel = useMemo(() => {
    scene.traverse((obj) => (obj.frustumCulled = true)); // Prevents unnecessary rendering
    return scene;
  }, [scene]);
  
  
  // ✅ State for Position & Scale
  const [state, setState] = useState({
    position: [-2, -5, -9],
    scale: 1,
  });

  useEffect(() => {
    const updateSize = () => {
      requestAnimationFrame(() => {
        const screenWidth = window.innerWidth;

        // ✅ Adjust Position Dynamically
        const minX = -6;
        const maxX = -20;
        const newX = minX + ((screenWidth - 320) / (1200 - 320)) * (maxX - minX);
        const clampedX = Math.max(maxX, Math.min(minX, newX));

        // ✅ Scale Adjustments
        const newScale = screenWidth < 768 ? 1 : 1.6;

        setState({ position: [clampedX, -5, -9], scale: newScale });
      });
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // Initial Setup

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // ✅ Optimize Rotation (Reduce FPS Impact)
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = clock.getElapsedTime() * 0.10; // Slower rotation for less lag
    }
  });

  return <primitive ref={modelRef} scale={state.scale} object={cachedModel} position={state.position} />;
};

// ✅ Preload Model for Faster Rendering
useGLTF.preload("https://raw.githubusercontent.com/Uma-Shankar-Niddena/glb-models/main/earth-v1.glb");

export default Earth;
