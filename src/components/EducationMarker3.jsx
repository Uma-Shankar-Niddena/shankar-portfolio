
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import Tooltip3 from "./Degreetooltip";
const EducationMarker3 = ({ position, label }) => {
   const sscRef = useRef();
   const [hovered, setHovered] = useState(false);
     const { scene, animations } = useGLTF("/dragon.gltf"); // Use a different model for SSC
     const { actions } = useAnimations(animations, sscRef);
   
     useEffect(() => {
       if (actions["Object_0"]) {
         actions["Object_0"].play();
       }
     }, [actions]);
   
     return (
       <group ref={sscRef} position={position} scale={0.01} 
        onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)} >
         <primitive object={scene} />
         {hovered && (
        <Html position={[0, 2.5, 0]} center>
          <Tooltip3 text="Flying Beyond the Clouds with 71% - Degree" />
        </Html>
      )}
       </group>
     );
};

export default EducationMarker3;
