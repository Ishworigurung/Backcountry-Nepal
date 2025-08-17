"use client";
import React from "react";
import { motion } from "framer-motion";

const words = [
  "Altitude",
  "Freedom",
  "Wilderness",
  "Untouched",
  "Escape",
  "Spirit",
  "Peace",
  "Thrill",
  "Crave",
  "Drift",
];

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-full mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Backcountry Nepal Text */}
      <motion.div
        className="text-center max-w-3xl mx-auto text-gray-800 mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gray-900 BebasNeue">
          Backcountry Nepal
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 sm:px-0 ">
          Nepal&apos;t backcountry is a land of hidden valleys, untouched trails,
          and raw Himalayan beauty. It&apos;s where adventure seekers find true
          freedom beyond the beaten paths — a journey into the wild heart of
          the mountains.
        </p>
      </motion.div>

      {/* Word Carousel */}
      <div className="overflow-hidden whitespace-nowrap max-w-full mx-auto">
        <motion.div
          className="inline-block"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {words.concat(words).map((word, index) => (
            <span
              key={index}
              className="mx-4 sm:mx-6 md:mx-8 text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-wide sm:tracking-wider md:tracking-widest uppercase"
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;