import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#home">Start Up's</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#repository">Repository</a></li>
        <li><a href="#resources">Resource Allocation</a></li>
        <li><a href="#ipr">IPR Management</a></li>
        <li><a href="#collaboration">Collaboration</a></li>
        <li><a href="#analytics">Analytics</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
