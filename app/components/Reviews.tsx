"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

export default function Reviews() {
  const reviews = [
    {
      name: "Aarav S.",
      text: "An unforgettable adventure! The slopes were pristine.",
      img: "/images/img1.jpg",
    },
    {
      name: "Maya T.",
      text: "Loved every moment. The team was amazing!",
      img: "/images/img2.jpg",
    },
    {
      name: "Raj P.",
      text: "Kashmir in winter is magical. Highly recommend!",
      img: "/images/img3.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section
      id="reviews"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 sm:top-20 left-1/4 sm:left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-300/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800 leading-tight ArchivoBlack"
        >
          What Our Adventurers Say
        </motion.h2>

        <div className="relative">
          {/* Mobile: single card carousel */}
          <div className="block sm:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border border-white/40"
              >
                <Quote className="w-8 h-8 text-purple-400 absolute top-4 left-4 opacity-70" />

                <div className="flex justify-center mb-6 mt-2">
                  <div className="relative w-16 h-16">
                    <Image
                      src={reviews[index].img}
                      alt={reviews[index].name}
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>

                <p className="text-gray-700 italic mb-6 text-center leading-relaxed text-base">
                  "{reviews[index].text}"
                </p>

                <h4 className="font-semibold text-center text-gray-900 text-lg">
                  {reviews[index].name}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop: all cards visible, active one zooms automatically */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, idx) => (
              <motion.div
                key={idx}
                onClick={() => setIndex(idx)}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                animate={{
                  scale: idx === index ? 1.1 : 1,
                  zIndex: idx === index ? 10 : 0,
                  opacity: idx === index ? 1 : 0.7,
                  boxShadow:
                    idx === index
                      ? "0px 15px 40px rgba(0,0,0,0.25)"
                      : "0px 6px 16px rgba(0,0,0,0.08)",
                }}
                whileHover={{ scale: 1.12 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  duration: 0.3, // ⚡ fast zoom
                }}
                className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 cursor-pointer"
              >
                <Quote className="w-8 h-8 text-purple-400 absolute top-4 left-4 opacity-70" />

                <div className="flex justify-center mb-6">
                  <div className="relative w-16 h-16">
                    <Image
                      src={r.img}
                      alt={r.name}
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>

                <p className="text-gray-700 italic mb-6 text-center leading-relaxed text-base">
                  "{r.text}"
                </p>

                <h4 className="font-semibold text-center text-gray-900 text-lg">
                  {r.name}
                </h4>
              </motion.div>
            ))}
          </div>

          {/* Dots for both mobile & desktop */}
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                animate={{
                  scale: i === index ? 1.4 : 1,
                  backgroundColor: i === index ? "#a855f7" : "#d1d5db",
                }}
                transition={{ duration: 0.12, ease: "easeOut" }} // ⚡ even faster dot change
                className="w-3 h-3 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
