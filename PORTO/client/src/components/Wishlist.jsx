import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../redux/cartSlice";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  }
])

const Wishlist = ({ data, mode = "product" }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <p>No items in wishlist</p>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="border w-[300px] p-4 rounded shadow">
                <a href="#">
                  <img
                    className="rounded-base mb-6 "
                    src={item.image}
                    alt="product image"
                  />
                </a>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg
                      className="w-5 h-5 text-fg-yellow"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-fg-yellow"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-fg-yellow"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-fg-yellow"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-fg-yellow"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  </div>
                </div>
                <a href="#">
                  <h5 className="text-xl text-heading font-semibold tracking-tight">
                    {item.name}
                  </h5>
                </a>
                {mode === "product" ? (
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-3xl font-extrabold text-heading">
                      ${item.price}
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center bg-brand hover:bg-brand-strong box-border border focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none  border-black"
                      onClick={() => dispatch(addToCart(data))}
                    >
                      <svg
                        className="w-4 h-4 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                        />
                      </svg>
                      AddToCart
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-3xl font-extrabold text-heading">
                      ${data.price}
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center bg-brand hover:bg-brand-strong box-border border focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none  border-black"
                      onClick={() => dispatch(removeToCart(data.id))}
                    >
                      <svg
                        className="w-4 h-4 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                        />
                      </svg>
                      RemoveToCart
                    </button>
                  </div>
                )}
                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="bg-red-600 text-white px-4 py-2 mt-3 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
