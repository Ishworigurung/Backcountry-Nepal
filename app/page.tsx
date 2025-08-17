"use client";

import { useState, useEffect } from "react";
import LandingIntro from "./components/LandingIntro";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import PackageHighlights from "./components/PackageHighlights";
import ItineraryOverview from "./components/ItineraryOverview";
import VisionSection from "./components/VisionSection";
import GallerySection from "./components/GallerySection";
import PricingBooking from "./components/PricingBooking";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const Page: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans">
      {showIntro ? (
        <LandingIntro onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <Navbar />
          <HeroBanner />
          <AboutSection />
          <PackageHighlights />
          <ItineraryOverview />
          <VisionSection />
          <GallerySection />
          <PricingBooking />
          <Reviews />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
