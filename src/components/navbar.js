import React, { useState } from 'react';
import './Navbar.css'; // Import the associated CSS

function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false); // State to toggle the navigation menu on small screens

  // Toggle navigation menu visibility
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav id="main-nav">
      {/* Toggle Button for Mobile View */}
      <div id="toggle-nav" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation items */}
      <ul id="nav-items" className={`columns ${isNavOpen ? 'show' : 'hide-small'}`}>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="/countdown">Countdown</a></li>
        <li><a href="/game-analytics">Game Analytics</a></li>
        <li><a href="/upcoming-release">Upcoming Release</a></li>
        <li><a href="/support-us">Support Us</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
