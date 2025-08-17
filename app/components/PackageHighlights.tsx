"use client";
import React from "react";
import { motion } from "framer-motion";

interface Card {
  title: string;
  text: string;
  img: string;
}

const cardsData: Card[] = [
  {
    title: "Accommodation",
    text: "15 nights in a private hut in Gulmarg plus 1 night in a Premium Boathouse in Srinagar.",
    img: "/images/house4.png",
  },
  {
    title: "Transfers",
    text: "All ground transfers in 4WD Jeeps including airport pickups and sightseeing trips.",
    img: "/images/jeep1.png",
  },
  {
    title: "Ski Experience",
    text: "15 days of ski gear rental plus 10 days of professional ski instruction.",
    img: "/images/ski1.png",
  },
  {
    title: "Scenic Exploration",
    text: "Guided tours to explore breathtaking valleys, snow-covered meadows, and cultural sights.",
    img: "/images/mountain5.png",
  },
];

export default function PackageHighlights() {
  return (
    <section
      id="highlights"
      className="relative py-16 md:py-20 bg-blue-50 overflow-hidden"
    >
      {/* Mountain background */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40 md:h-56"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,202.7C840,203,960,149,1080,144C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-center text-gray-800">
          Package Highlights
        </h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {cardsData.map((card, idx) => {
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="relative bg-white rounded-3xl shadow-xl p-6 md:p-8 text-center overflow-visible min-h-[320px] md:min-h-[400px]"
              >
                {/* Title + text */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-6">
                  {card.text}
                </p>

                {/* Floating image with scroll-triggered pop animation */}
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/4 h-[180px] md:h-[220px] object-contain drop-shadow-2xl pointer-events-none`}
                  initial={{ y: 80, opacity: 0, scale: 0.6 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }} // 👈 animate every scroll in/out
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                    duration: 0.8,
                    delay: idx * 0.15,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
