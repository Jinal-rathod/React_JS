import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    marginRight: "15px",
    textDecoration: "none",
    fontWeight: "bold",
  });

  return (
    <nav style={{ padding: "20px", background: "#eee" }}>
      <NavLink to="/" style={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={activeStyle}>
        About
      </NavLink>
      <NavLink to="/services" style={activeStyle}>
        Services
      </NavLink>
      <NavLink to="/contact" style={activeStyle}>
        Contact
      </NavLink>
      <NavLink to="/products" style={activeStyle}>
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
