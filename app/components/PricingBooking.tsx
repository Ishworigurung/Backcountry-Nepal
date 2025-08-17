"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function PricingBooking() {
  const features = [
    "10 days of guided snowboarding",
    "Transportation to all locations",
    "Expert instructors & safety support",
    "Meals & cozy accommodations included",
  ];

  return (
    <section
      id="pricing"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Glow Blobs - Responsive */}
      <div className="absolute top-10 sm:top-20 -left-20 sm:-left-40 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-5 sm:bottom-10 -right-20 sm:-right-40 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-6 text-center relative z-10">
        {/* Heading - Mobile Responsive */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight ArchivoBlack"
        >
          Pricing & Booking
        </motion.h2>

        {/* Description - Mobile Responsive */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-14 leading-relaxed px-2 sm:px-0"
        >
          Join our{" "}
          <span className="font-semibold text-blue-600">
            17-day Himalayan snowboarding adventure
          </span>{" "}
          starting at{" "}
          <span className="text-blue-600 font-bold text-lg sm:text-xl md:text-2xl">$1,200</span>{" "}
          per person.
          <br className="hidden sm:inline" />
          <span className="block sm:inline mt-2 sm:mt-0">
            Your adventure starts here —{" "}
            <span className="font-semibold">fast, secure, and guaranteed!</span>
          </span>
        </motion.p>

        {/* Pricing Card - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl 
                     p-6 sm:p-8 md:p-10 lg:p-14 hover:shadow-blue-200/50 
                     transform hover:-translate-y-1 sm:hover:-translate-y-2 
                     transition duration-500 mx-auto max-w-2xl"
        >
          {/* Card Title - Mobile Responsive */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-7 md:mb-8">
            All-Inclusive Price
          </h3>

          {/* Features List - Mobile Optimized */}
          <ul className="mb-8 sm:mb-9 md:mb-10 text-left space-y-3 sm:space-y-4">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="flex items-start sm:items-center gap-3 text-sm sm:text-base md:text-lg text-gray-700"
              >
                <FaCheckCircle className="text-blue-600 text-lg sm:text-xl md:text-2xl animate-bounce flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Book Button - Mobile Responsive */}
          <motion.a
            href="#contact"
            whileHover={{ scale: window.innerWidth >= 768 ? 1.07 : 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-block w-full sm:w-auto px-6 sm:px-8 md:px-12 
                       py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white 
                       font-semibold text-base sm:text-lg rounded-xl sm:rounded-2xl 
                       shadow-lg overflow-hidden transition-all duration-300
                       active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span className="relative z-10">
              <span className="hidden sm:inline">Book Now – Secure Your Spot</span>
              <span className="sm:hidden">Book Now</span>
            </span>
            {/* Shimmer Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></span>
          </motion.a>
        </motion.div>

        {/* Note - Mobile Responsive */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 sm:mt-8 md:mt-10 text-gray-500 text-xs sm:text-sm leading-relaxed px-4 sm:px-0"
        >
          Hurry! Limited spots available.
          <br className="sm:hidden" />
          <span className="block sm:inline">
            Instant booking confirmation will be sent to your email.
          </span>
        </motion.p>
      </div>

      {/* Shimmer Keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}