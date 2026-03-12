import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import NewsletterModal from "./components/NewsletterModal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <div onClick={() => setOpen(true)}></div>
    <App />
    {open && <NewsletterModal />}

    <Footer />
  </StrictMode>,
);
