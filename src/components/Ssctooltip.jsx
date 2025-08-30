import React from "react";
import { TypeAnimation } from "react-type-animation";
<<<<<<< HEAD
import "./Tooltip.css";
=======
import "./tooltip.css";
>>>>>>> a450134 (updated tooltip.css)

const Tooltip = () => {
  return (
    <div className="tooltip-box">
      <TypeAnimation
        sequence={[
          "Hi there 👋",
          1000,
          "Launched My Journey with 97% – SSC 🚶",
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

export default Tooltip;
