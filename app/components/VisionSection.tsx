"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function VisionSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind "sm" breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="vision"
      className="relative py-20 sm:py-24 md:py-32 bg-fixed bg-center bg-cover text-white bg-[url('/images/himalayas.jpg')]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={isMobile ? { opacity: 0, scale: 0.8 } : { opacity: 0, y: -50 }}
          whileInView={isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: isMobile ? "easeOut" : "easeOut", bounce: isMobile ? 0.4 : 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 ArchivoBlack"
        >
          Our Vision
        </motion.h2>

        {/* Divider line */}
        <motion.div
          initial={isMobile ? { width: 0, opacity: 0 } : { opacity: 0 }}
          whileInView={isMobile ? { width: "4rem", opacity: 1 } : { opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="w-16 sm:w-20 md:w-24 h-1 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
        />

        {/* Paragraph */}
        <motion.p
          initial={isMobile ? { opacity: 0, y: 30 } : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl sm:max-w-2xl mx-auto px-2"
        >
          At <span className="font-semibold text-blue-300">Backcountry Nepal</span>, 
          we aim to bring adventure seekers closer to the raw beauty of the Himalayas. 
          Our Snowboarding in Kashmir package is designed to blend{" "}
          <span className="font-semibold text-white">adrenaline</span>,{" "}
          <span className="font-semibold text-white">nature</span>, and{" "}
          <span className="font-semibold text-white">culture</span> for an unforgettable journey.
        </motion.p>
      </div>
    </section>
  );
}
