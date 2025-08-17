"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function HeroBanner() {
  const words: string[] = [
    "Live Wilder",
    "Explore Deeper",
    "Snowboard Kashmir",
    "Chase Adventure",
    "Conquer the Himalayas",
  ];

  const [index, setIndex] = useState<number>(0);
  const [videoEnded, setVideoEnded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Navbar shows once video starts playing
  const handleVideoPlay = () => setVideoEnded(true);

  // Rotating words
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      2500
    );
    return () => clearInterval(interval);
  }, [words.length]);

  const longestWord: string = words.reduce((a, b) =>
    a.length > b.length ? a : b
  );

  return (
    <section
      id="home"
      className="relative h-screen md:h-[110vh] sm:h-[70vh] min-h-[450px] sm:min-h-[500px] flex items-center justify-center bg-gray-900 text-white overflow-hidden"
    >
      {/* Navbar */}
      <Navbar videoEnded={videoEnded} />

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onPlay={handleVideoPlay}
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/video/video.mp4"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          isMobile
            ? "bg-gradient-to-b from-black/80 via-black/60 to-black/80"
            : "bg-gradient-to-b from-black/70 via-black/40 to-black/80"
        }`}
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center max-w-7xl px-4 sm:px-6 md:px-8"
      >
        <h1
          className={`font-extrabold mb-2 sm:mb-3 md:mb-4 tracking-wide drop-shadow-lg BebasNeue ${
            isMobile
              ? "text-3xl flex flex-col gap-2"
              : "text-5xl md:text-7xl flex items-center justify-center gap-2"
          }`}
        >
          <span className={isMobile ? "text-2xl" : ""}>Ride Higher.</span>
          <span
            className={`relative inline-block ${
              isMobile ? "text-2xl flex justify-center w-full" : ""
            }`}
            style={
              isMobile
                ? { height: "1.2em" }
                : { width: `${longestWord.length}ch`, height: "1em" }
            }
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`${
                  isMobile
                    ? "relative text-blue-500 italic whitespace-nowrap"
                    : "absolute left-0 top-0 text-blue-500 italic"
                }`}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p
          className={`mb-6 sm:mb-8 italic text-gray-200 drop-shadow-md ${
            isMobile
              ? "text-sm leading-relaxed w-full max-w-xs mx-auto"
              : "text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          }`}
        >
          Every turn is earned. Every moment unreal
        </p>

        <a
          href="#booking"
          className={`inline-block bg-white/20 backdrop-blur-lg rounded-lg font-semibold text-white transition transform hover:scale-105 hover:bg-white/30 shadow-lg ${
            isMobile ? "px-6 py-3 text-base" : "px-8 py-4 text-lg"
          }`}
        >
          Book Now
        </a>
      </motion.div>
    </section>
  );
}
