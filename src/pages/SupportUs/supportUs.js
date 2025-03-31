import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './supportUs.css';

// Import images from the assets/images folder
import coinImage from '../../assets/images/coin.svg';
import backImage from '../../assets/images/back.png'; 

function SupportUs() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDonateClick = () => {
    // You can replace this with actual donation logic
    alert('Redirecting to donation page...');
  };

  // Function to handle the back button click
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div id="container">
      <div className="box">
        <div className="in-box01">
          <div className="in-box02">
            <h2>THANK YOU</h2>
            {/* Use the imported coin image */}
            <img className="yellow-circle" src={coinImage} alt="coin" />
            <p>
              We appreciate your support! Your contributions help us continue creating, innovating, and sharing our passion with the world.
              Whether through donations or sharing our work.
            </p>
            <button id="support-btn" type="button" onClick={handleDonateClick}>
              DONATE NOW
            </button>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button onClick={handleBackClick} className="back-button">
        {/* Use the imported back image */}
        <img id="back" src={backImage} alt="back arrow" />
      </button>
    </div>
  );
}

export default SupportUs;
