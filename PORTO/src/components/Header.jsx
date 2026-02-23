import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="font-sans bg-white">
      {/* Top Offer Bar */}
      <div className="bg-black text-white text-center text-sm py-2">
        Get Up to 40% OFF New-Season Styles
      </div>

      {/* Header */}
      <Navbar />

      <div className="max-w-6xl mx-auto flex mt-6 gap-6">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white border border-gray-300 shadow rounded-lg">
          <h2 className="font-semibold bg-gray-200 p-4">BROWSE CATEGORIES</h2>
          <ul className="space-y-5 text-gray-600 p-4">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Categories</li>
            <li className="hover:text-blue-600 cursor-pointer">Products</li>
            <li className="hover:text-blue-600 cursor-pointer">Pages</li>
            <li className="hover:text-blue-600 cursor-pointer">Features</li>
            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Buy Porto!</li>
          </ul>
        </aside>

        {/* Hero Section */}
        <section className="w-3/4 header_img">
          <div className="p-10 text-white flex flex-col justify-center h-full">
            <h4 className="text-gray-300 text-lg">
              Find the Boundaries. Push Through!
            </h4>
            <h2 className="text-5xl mt-1">Summer Sale</h2>
            <h1 className="text-7xl font-bold">70% OFF</h1>
            <div className="my-4 flex items-center gap-4">
              <div>Starting At</div>
              <h4 className="bg-red-400 text-xl w-20 text-center p-1">
                <b>
                  <sup>$</sup>199<sup>99</sup>
                </b>
              </h4>
              <button className="bg-black px-6 py-3 w-40 font-bold">
                SHOP NOW!
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
