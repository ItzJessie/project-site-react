import React from 'react';
import './supportUs.css'; 

function SupportUs() {
  const handleDonateClick = () => {
    // You can replace this with actual donation logic
    alert('Redirecting to donation page...');
  };

  return (
    <div id="container">
      <div className="box">
        <div className="in-box01">
          <div className="in-box02">
            <h2>THANK YOU</h2>
            <img className="yellow-circle" src="images/coin.svg" alt="circle-picture" />
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
    </div>
  );
}

export default SupportUs;
