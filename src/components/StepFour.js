import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import "./StepFour.css";

function StepFourComponent() {
  const location = useLocation();
  const { day, food, activities } = location.state || {}; // Retrieve day, food, and activities from state

  const [isFading, setIsFading] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // State to control visibility of booking details
  const [showImage, setShowImage] = useState(false); // State to control visibility of heart image
  const audioRef = useRef(null);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setIsFading(true); // Start the fade-out animation
    setShowDetails(true); // Show booking details after button click

    // Remove elements after the fade-out effect completes (1s delay to match CSS)
    setTimeout(() => {
      setIsRemoved(true); // Remove elements from the DOM
    }, 1000);

    // Show the heart image after a 15-second delay
    setTimeout(() => {
      setShowImage(true);
    }, 15000);
  };

  return (
    <div className="App">
      {!isRemoved && (
        <>
          <header className={`App-header ${isFading ? "fade-out" : ""}`}>
            <p>Tack för din bokning</p>
          </header>

          <Button
            variant="dark"
            onClick={handlePlayMusic}
            className={`booking-button ${isFading ? "fade-out" : ""}`}
          >
            Visa bokning
          </Button>
        </>
      )}

      {/* Apply the 'visible' class conditionally for fade-in effect */}
      <div className={`booking-details ${showDetails ? "visible" : ""}`}>
        <h2 style={{ marginBottom: "20px" }}>Bokningsdetaljer</h2>
        <p>Dag: {day}</p>
        <p>Matkultur: {food}</p>
        <p>Valda aktiviteter:</p>
        <ul>
          {activities && activities.length > 0 ? (
            activities.map((activity, index) => <li key={index}>{activity}</li>)
          ) : (
            <li>Inga aktiviteter valda</li> // "No activities selected" in Swedish
          )}
        </ul>
      </div>

      {/* Display heart image after 15 seconds with fade-in effect */}
      <img
        src={`${process.env.PUBLIC_URL}/best-part-picture.jfif`}
        alt="Heart"
        className={`best-part-image ${showImage ? "fade-in" : ""}`}
      />

      <audio
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/best-part.mp3`}
        loop
      />
    </div>
  );
}

export default StepFourComponent;
