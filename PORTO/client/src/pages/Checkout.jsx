import React from "react";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import ShippingForm from "../components/checkout/ShippingForm";
import OrderSummary from "../components/checkout/OrderSummary";
import TopNavbar from "../components/TopNavbar";

const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopNavbar />

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
