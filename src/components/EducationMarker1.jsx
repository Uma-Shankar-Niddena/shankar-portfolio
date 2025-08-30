import React, { useEffect, useRef, useState } from "react";
import Tooltip from "./Ssctooltip";
import { useGLTF, useAnimations, Html } from "@react-three/drei";

const EducationMarker1 = ({ position }) => {
  const sscRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { scene, animations } = useGLTF("/bee.glb");
  
  const { actions } = useAnimations(animations, sscRef);

  useEffect(() => {
    if (actions["hover_skeletal.1"]) {
      actions["hover_skeletal.1"].play();
    }
  }, [actions]);

  return (
    <group
      ref={sscRef}
      position={position}
      scale={0.03}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={scene} scale={1} />
      
      {hovered && (
        <Html position={[0, 2.5, 0]} center>
          <Tooltip text="Launched My Journey with 97% – SSC" />
        </Html>
      )}
    </group>
  );
};

export default EducationMarker1;
