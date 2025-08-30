import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/thirdsection.css";

const AboutMe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={ref} className="about-section">
      {/* Background glow / movement */}
      <motion.div className="background" style={{ y: bgY }} />

      {/* Glowing Light or Particles Layer */}
      <div className="glow-layer" />

      <div className="content-wrapper">
        <motion.div
          className="left-panel"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="about-title">Who Am I?</h2>
          <p className="about-text">
            As you move deeper into the journey, my story unfolds...
          </p>
          <p className="about-text deeper">
            From challenges to growth, here’s what shaped me into who I am today.
          </p>
        </motion.div>

        <motion.div
          className="right-panel"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="card-3d">
            <h3>Dreamer. Coder. Believer.</h3>
            <p>I turn ideas into experiences through code and design.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
