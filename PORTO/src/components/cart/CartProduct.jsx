import React, { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Casual Note Bag",
      price: 299,
      quantity: 1,
      image:
        "https://m2.portotheme.com/media/catalog/product/cache/bfae9ae841d11f9c929a48533f470eab/p/r/product-18_1.jpg",
    },
    {
      id: 2,
      name: "Black Ears",
      price: 101,
      quantity: 1,
      image:
        "https://m2.portotheme.com/media/catalog/product/cache/bfae9ae841d11f9c929a48533f470eab/p/r/product-55_1.jpg",
    },
  ]);

  const updateQuantity = (id, type) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                    ? item.quantity - 1
                    : 1,
            }
          : item,
      ),
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const discount = 80;
  const orderTotal = subtotal - discount;

  return (
    <div className="font-sans text-gray-800">
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
      {/* Page Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-sky-600 mb-10">Shopping Cart</h2>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center justify-between border-b pb-6"
              >
                {/* Product Info */}
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">${item.price}.00</p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <div className="flex border rounded">
                    <button
                      onClick={() => updateQuantity(item.id, "dec")}
                      className="px-3 py-1 border-r"
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "inc")}
                      className="px-3 py-1 border-l"
                    >
                      +
                    </button>
                  </div>

                  <div className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}

            {/* Discount Box */}
            <div className="flex gap-4 mt-8">
              <input
                type="text"
                placeholder="Enter discount code"
                className="border px-4 py-2 rounded w-64"
              />
              <button className="bg-gray-200 px-6 py-2 rounded font-medium">
                Apply Discount
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gray-100 p-6 rounded shadow-sm h-fit">
            <h3 className="font-semibold mb-6">Summary</h3>

            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span>-${discount}.00</span>
              </div>

              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Order Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-black text-white py-3 rounded hover:bg-gray-800 transition">
              Go To Checkout →
            </button>

            <p className="text-sky-600 text-sm mt-4 text-center cursor-pointer">
              Check Out with Multiple Addresses
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
