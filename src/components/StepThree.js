import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";
import "./StepThree.css";

function StepThreeComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the passed state from the previous view
  const day = location.state?.day;
  const food = location.state?.food;

  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    selectAll: false,
  });

  const handleOptionChange = (option) => {
    const updatedOptions = {
      ...selectedOptions,
      [option]: !selectedOptions[option],
    };

    // Update "Select All" status based on individual options
    if (option !== "selectAll") {
      updatedOptions.selectAll =
        updatedOptions.option1 &&
        updatedOptions.option2 &&
        updatedOptions.option3 &&
        updatedOptions.option4;
    } else {
      updatedOptions.option1 = !selectedOptions.selectAll;
      updatedOptions.option2 = !selectedOptions.selectAll;
      updatedOptions.option3 = !selectedOptions.selectAll;
      updatedOptions.option4 = !selectedOptions.selectAll;
    }

    setSelectedOptions(updatedOptions);
  };

  const handleNavigate = () => {
    // Map of option keys to their labels
    const options = {
      option1: "Promenera längst stan",
      option2: "Kyssa varandra",
      option3: "Kramas",
      option4: "Äta dig (Dessert)",
    };

    // Filter selected options and retrieve their labels
    const selectedActivities = Object.keys(selectedOptions)
      .filter((option) => selectedOptions[option] && option !== "selectAll")
      .map((option) => options[option]); // Map to the corresponding labels

    navigate("/step-four", {
      state: {
        day: day,
        food: food,
        activities: selectedActivities, // Pass selected labels instead of keys
      },
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Välj efter middagsaktivitet</p>
      </header>

      <div className="checkboxes">
        <Form>
          <Form.Check
            type="checkbox"
            label="Promenera längst stan"
            checked={selectedOptions.option1}
            onChange={() => handleOptionChange("option1")}
          />
          <Form.Check
            type="checkbox"
            label="Kyssa varandra"
            checked={selectedOptions.option2}
            onChange={() => handleOptionChange("option2")}
          />
          <Form.Check
            type="checkbox"
            label="Kramas"
            checked={selectedOptions.option3}
            onChange={() => handleOptionChange("option3")}
          />
          <Form.Check
            type="checkbox"
            label="Äta dig (Dessert)"
            checked={selectedOptions.option4}
            onChange={() => handleOptionChange("option4")}
          />
          <Form.Check
            type="checkbox"
            label="Välj alla alternativ"
            checked={selectedOptions.selectAll}
            onChange={() => handleOptionChange("selectAll")}
          />
        </Form>

        <Button
          variant="dark"
          style={{ marginTop: "20px" }}
          onClick={handleNavigate}
        >
          Skicka in
        </Button>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/heart-anatomy.png`}
        alt="Heart"
        className="heart-anatomy-image"
      />
    </div>
  );
}

export default StepThreeComponent;
