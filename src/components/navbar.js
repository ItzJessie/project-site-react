import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Project</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/countDown">CountDown</Link></li>
        <li><Link to="/gameAnalytics">Game Analytics</Link></li>
        <li><Link to="/gameAnalytics">Support Us</Link></li>
        <li><Link to="/gameAnalytics">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;