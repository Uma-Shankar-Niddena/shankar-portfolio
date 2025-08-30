import { Html, useProgress } from "@react-three/drei";
import React from "react";
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ color: "white", fontSize: "20px" }}>
        {progress.toFixed(0)}% Loading...
      </span>
    </Html>
  );
};

export default Loader;
