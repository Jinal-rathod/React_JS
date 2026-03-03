import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Wishlist from "./Wishlist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Cart />,
      },
       {
        path: "/register",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  }
]);

const Layout = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Layout;