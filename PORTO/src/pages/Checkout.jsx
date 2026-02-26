import React from "react";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import ShippingForm from "../components/checkout/ShippingForm";
import OrderSummary from "../components/checkout/OrderSummary";

const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">

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

      <main className="flex-1 container mx-auto px-4 py-10">
        <CheckoutSteps />

        <div className="grid lg:grid-cols-3 gap-10 mt-8">
          <div className="lg:col-span-2">
            <ShippingForm />
          </div>

          <div>
            <OrderSummary />
          </div>
        </div>
      </main>

    </div>
  );
};

export default Checkout;
