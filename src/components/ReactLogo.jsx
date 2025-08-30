import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { MeshStandardMaterial } from "three";
import React from "react";
const ReactLogo = () => {
  const modelRef = useRef();
  const { scene } = useGLTF(
    "https://raw.githubusercontent.com/Uma-Shankar-Niddena/glb-models/main/react_logo.glb"
  );

  // 🟢 Use useMemo to prevent unnecessary re-renders
  const memoizedScene = useMemo(() => scene.clone(), [scene]);

  const [position, setPosition] = useState([8, 8, -9]);
  const [scale, setScale] = useState(1);

  // 🟢 Optimized resize function using useCallback
  const updateSize = useCallback(() => {
    const screenWidth = window.innerWidth;

    const minX = 5;
    const maxX = 25;
    const newX = minX + (screenWidth - 320) * 0.015;
    const clampedX = Math.min(maxX, Math.max(minX, newX));

    const newScale = screenWidth < 768 ? 0.5 : 1;

    setPosition([clampedX, 12, -9]);
    setScale(newScale);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize(); // Initial setup

    return () => window.removeEventListener("resize", updateSize);
  }, [updateSize]);

  useFrame(({ clock }) => {
    if (modelRef.current) {
      // 🟢 Apply smooth rotation
      modelRef.current.rotation.y += 0.003; // Slightly lower speed for smoothness
      modelRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.08;

      // 🟢 Apply floating effect
      modelRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 1) * 0.3; // Reduced movement
    }
  });

  useEffect(() => {
    if (modelRef.current) {
      // 🟢 Apply Emissive Material to All Meshes in the Model
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material = new MeshStandardMaterial({
            color: "#00d8ff", // React's color
            emissive: "#00d8ff", // Glowing color
            emissiveIntensity: 5, // Adjust glow strength
            toneMapped: false,
          });
        }
      });
    }
  }, [memoizedScene]);

  return <primitive ref={modelRef} scale={scale} object={memoizedScene} position={position} />;
};

// 🟢 Preload the model to prevent lag on initial load
useGLTF.preload("https://raw.githubusercontent.com/Uma-Shankar-Niddena/glb-models/main/react_logo.glb");

export default ReactLogo;
