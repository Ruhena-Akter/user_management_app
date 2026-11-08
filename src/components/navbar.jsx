import React from "react";

const Navbar = ({ totalUsers, favoriteCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">👥</span>
          <h2>User<span>Hub</span></h2>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#users">All Users</a>
          <a href="#favorites">Favorites</a>
        </div>

        {/* User Statistics */}
        <div className="nav-stats">
          <div className="stat-item">
            <span>Total Users</span>
            <strong>{totalUsers}</strong>
          </div>

          <div className="stat-item favorite-stat">
            <span>Favorites ❤️</span>
            <strong>{favoriteCount}</strong>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;