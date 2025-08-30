import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("/umamodel.glb");

  useEffect(() => {
    if (modelRef.current) {
      gsap.to(modelRef.current.position, {
        x: -2, // Moves model left
        duration: 2,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      });

      gsap.to(modelRef.current.rotation, {
        y: Math.PI, // Rotates the model to face front
        duration: 2,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      });
    }
  }, []);

  return <primitive ref={modelRef} object={scene} scale={[2,2,2]} position={[0, -2, 0]} />;
};

export default Model;
