import React, { useState } from 'react';
import './contactUs.css'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import backImage from '../../assets/images/back.png'; 

function ContactUs() {
  const [formStatus, setFormStatus] = useState('');

  const navigate = useNavigate();

  // Function to handle the back button click
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Set form submission status (could be more dynamic or use actual API)
    setFormStatus('Submitting...');

    // For now, since it's a mailto form, React will not handle the submission
    // You may want to use an actual form handler API in the future
    setTimeout(() => {
      setFormStatus('Thank you for your message!');
    }, 2000);
  };

  return (
    <div id="back01">
      <div id="back02">
{/* Back Button */}
<button onClick={handleBackClick} className="back-button">
    {/* Use the imported back image */}
    <img id="back" src={backImage} alt="back arrow" />
  </button>

        <div className="contact-container">
          <form id="contact-form" action="mailto:jessiebrownjapan@gmail.com" method="post" enctype="text/plain" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Submit</button>
            <p id="form-status">{formStatus}</p>
          </form>

          <div className="iframe-container">
            <h2>Find Us Here</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_MAP_URL" // Replace with actual Google Maps URL
              frameBorder="0"
              allowFullScreen
              title="Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default ContactUs;
