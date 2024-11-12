import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./StepOne.css";

function StepOneComponent() {
  const navigate = useNavigate();

  const Navigate = () => {
    navigate("/step-two", { state: { day: "Fredag" } });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Kära Georg{" "}
          <img
            src={`${process.env.PUBLIC_URL}/penguin.png`}
            alt="Penguin"
            style={{ width: "50px", height: "50px", marginBottom: "10px" }}
          />
          , boka in din dejt
        </p>
      </header>

      <div className="Cards">
        <Card className="Card">
          <Card.Body>
            <Card.Title>Fredag</Card.Title>
            <Card.Text>Ledig</Card.Text>
            <Button variant="primary" onClick={Navigate}>
              Boka
            </Button>
          </Card.Body>
        </Card>

        <Card className="Disabled-Card">
          <Card.Body>
            <Card.Title>Lördag</Card.Title>
            <Card.Text>Tanzania</Card.Text>
            <Button variant="secondary">Boka</Button>
          </Card.Body>
        </Card>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/heart.png`}
        alt="Heart"
        className="heart-image"
      />
    </div>
  );
}

export default StepOneComponent;
