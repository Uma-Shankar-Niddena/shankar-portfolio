import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/secondsection.css";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-[10] overflow-visible"
    >
      <div
        className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-6 md:px-16"
        style={{
          background: "linear-gradient(to bottom,#480401,#570603,#7A0905)",
        }}
      >
        {/* Image Section */}
        <div
          ref={imgRef}
          className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0"
        >
          <img
            src="/shankarLogo.png"
            alt="Uma Shankar"
            className="drop-shadow-lg w-40 sm:w-52 md:w-[90%] h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 flex items-center justify-center md:justify-center"
        >
          <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left py-4">
            <h2 className="text-4xl md:text-8xl pt-10  md:h-75 lg:text-8xl lg:h-105 lg:w-full xl:w-full xl:text-9xl xl:h-75 xlmid:text-4xl xlmid:h-90 md:w-full font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              The Journey Begins
            </h2>
            <p className="p-2 text-base sm:text-lg md:text-2xl leading-relaxed text-gray-300">
              They said I wouldn’t make it. But here I am—turning lines of code
              into
              <span className="text-blue-400"> reality</span>. I don’t just
              build websites. I create
              <span className="text-purple-400"> experiences</span>. Welcome to
              my world.
            </p>
            <div className="hidden md:block md:h-20 ">
                <button>
                    call me 
            </button>
            </div>
          
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
