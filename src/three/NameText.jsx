import { useEffect, useRef } from "react";
import gsap from "gsap";

const NameText = () => {
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".text-container",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

 
    return (
        <Text position={[1, 1, 0]} fontSize={0.5} color="black">
          Uma Shankar
        </Text>
      );

};

export default NameText;
