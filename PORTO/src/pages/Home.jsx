import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import SidebarLeft from "../components/SidebarLeft";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import BrandLogos from "../components/BrandLogos.jsx";
import ProductColumns from "../components/ProductColumns.jsx";
import Services from "../components/Services.jsx";

const Home = () => {
  return (
    <div className="font-sans bg-white">
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
