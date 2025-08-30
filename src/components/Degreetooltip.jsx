import React from "react";
import { TypeAnimation } from "react-type-animation";

import "./tooltip.css";

const Tooltip3 = () => {
  return (
    <div className="tooltip-box">
      <TypeAnimation
        sequence={[
          "Hi there 👋",
          1000,
          "Flying Beyond the Clouds with 71% -Degreee 🚶",
          1500,
          "Scroll down to explore more 🚀",
          2000,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
        style={{
          fontFamily: "'Orbitron', sans-serif",
          display: "inline-block",
        }}
      />
    </div>
  );
};

export default Tooltip3;
