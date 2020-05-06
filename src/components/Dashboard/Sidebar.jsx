import React from "react";

const Sidebar = () => {
  return (
    <div className="dashboard__sidebar">
      <div
        className="dashboard__toggle-btn d-block d-sm-block d-md-none"
        id="dashboard-toggle"
      >
        <button className="btn btn-dark">
          <i className="fas fa-th-large"></i>
        </button>
      </div>

      <div className="sidebar__menu">
        <ul className="menu-list unstyled">
          <li className="menu-item active">Dashboard</li>
          <li className="menu-item">Products</li>
          <li className="menu-item">Orders</li>
          <li className="menu-item">Reviews</li>
          <li className="menu-item">Coupons</li>
          <li className="menu-item">Reports</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
