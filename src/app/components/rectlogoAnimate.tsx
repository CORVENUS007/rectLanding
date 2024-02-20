import Image from "next/image";
import frame from "../../../public/rLogo.svg";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SmoothScrollAnimation = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100; // Adjust this threshold as needed
    if (!animationTriggered && scrollY > threshold) {
      setAnimationTriggered(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationTriggered]); // useEffect runs whenever animationTriggered changes

  return (
    <div style={{ height: "700px" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationTriggered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
        <Image
          src={frame}
          alt="frame"
          fill={true}
          // style={{ maxWidth: "100%", height: "auto" }}
        />
      </motion.div>
    </div>
  );
};

export default SmoothScrollAnimation;
