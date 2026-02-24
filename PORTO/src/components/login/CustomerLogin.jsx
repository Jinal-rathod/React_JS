import React from "react";

const CustomerLogin = () => {
  return (
    <div className="min-h-screen">
      {/* Page Title Section */}
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
        <h1 className="text-3xl font-bold text-gray-800 py-14">
          Customer Login
        </h1>
      </div>

      {/* Login Form Section */}
      <div className="flex justify-center py-10 px-4">
        <div className="w-full max-w-2xl bg-white p-10">
          <h2 className="text-2xl font-bold mb-2">Registered Customers</h2>
          <p className="text-gray-500 mb-8">
            If you have an account, sign in with your email address.
          </p>

          {/* Email */}
          <div className="mt-6">
            <label className="block mb-2 font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="mt-6">
            <label className="block mb-2 font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="my-5">
            <a
              href="#"
              className="text-md text-gray-900 font-semibold hover:underline"
            >
              Forgot Your Password?
            </a>
          </div>

          {/* Buttons */}
          <button className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-4 font-semibold mb-4 hover:opacity-90 transition">
            SIGN IN
          </button>

          <button className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-4 font-semibold hover:opacity-90 transition">
            CREATE AN ACCOUNT
          </button>

          <p className="text-red-500 text-sm mt-6">* Required Fields</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
