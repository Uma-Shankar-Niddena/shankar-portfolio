import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Contact from "./components/ContactSection/ContactMe";
import HeroSection from "./components/HeroSection";
import ThirdSection from "./sections/ThirdSection";
import SecondSection from "./sections/SecondSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/Skills/SkillsSection";
import Projects from "./components/ProjectSection/Projects";
import Nakosam from "./components/AboutSection/AboutMe";
import { useProgress, Loader } from "@react-three/drei"; // ✅ important
import FullPageLoader from "./components/FullPageLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  const { progress } = useProgress();
  const [modelsLoaded, setModelsLoaded] = useState(false);

  // Lenis setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Lock scroll while loading
  useEffect(() => {
    if (progress < 100) {
      document.body.style.overflow = "hidden";
    } else {
      const timeout = setTimeout(() => {
        setModelsLoaded(true);
        document.body.style.overflow = "auto";
      }, 1000); // add a little delay for smoothness
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <Router>

      {!modelsLoaded && <FullPageLoader />} {/* ✅ loader visible during model load */}

      {modelsLoaded && (
        <div className="app-container">
          <Navbar />
          
            <HeroSection/>


          <SecondSection/>  
        
           <EducationSection/>
                    
            <SkillsSection/>
               
        <Projects/>
            
             <Contact/>

         
         
        </div>
      )}

      <Loader /> {/* optional, shows mini Drei loader at bottom if needed */}
    </Router>
  );
}

export default App;
