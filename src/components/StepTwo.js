import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./StepTwo.css";

function StepTwoComponent() {
  const location = useLocation();
  const day = location.state?.day; // Access the passed state
  const navigate = useNavigate();

  const Navigate = (food) => {
    navigate("/step-three", { state: { day: day, food: food } });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Välj en matkultur</p>
      </header>

      <div className="Foods">
        <span>
          <p>Italensk</p>
          <img
            src={`${process.env.PUBLIC_URL}/italian.jpg`}
            alt="Italian"
            className="food-image"
            onClick={() => Navigate("Italensk")} // Wrap in an arrow function
          />
        </span>

        <span>
          <p>Latinsk</p>
          <img
            src={`${process.env.PUBLIC_URL}/latinsk.jpg`}
            alt="Latinsk"
            className="food-image"
            onClick={() => Navigate("Latinsk")} // Wrap in an arrow function
          />
        </span>

        <span>
          <p>Libanesisk</p>
          <img
            src={`${process.env.PUBLIC_URL}/lebanese.avif`}
            alt="Lebanese"
            className="food-image"
            onClick={() => Navigate("Libanesisk")} // Wrap in an arrow function
          />
        </span>

        <span>
          <p>Asiatisk</p>
          <img
            src={`${process.env.PUBLIC_URL}/asian.jfif`}
            alt="Asian"
            className="food-image"
            onClick={() => Navigate("Asiatisk")} // Wrap in an arrow function
          />
        </span>

        <span>
          <p>Etiopisk</p>
          <img
            src={`${process.env.PUBLIC_URL}/ethiopian.jpg`}
            alt="Ethiopian"
            className="food-image"
            onClick={() => Navigate("Etiopisk")} // Wrap in an arrow function
          />
        </span>
      </div>
    </div>
  );
}

export default StepTwoComponent;
