import React from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer";
import ContactMap from "../components/contact/ContactMap.jsx";
import ContactForm from "../components/contact/ContactForm.jsx";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactMap />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
