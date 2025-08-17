"use client";
import { motion } from "framer-motion";
import {
  FaPlaneArrival,
  FaSnowboarding,
  FaMountain,
  FaBinoculars,
  FaMapMarkedAlt,
  FaStar,
  FaPlaneDeparture,
} from "react-icons/fa";

type Day = {
  day: string;
  plan: string;
  icon: React.ElementType;
};

const days: Day[] = [
  { day: "Day 1", plan: "Arrival in Srinagar, transfer to Gulmarg", icon: FaPlaneArrival },
  { day: "Day 2", plan: "Snowboarding orientation & practice", icon: FaSnowboarding },
  { day: "Day 3", plan: "Backcountry ride to Apharwat Peak", icon: FaMountain },
  { day: "Day 4", plan: "Explore untouched powder slopes", icon: FaBinoculars },
  { day: "Day 5", plan: "Free day for local sightseeing", icon: FaMapMarkedAlt },
  { day: "Day 6", plan: "Full-day snowboarding adventure", icon: FaStar },
  { day: "Day 7", plan: "Departure", icon: FaPlaneDeparture },
];

// Snowfall Component
function Snowfall() {
  const flakes = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flakes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white opacity-70"
          style={{
            fontSize: `${Math.random() * 10 + 8}px`,
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 50}px`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.random() * 40 - 20],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❄
        </motion.div>
      ))}
    </div>
  );
}

export default function ItineraryJourneyPath() {
  return (
    <section
      id="itinerary"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-blue-100 to-blue-200 overflow-hidden"
    >
      {/* Snowfall background */}
      <Snowfall />

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 relative z-10 ArchivoBlack"
      >
        Adventure Itinerary
      </motion.h2>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Curve Path */}
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-full h-full"
          viewBox="0 0 400 1200"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            d="M200 0 C50 200, 350 400, 200 600 C50 800, 350 1000, 200 1200"
            stroke="url(#pathGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="transparent"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient
              id="pathGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>

        {/* Timeline */}
        <div className="relative">
          {days.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex w-full my-10 sm:my-16 ${
                  isLeft ? "justify-start pr-2 sm:pr-8" : "justify-end pl-2 sm:pl-8"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-64 h-36 bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 relative z-10 ${
                    isLeft ? "text-left mr-10 sm:mr-0" : "text-right ml-10 sm:ml-0"
                  }`}
                >
                  <h3 className="text-lg font-bold">{item.day}</h3>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base">{item.plan}</p>
                </div>

                {/* Node with Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white text-xl shadow-lg z-20"
                >
                  <Icon />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
