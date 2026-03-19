import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import TopNavbar from "../TopNavbar";
import Wishlist from "../../pages/Wishlist";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { cart } = useContext(CartContext);

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
      <TopNavbar />
      {/* Page Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-sky-600 mb-10">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>No items in Cart</p>
        ) : (

          <div >
            {cart.map((item) => (
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
                    <p className="text-gray-500">{item.price}</p>
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
          </div>
        )}
      </section>
    </div>
  );
}
