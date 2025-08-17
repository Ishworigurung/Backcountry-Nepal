"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface NavbarProps {
  videoEnded: boolean;
}

export default function Navbar({ videoEnded }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const heroHeight = document.querySelector("#home")?.clientHeight || 0;
      const shouldShowSideNav = window.scrollY > heroHeight - 100;
      setSideNav(shouldShowSideNav && !isMobile);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest("nav")) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems: { name: string; link: string }[] = [
    { name: "Home", link: "#home" },
    { name: "Highlights", link: "#highlights" },
    { name: "Itinerary", link: "#itinerary" },
    { name: "Gallery", link: "#gallery" },
    { name: "Pricing", link: "#pricing" },
    { name: "Reviews", link: "#reviews" },
    { name: "Contact", link: "#contact" },
  ];

  const handleMenuClick = () => setIsOpen(false);

  if (!videoEnded) return null;

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed z-50 ${
          sideNav && !isMobile
            ? "top-1/2 right-2 sm:right-4 transform -translate-y-1/2 flex-col bg-black/60 backdrop-blur-lg p-3 sm:p-4 rounded-xl"
            : isMobile
            ? "top-0 left-0 w-full bg-black/30 backdrop-blur-sm border-b border-white/20"
            : "top-0 left-0 w-full bg-transparent"
        }`}
      >
        <div
          className={`${
            sideNav && !isMobile
              ? "flex flex-col items-center space-y-3"
              : "max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 sm:space-x-3 z-60"
            onClick={handleMenuClick}
          >
            <Image
              src="/images/logo1.png"
              alt="Backcountry Nepal Logo"
              width={isMobile ? 32 : 40}
              height={isMobile ? 32 : 40}
              priority
              className="rounded-full"
            />
            {(!sideNav || isMobile) && (
              <span className="font-archivo-black text-lg sm:text-xl text-white drop-shadow-lg">
                <span className="hidden sm:inline">Backcountry Nepal</span>
              </span>
            )}
          </a>

          {/* Desktop & SideNav Menu */}
          {!isMobile && (
            <ul
              className={`${
                sideNav ? "flex flex-col space-y-3" : "hidden md:flex space-x-6"
              }`}
            >
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.name === "Contact" ? (
                    <a
                      href={item.link}
                      className={`px-4 py-2 bg-white/30 backdrop-blur-lg text-white font-semibold rounded-lg 
                                 hover:bg-white/50 hover:text-black transition-all duration-300 ease-in-out
                                 ${sideNav ? "text-sm" : ""} font-archivo-black`}
                    >
                      {sideNav ? "Contact" : item.name}
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      className={`${
                        sideNav
                          ? "text-white hover:text-blue-400 transition-colors text-sm font-medium font-archivo-black"
                          : "hover:text-blue-400 transition-colors text-white font-medium font-archivo-black"
                      }`}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none z-60 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <motion.div
                className="space-y-1.5"
                animate={isOpen ? "open" : "closed"}
              >
                <motion.span
                  className="block w-6 h-0.5 bg-white origin-center"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-white"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-white origin-center"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </button>
          )}
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full space-y-6 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col items-center space-y-5 w-full max-w-xs">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="w-full"
                  >
                    {item.name === "Contact" ? (
                      <a
                        href={item.link}
                        onClick={handleMenuClick}
                        className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                                   text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 
                                   transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg font-archivo-black"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <a
                        href={item.link}
                        onClick={handleMenuClick}
                        className="block w-full text-center py-3 px-6 text-white text-lg font-medium 
                                   hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300 
                                   transform hover:scale-105 font-archivo-black"
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
              <p className="text-white/70 text-sm text-center mt-8">
                Tap anywhere to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
