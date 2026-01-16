const Sidebar = () => {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="sidebar"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Menu</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div className="offcanvas-body">
        <ul className="list-group">
          <li className="list-group-item">Dashboard</li>
          <li className="list-group-item">Profile</li>
          <li className="list-group-item">Settings</li>
          <li className="list-group-item">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
