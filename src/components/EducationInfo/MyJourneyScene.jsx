import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import "./MyJourneyScene.css"; // we'll make this file next

export default function MyJourneyScene({ changeEnvironment }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 1000);
  }, []);

  return (
    <Html>
       <div className="journey-scene">
      <div className="overlay" />
      {showText && (
        <div className="journey-text">
          <p>
            While some enjoyed movies and chai in the canteen...
            <br />
            I was out in the fields by 3PM, coding by 10PM.
          </p>
          <p>
            It wasn’t just college. It was survival.
            <br />
            But I passed every semester. And I built my future.
          </p>
        </div>
      )}
      <button className="back-button" onClick={() => changeEnvironment("default")}>×</button>
    </div>
    </Html>
   
  );
}
