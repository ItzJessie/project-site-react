import React, { useState } from 'react';
import './Navbar.css'; // Import the associated CSS
import { Link } from 'react-router-dom';

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
      <Link to="/Home">Home</Link>
      <Link to="/countDown">Countdown</Link>
      <Link to="/gameAnalytics">Game Analytics</Link>
      <Link to="/supportUs">Support Us</Link>
      <Link to="/contactUs">Contact US</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
