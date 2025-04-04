import React from 'react';
import { Link } from 'react-router-dom'; 
import './gameAnalytics.css'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import backImage from '../../assets/images/back.png'; 

function GameAnalytics() {
 const navigate = useNavigate(); // Initialize useNavigate

// Function to handle the back button click
const handleBackClick = () => {
  navigate(-1); // Go back to the previous page
};

  return (
    <div id="container">
      

      {/* Step Sections */}
      <section className="game container-1">
        <section className="step1">
          Step 1:
          <p>Define the game concept</p>
        </section>
        <section className="step2">
          Step 2:
          <p>Research market trends</p>
        </section>
        <section className="step3">
          Step 3:
          <p>Create a design document</p>
        </section>
        <section className="step4">
          Step 4:
          <p>Assemble the development team</p>
        </section>
      </section>

      {/* Process Sections */}
      <section className="game container-2">
        <section className="process1">
          Process 1:
          <p>Design core gameplay mechanics</p>
        </section>
        <section className="process2">
          Process 2:
          <p>Develop character models & environments</p>
        </section>
        <section className="process3">
          Process 3:
          <p>Implement physics & AI behavior</p>
        </section>
        <section className="process4">
          Process 4:
          <p>Test initial prototypes</p>
        </section>
      </section>

      {/* Implement Sections */}
      <section className="game container-3">
        <section className="implement1">
          Implement 1:
          <p>Optimize game performance</p>
        </section>
        <section className="implement2">
          Implement 2:
          <p>Beta testing & community feedback</p>
        </section>
        <section className="implement3">
          Implement 3:
          <p>Bug fixes & patches</p>
        </section>
        <section className="implement4">
          Implement 4:
          <p>Launch & post-launch support</p>
        </section>
      </section>
      {/* Back Button */}
      <button onClick={handleBackClick} className="back-button">
        {/* Use the imported back image */}
        <img id="back" src={backImage} alt="back arrow" />
      </button>
    </div>
  );
}

export default GameAnalytics;
