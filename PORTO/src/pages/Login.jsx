import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CustomerLogin from "../components/login/CustomerLogin";

const Login = () => {
  return (
    <div>
      <Navbar />
      <CustomerLogin />
      <Footer />
    </div>
  );
};

export default Login;
