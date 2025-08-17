"use client";
import React, { FC } from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react"; // ✅ Replaced Twitter with WhatsApp

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Logo and Branding */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
            {/* Replace src with your actual logo */}
            <img
              src="/images/logo1.png"
              alt="Backcountry Nepal Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-semibold">Backcountry Nepal</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <a href="#home" className="hover:text-gray-400 transition">Home</a>
          <a href="#highlights" className="hover:text-gray-400 transition">Highlights</a>
          <a href="#itinerary" className="hover:text-gray-400 transition">Itinerary</a>
          <a href="#gallery" className="hover:text-gray-400 transition">Gallery</a>
          <a href="#pricing" className="hover:text-gray-400 transition">Pricing</a>
          <a href="#reviews" className="hover:text-gray-400 transition">Reviews</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
        </div>

        {/* Social Media Links with Icons */}
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://www.facebook.com/backcountrynepal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/backcountry.np"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/9779846067648"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Backcountry Nepal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
