import React from "react";

const ContactMap = () => {
  return (
    <div>
      {/* Top Navbar */}
      <div className=" bg-gray-100 text-center ">
        <div className=" max-w-6xl mx-auto py-5 flex text-sm font-medium text-gray-600 space-x-6">
          <a href="#" className="hover:text-black">
            HOME
          </a>
          <a href="#" className="hover:text-black">
            CATEGORIES
          </a>
          <a href="#" className="hover:text-black">
            PRODUCTS
          </a>
          <a href="#" className="hover:text-black">
            PAGES
          </a>
          <a href="#" className="hover:text-black">
            FEATURES
          </a>
          <a href="#" className="hover:text-black">
            BLOG
          </a>
          <a href="#" className="hover:text-black">
            ABOUT US
          </a>
          <a href="#" className="hover:text-black">
            BUY PORTO!
          </a>
        </div>
      </div>
      {/* Google Map Section */}
      <div className="max-w-6xl h-[300px] py-5 mx-auto">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
