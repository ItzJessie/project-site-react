import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import CountDown from './pages/countDown';
import GameAnalytics from './pages/gameAnalytics';
import SupportUs from './pages/supportUs';
import ContactUs from './pages/contactUs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countdown" element={<CountDown />} />
        <Route path="/gameAnalytics" element={<gameAnalytics />} />
        <Route path="/SupportUs" element={<SupportUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
