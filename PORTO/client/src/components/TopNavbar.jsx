import React from "react";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className="bg-gray-100 hidden lg:block">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex py-5 text-sm font-medium text-gray-600 space-x-6">

          <Link to="/" className="hover:text-black">
            HOME
          </Link>

          <Link to="/categories" className="hover:text-black">
            CATEGORIES
          </Link>

          <Link to="/cart" className="hover:text-black">
            SHOPPING CART
          </Link>

          <Link to="/checkout" className="hover:text-black">
            CHECK OUT
          </Link>

          <Link to="/blog" className="hover:text-black">
            BLOG
          </Link>

          <Link to="/about" className="hover:text-black">
            ABOUT US
          </Link>

          <Link to="/contact" className="hover:text-black">
            CONTACT US
          </Link>

          <Link to="/login" className="hover:text-black">
            MY ACCOUNT
          </Link>

          <Link to="/register" className="hover:text-black">
            REGISTER
          </Link>

        </div>
      </div>
    </div>
  );
};

export default TopNavbar;