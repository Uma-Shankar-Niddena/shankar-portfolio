import React from "react";
import { TypeAnimation } from "react-type-animation";

const FullPageLoader = () => {
  return (
    <div className="loader-container">
      <TypeAnimation
        sequence={[
          "Loading your experience...",
          1000,
          "Almost there...",
          1500,
          "Get ready! 🚀",
          2000,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
      />
    </div>
  );
};

export default FullPageLoader;
