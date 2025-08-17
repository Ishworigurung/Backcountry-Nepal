"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-black mb-8 sm:mb-12 md:mb-16"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Form */}
          <motion.form
            variants={containerVariants}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm space-y-4 sm:space-y-5 order-1 lg:order-2"
          >
            <motion.h3
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4 sm:mb-6"
            >
              Get in Touch
            </motion.h3>

            <motion.input
              variants={itemVariants}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 text-sm sm:text-base 
                         focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
                         transition-all duration-200"
            />

            <motion.input
              variants={itemVariants}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 text-sm sm:text-base 
                         focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
                         transition-all duration-200"
            />

            <motion.input
              variants={itemVariants}
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 text-sm sm:text-base 
                         focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
                         transition-all duration-200"
            />

            <motion.textarea
              variants={itemVariants}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 h-24 sm:h-32 text-sm sm:text-base 
                         focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent 
                         resize-none transition-all duration-200"
            />

            {/* Submit button with shimmer */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: window.innerWidth >= 768 ? 1.07 : 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="relative w-full px-4 sm:px-6 py-3 sm:py-4 
                         bg-blue-600 hover:bg-blue-700 text-white 
                         rounded-lg font-semibold text-sm sm:text-base 
                         shadow-lg overflow-hidden transition-all duration-300
                         active:scale-95 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></span>
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight sm:leading-snug">
              We are always ready <br className="hidden sm:block" />
              to help you and <br className="hidden sm:block" />
              answer your questions
            </h3>

            <p className="text-gray-500 max-w-md text-sm sm:text-base leading-relaxed">
              Feel free to reach out to us anytime. We promise to respond as soon as possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-gray-700">
              <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-2">
                <h4 className="font-semibold text-sm sm:text-base">Call Center</h4>
                <p className="text-sm sm:text-base">9846067648</p>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-2">
                <h4 className="font-semibold text-sm sm:text-base">Our Location</h4>
                <p className="text-sm sm:text-base">Lakeside, Pokhara, Nepal</p>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-2">
                <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                <p className="text-xs sm:text-sm md:text-base break-words">himalayanmadness@gmail.com</p>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-2">
                <h4 className="font-semibold text-sm sm:text-base">Social Network</h4>
                <div className="flex gap-3 sm:gap-4 mt-2">
                  <a href="https://www.facebook.com/backcountrynepal/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-black transition-colors" />
                  </a>
                  <a href="https://www.instagram.com/backcountry.np" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-black transition-colors" />
                  </a>
                  <a href="https://wa.me/9779846067648" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-green-600 transition-colors" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
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
