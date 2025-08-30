import React,{ Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import "./HeroSection.css";
import Loader from "./Loader";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import GameSetup from "../three/GameSetup";
import ReactLogo from "./ReactLogo";
import Earth from "./Earth";

const ResponsiveGameSetup = () => {
  const { viewport } = useThree(); // ✅ Now it is inside Canvas
  const isMobile = viewport.width < 768;

  return <GameSetup position={[0, -1, 0]} scale={isMobile ? 0.8 : 1.2} />;
};

const HeroSection = () => {
  return (

    <section className="hero">
      <div className="for-top-headings-section">
        <h1 className="top-heading">Hii, I'm UmaShankar!</h1>
        <p className="small-quote">A Full Stack Developer!</p>
      </div>

      {/* Centered 3D Model */}
      <div className="hero-3d-container">
        <Canvas className="hero-canvas"  gl={{ powerPreference: "low-power", antialias: false }} // Reduce GPU load
  dpr={[1, 1.5]} camera={{ fov: 30, position: [5, 0, 50] }}>
          <Suspense fallback={<Loader/>}> {/* ✅ Loader will show while loading */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={2} />

            {/* Dynamically Scaling Model */}
            {/* ✅ Now inside Canvas */}
            <GameSetup/>
            <group>
        


          <ReactLogo/>
          <Earth/>
            </group>
          </Suspense>
        </Canvas>

      </div>
              <button> Get Started</button>
    </section>
    
 
  );
};

export default HeroSection;
