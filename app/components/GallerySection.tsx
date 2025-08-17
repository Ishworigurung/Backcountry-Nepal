"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  const images = [
    "/images/gallery1.jpg.png",
    "/images/gallery2.jpg.png",
    "/images/gallery3.jpg.png",
    "/images/gallery4.jpg.png",
    "/images/gallery5.jpg.png",
    "/images/gallery6.jpg.png",
    "/images/gallery7.jpg.png",
  ];

  const [centerIndex, setCenterIndex] = useState(0);
  const animationDuration = 0.8; // seconds
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (isManual) return;
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % images.length);
    }, animationDuration * 2000);
    return () => clearInterval(interval);
  }, [images.length, isManual]);

  const handleImageClick = (index: number) => {
    setCenterIndex(index);
    setIsManual(true);
    setTimeout(() => setIsManual(false), 4000);
  };

  return (
    <section id="gallery" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Animated Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 ArchivoBlack">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Gallery
          </motion.span>
        </h2>

        <div className="relative h-[30rem] flex justify-center items-center select-none">
          {images.map((img, i) => {
            const total = images.length;
            let relativePos = (i - centerIndex + total) % total;

            if (relativePos > total / 2) relativePos -= total;

            const xOffset = relativePos * 180;
            const yOffset = Math.abs(relativePos) * 15;
            const scale = 1 - Math.abs(relativePos) * 0.1;
            const rotate = relativePos * 12;
            const opacity = Math.max(1 - Math.abs(relativePos) * 0.3, 0);

            return (
              <motion.div
                key={i}
                onClick={() => handleImageClick(i)}
                animate={{
                  x: xOffset,
                  y: yOffset,
                  scale,
                  opacity,
                  rotate,
                  zIndex: total - Math.abs(relativePos),
                  filter: relativePos === 0 ? "grayscale(0%)" : "grayscale(100%)",
                }}
                transition={{
                  duration: animationDuration,
                  ease: "easeInOut",
                }}
                className="absolute rounded-lg shadow-lg overflow-hidden cursor-pointer"
                style={{
                  width: relativePos === 0 ? 220 : 160,
                  height: relativePos === 0 ? 320 : 240,
                }}
              >
                <Image
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
