import React from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Header from "../components/home/Header.jsx";
import SidebarLeft from "../components/home/SidebarLeft.jsx";
import FeaturedProducts from "../components/home/FeaturedProducts.jsx";
import BrandLogos from "../components/home/BrandLogos.jsx";
import ProductColumns from "../components/home/ProductColumns.jsx";
import Services from "../components/home/Services.jsx";

const Home = () => {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <Header />

      <div className="max-w-6xl mx-auto flex gap-6 pt-10">
        <SidebarLeft />
        <div className="flex-1 space-y-10">
          <FeaturedProducts />
          <BrandLogos />
          <ProductColumns />
          <Services />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
