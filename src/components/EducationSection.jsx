import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";


import { useGLTF, useAnimations, Html } from "@react-three/drei";
import gsap from "gsap";
import { extend } from "@react-three/fiber";

import EducationMarker1 from "./EducationMarker1";
import EducationMarker2 from "./EducationMarker2";
import Tooltip from "./ToolTip";
import EducationMarker3 from "./EducationMarker3";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import MyJourneyScene from "./EducationInfo/MyJourneyScene";
import CLOUDS from "vanta/dist/vanta.clouds.min";

gsap.registerPlugin(ScrollTrigger);

function WalkingMan({ boyRef }) {
  const { scene, animations } = useGLTF("/walkingman.glb");
  const { actions } = useAnimations(animations, boyRef);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (actions && actions["Armature|walking"]) {
      actions["Armature|walking"].play();
    }
  }, [actions]);

  return (
    <group
      ref={boyRef}
      position={[0, 5, -9]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={scene} scale={1} />
      {hovered && (
        <Html position={[0, 2.5, 0]} center>
          <Tooltip text="Hii, these are my journey projects!" />
        </Html>
      )}
    </group>
  );
}


function Road({ boyRef }) {
  const roadRef = useRef();

  useEffect(() => {
    if (!roadRef.current || !boyRef.current) return;

    const startY = 5;
    const endY = -15;

    roadRef.current.position.set(0, startY, -9);
    boyRef.current.position.set(0, startY, -9);

    gsap.to([roadRef.current.position, boyRef.current.position], {
      y: endY,
      scrollTrigger: {
        trigger: "#education-section",
        start: "top 20%",
        end: "bottom 40%",
        scrub: 1,
        ease: "power2.out",
      },
    });
  }, [boyRef]);

  return (
    <mesh ref={roadRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 100]} />
      <meshStandardMaterial color={"#2c2c2c"} />
    </mesh>
  );
}
export default function EducationSection() {
  const vantaRef = useRef(null);
  const [storyText, setStoryText] = useState("");
  const boyRef = useRef(null);
  const [environment, setEnvironment] = useState("default");

  // Vanta background effect
  useEffect(() => {
    const vantaEffect = CLOUDS({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 400.0,
      minWidth: 200.0,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  function changeEnvironment(env) {
    let newStory = "";

    if (env === "ssc") newStory = "In a quiet village... the first spark of learning ignited.";
    if (env === "hsc") newStory = "He walked further... the path was rough, but his will stronger.";
    if (env === "degree") newStory = "The storm came. But he stood tall. A warrior with a pen.";

    gsap.to("#education-scene", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        setEnvironment(env);
        setStoryText(newStory);
        gsap.to("#education-scene", {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        });
      },
    });
  }

  return (
    <div ref={vantaRef} id="education-section" style={{ width: "100%", height: "200vh", position: "relative" }}>
      <Canvas id="education-scene" camera={{ position: [0, 1, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 2, 3]} intensity={1} />

        {environment === "default" && (
          <>
            <WalkingMan boyRef={boyRef} />
            <Road boyRef={boyRef} />

            <EducationMarker1 position={[-2, 2, -3]} changeEnvironment={changeEnvironment} />
            <EducationMarker2 position={[5, -4, -3]} label="HSC" changeEnvironment={changeEnvironment} />
            <EducationMarker3 position={[-8, -11, -8]} label="Degree" changeEnvironment={changeEnvironment} />
          </>
        )}

        {environment === "journey" && <MyJourneyScene changeEnvironment={changeEnvironment} />}
      </Canvas>
    </div>
  );
}
