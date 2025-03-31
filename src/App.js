import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Home from './pages/Home/Home';
import CountDown from './pages/Countdown/countDown';
import GameAnalytics from './pages/GameAnalytics/gameAnalytics';
import SupportUs from './pages/SupportUs/supportUs';
import ContactUs from './pages/ContactUs/contactUs';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/countdown" element={<CountDown />} />
        <Route path="/gameanalytics" element={<GameAnalytics />} />
        <Route path="/supportus" element={<SupportUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
