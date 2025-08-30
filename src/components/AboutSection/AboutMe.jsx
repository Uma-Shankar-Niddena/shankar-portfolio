import React, { useEffect, useRef } from "react";
import "./aboutme.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storyPoints = [
  {
    title: "Where It All Began 🌾",
    text: "In a small village, between fields and cows, I found my first dream.",
    bg: "#f2efe6",
  },
  {
    title: "Balancing Books & Buffaloes 📚🐃",
    text: "Fed cows at 3PM, coded till midnight. A journey only few can understand.",
    bg: "#e0f7fa",
  },
  {
    title: "Coding in the Chaos 💻🌪️",
    text: "While the world partied, I built projects with shaky Wi-Fi & fire in my heart.",
    bg: "#ede7f6",
  },
  {
    title: "From Fields to Fullstack 🚀",
    text: "I didn’t have resources, so I became one. Learned React, Node, and built my path.",
    bg: "#fff3e0",
  },
  {
    title: "Graduated, but the grind begins 🎓🔥",
    text: "Degree done, but dreams just started. Time to show the world what I’m made of.",
    bg: "#fce4ec",
  },
];

const Nakosam = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: `+=${storyPoints.length * 200}vh`, // <-- gives more scroll space!
              scrub: true,
              pin: true,
            },
          });

          storyPoints.forEach((_, i) => {
            const current = `.about-slide-${i}`;
          
            // Fade In
            tl.to(current, {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)", // keep readable!
              zIndex: 2,
              duration: 0.5,
            });
          
            // Pause - stay on screen
            tl.to({}, { duration: 0.5 }); // holds the current slide longer
          
            // Fade Out (except last one)
            if (i !== storyPoints.length - 1) {
              tl.to(current, {
                opacity: 0,
                scale: 0.95,
                filter: "blur(8px)",
                zIndex: 0,
                duration: 0.5,
              });
            }
          });
          
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-wrapper" ref={containerRef}>
      {storyPoints.map((point, index) => (
        <div
          key={index}
          className={`about-slide about-slide-${index}`}
          style={{ backgroundColor: point.bg }}
        >
          <h2>{point.title}</h2>
          <p>{point.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Nakosam;
