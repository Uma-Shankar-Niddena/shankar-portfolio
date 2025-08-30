import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import React from "react";
const GameSetup = () => {
  const { scene } = useGLTF("/uma.glb");
  const modelRef = useRef();
  const [modelScale, setModelScale] = useState(1.5);
  const [modelPosition, setModelPosition] = useState([0, -0.2, 0]);

  // ✅ Function to update scale & position
  const updateModelSize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
      setModelScale(0.9); // 📱 Mobile
      setModelPosition([1.5, -0.1, 0]);
    } else if (screenWidth < 1024) {
      setModelScale(1.2); // 💻 Tablet
      setModelPosition([2, -0.15, 0]);
    } else {
      setModelScale(1.5); // 🖥️ Desktop
      setModelPosition([3, -0.2, 0]);
    }
  };

  useEffect(() => {
    updateModelSize(); // ✅ Call on mount
    window.addEventListener("resize", updateModelSize); // ✅ Update on resize

    return () => window.removeEventListener("resize", updateModelSize);
  }, []);

  // ✅ Memoize model for performance
  const cachedModel = useMemo(() => scene, [scene]);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(-0.5, -Math.PI / 2, 0); // 🔥 Model starts FACING DOWN
    }
  }, []);

  useFrame(({ mouse }) => {
    if (!modelRef.current) return;

    // 🌟 Left/Right movement (unchanged)
    const targetRotationY = -Math.PI / 2 + mouse.x * 0.2;

    // 🔥 Free Downward Movement, Limited Upward Movement
    let targetRotationX;
    if (mouse.y < 0) {
      targetRotationX = -mouse.y * 0.2; // ⬆️ Less movement when moving up
    } else {
      targetRotationX = -mouse.y * 0.6; // ⬇️ Free movement when moving down
    }

    // ✅ Limit how HIGH the model can go
    const minRotationX = -0.08; // 🔼 Slight tilt up (LIMITED)
    const maxRotationX = 0.3; // 🔽 More tilt down (FREE)
    targetRotationX = Math.max(minRotationX, Math.min(maxRotationX, targetRotationX));

    // ✅ Apply smooth interpolation
    modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.05;
    modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.05;

    // ✅ Update scale dynamically
    modelRef.current.scale.set(modelScale, modelScale, modelScale);
  });

  return <primitive ref={modelRef} object={cachedModel} position={modelPosition} />;
};

// ✅ Preload model for better performance
useGLTF.preload("/uma.glb");

export default GameSetup;
