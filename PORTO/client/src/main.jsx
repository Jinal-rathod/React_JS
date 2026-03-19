import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import NewsletterModal from "./components/NewsletterModal.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <Navbar />
          <div onClick={() => setOpen(true)}></div>
          <App />
          {open && <NewsletterModal />}
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
