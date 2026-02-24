import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/about/AboutHero";
import HistorySection from "../components/about/HistorySection";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <HistorySection />
      <Footer />
    </div>
  );
};

export default About;
