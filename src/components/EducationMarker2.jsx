
import React, { useEffect, useRef, useState } from "react";
import Tooltip2 from "./Intermediatetooltip";
import { useGLTF, useAnimations, Html } from "@react-three/drei";

const EducationMarker2 = ({ position, label }) => {
   const sscRef = useRef();
   const [hovered, setHovered] = useState(false);
     const { scene, animations } = useGLTF("/bird.glb"); // Use a different model for SSC
     const { actions } = useAnimations(animations, sscRef);
   
     useEffect(() => {
        if (actions["Armature|ArmatureAction"]) {
            actions["Armature|ArmatureAction"].play();
          }
     }, [actions]);
   
     return (
       <group ref={sscRef} position={position} scale={0.7} 
        onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
       >
         <primitive object={scene} />
        {hovered && (
        <Html position={[0, 2.5, 0]} center>
          <Tooltip2 text="Wings Tested by Winds 82% - Intermediate" />
        </Html>
      )}
       </group>
     );
};

export default EducationMarker2;
