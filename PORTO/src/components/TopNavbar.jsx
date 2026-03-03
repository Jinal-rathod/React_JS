import React from "react";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <>
      {/* Top Navbar */}
      <div className=" bg-gray-100 text-center ">
        <div className=" max-w-6xl mx-auto py-5 flex text-sm font-medium text-gray-600 space-x-6">
          <Link to={`/`} className="hover:text-black">
            HOME
          </Link>
          <Link to={`/categories`} className="hover:text-black">
            CATEGORIES
          </Link>
          <Link to={`/cart`} className="hover:text-black">
            SHOPPING CART
          </Link>
          <Link to={`/checkout`} className="hover:text-black">
            CHECK OUT
          </Link>
          <Link to={`/blog`} className="hover:text-black">
            BLOG
          </Link>
          <Link to={`/about`} className="hover:text-black">
            ABOUT US
          </Link>
          <Link to={`/contact`} className="hover:text-black">
            CONTACT US
          </Link>
          <Link to={`/login`} className="hover:text-black">
            MY ACCOUNT
          </Link>
          <Link to={`/register`} className="hover:text-black">
            RAGISTER
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
