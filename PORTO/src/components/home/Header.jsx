import React from "react";

const Header = () => {
  return (
    <div className="font-sans bg-white">
      <div className="py-2 px-4 mt-5">
        <div className="max-w-6xl mx-auto ">
          <div className="flex justify-between items-center">
            <div className="border border-gray-200 w-full">
              <img
                src=""
                alt=""
                className=" object-contain grayscale hover:grayscale-0 transition duration-300"
              />
              <div className="flex flex-col p-4">
                <p className="font-bold text-md">FREE SHIPPING & RETURN</p>
                <p className="text-sm text-gray-500">
                  Free shipping on all orders over $99
                </p>
              </div>
            </div>
            <div className="border border-gray-200 w-full">
              <img
                src=""
                alt=""
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
              <div className="flex flex-col p-4">
                <p className="font-bold text-md">MONEY BACK GUARANTEE</p>
                <p className="text-sm text-gray-500">
                  100% money back guarantee
                </p>
              </div>
            </div>
            <div className="border border-gray-200 w-full">
              <img
                src=""
                alt=""
                className=" object-contain grayscale hover:grayscale-0 transition duration-300"
              />
              <div className="flex flex-col p-4">
                <p className="font-bold text-md">ONLINE SUPPORT 24/7</p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex mt-6 gap-6">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white border border-gray-300">
          <h2 className="font-bold bg-gray-200 p-4 py-3">BROWSE CATEGORIES</h2>
          <ul className="text-gray-600 px-4 py-2">
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-3">
              Home
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-3">
              Categories
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-3">
              Products
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-3">
              Pages
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-3">
              Features
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-3">
              Blog
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-3">
              About Us
            </li>
            <li className="hover:text-blue-600 cursor-pointer py-3">
              Buy Porto!
            </li>
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
