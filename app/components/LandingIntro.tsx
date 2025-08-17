"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeroBanner from "./HeroBanner";

const LandingIntro: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Hero Banner always behind */}
      <div className={`absolute inset-0 ${showContent ? "z-0" : "z-10"}`}>
        <HeroBanner />
      </div>

      {/* Overlay reveal effect (NO WHITE BACKGROUND NOW) */}
      {!showContent && (
        <>
          <motion.div
            className="absolute inset-0 origin-top-left z-30" // removed bg-white
            initial={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            animate={{
              clipPath: isMobile
                ? "polygon(0 0, 80% 10%, 100% 100%, 0 100%)"
                : "polygon(0 0, 60% 20%, 100% 100%, 0 100%)",
            }}
            transition={{
              duration: isMobile ? 2.5 : 4,
              ease: [0.4, 0.8, 0.2, 1],
            }}
          />

          {/* Snowboarder video */}
          <motion.video
            src="/video/video.mp4"
            autoPlay
            muted
            playsInline
            className="absolute object-cover rounded-full shadow-xl z-40"
            style={{
              top: isMobile ? "5%" : "10%",
              left: isMobile ? "5%" : "10%",
              width: isMobile ? "120px" : "256px",
              height: isMobile ? "120px" : "256px",
            }}
            initial={{
              x: isMobile ? "-20%" : "-30%",
              y: isMobile ? "-10%" : "-20%",
              rotate: 0,
            }}
            animate={{
              x: isMobile ? "85%" : "110%",
              y: isMobile ? "85%" : "110%",
              rotate: 20,
              scale: isMobile ? 1.1 : 1.3,
            }}
            transition={{
              duration: isMobile ? 2.5 : 4,
              ease: [0.2, 0.8, 0.4, 1],
            }}
            onAnimationComplete={() => {
              setShowContent(true);
              onFinish();
            }}
          />
        </>
      )}
    </div>
  );
};

export default LandingIntro;
