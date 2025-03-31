import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div id="container">
                <h1 id="clickable-word">
                    <a href="/countDown">
                    <span>Welcome in!</span>
                    </a>
                </h1>
                <p id="tap-p">Tap Now</p>
                <h2 id="title">GAMING COUNTDOWN</h2>
                <p id="quote">THE ONLY COUNTER YOU WILL EVER NEED</p>
                </div>
  );
}
export default Home;