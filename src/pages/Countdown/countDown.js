import React, { useState, useEffect } from 'react';

function CountDown() {
  const [selectedGame, setSelectedGame] = useState('mk-9');
  const [timeLeft, setTimeLeft] = useState({});
  const [counting, setCounting] = useState(false);
  const [countdownInterval, setCountdownInterval] = useState(null);

  // Array of games and their release dates (example dates, replace with actual release dates)
  const gameDates = {
    'mk-9': new Date('2025-12-01T00:00:00'),
    'gta-6': new Date('2025-06-01T00:00:00'),
    'er-2': new Date('2025-09-15T00:00:00'),
    'gta-6O': new Date('2025-11-20T00:00:00'),
    'poe-2': new Date('2025-08-01T00:00:00'),
    'bo-3': new Date('2025-10-30T00:00:00'),
  };

  // Set the countdown timer
  useEffect(() => {
    if (counting) {
      const interval = setInterval(() => {
        const targetDate = gameDates[selectedGame];
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
          clearInterval(interval);
          setCounting(false);
        } else {
          const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
          const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);

          setTimeLeft({ months, days, hours, minutes, seconds });
        }
      }, 1000);
      setCountdownInterval(interval);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [counting, selectedGame]);

  // Handle game selection change
  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
    setCounting(false); // Reset countdown when game is changed
    setTimeLeft({});
  };

  // Start countdown button handler
  const startCountdown = () => {
    setCounting(true);
  };

  // Reset countdown button handler
  const resetCountdown = () => {
    setCounting(false);
    setTimeLeft({});
  };

  return (
    <div>
      <label htmlFor="games">Choose a game:</label>
      <select name="games" id="games" value={selectedGame} onChange={handleGameChange} required>
        <option value="mk-9">Mario Kart 9</option>
        <option value="gta-6">Grand Theft Auto VI</option>
        <option value="er-2">Elden Ring 2</option>
        <option value="gta-6O">Grand Theft Auto VI Online</option>
        <option value="poe-2">Path of Exile 2</option>
        <option value="bo-3">Black Ops 3 Remastered</option>
      </select>

      <div id="game-name">
        {selectedGame} Countdown
      </div>

      <div id="gaming-Countdown">
        <div id="count-container">
          <div id="monthGroup">
            <div id="month01">{timeLeft.months || '00'}</div>
            <div id="month02">{timeLeft.months || '00'}</div>
          </div>
          <h1>:</h1>

          <div id="dayGroup">
            <div id="day01">{timeLeft.days || '00'}</div>
            <div id="day02">{timeLeft.days || '00'}</div>
          </div>

          <h1>:</h1>
          <div id="hourGroup">
            <div id="hour01">{timeLeft.hours || '00'}</div>
            <div id="hour02">{timeLeft.hours || '00'}</div>
          </div>
          <h1>:</h1>
          <div id="minGroup">
            <div id="min01">{timeLeft.minutes || '00'}</div>
            <div id="min02">{timeLeft.minutes || '00'}</div>
          </div>
          <h1>:</h1>
          <div id="secGroup">
            <div id="sec01">{timeLeft.seconds || '00'}</div>
            <div id="sec02">{timeLeft.seconds || '00'}</div>
          </div>
        </div>
      </div>

      <section className="countTitles">
        <h1 className="monthTitle">Months</h1>
        <h1 className="dayTitle">Days</h1>
        <h1 className="hoursTitle">Hours</h1>
        <h1 className="minTitle">Minutes</h1>
        <h1 className="secTitle">Seconds</h1>
      </section>

      <div className="button-container">
        <button id="startCountdown" onClick={startCountdown}>
          Start Countdown
        </button>
        <button id="resetCountdown" onClick={resetCountdown}>
          Reset Countdown
        </button>
      </div>
    </div>
  );
}

export default CountDown;
