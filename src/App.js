import { Routes, Route } from "react-router-dom";
import StepOneComponent from "./components/StepOne";
import StepTwoComponent from "./components/StepTwo";
import StepThreeComponent from "./components/StepThree";
import StepFourComponent from "./components/StepFour";

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<StepOneComponent />} />
        <Route path="/step-one" element={<StepOneComponent />} />
        <Route path="/step-two" element={<StepTwoComponent />} />
        <Route path="/step-three" element={<StepThreeComponent />} />
        <Route path="/step-four" element={<StepFourComponent />} />
      </Routes>
    </div>
  );
}
