const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark py-4">
      <div className="container-fluid">
        <button
          className="btn btn-outline-light"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
        >
          ☰
        </button>
        <span className="navbar-brand ms-3">React App</span>
      </div>
    </nav>
  );
};

export default Navbar;
