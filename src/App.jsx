import { useState } from "react";
import { Step1 } from "./components/step1";
import { Step2 } from "./components/step2";
import { Step3 } from "./components/step3";
import { Step4 } from "./components/step4";

function App() {
  const [step, setStep] = useState(1);
  function increaseStep() {
    setStep((prev) => prev + 1);
  }
  function reduceStep() {
    setStep((prev) => prev - 1);
  }

  return (
    <div className="w-screen h-screen justify-center items-center flex ">
      {step === 1 && <Step1 increaseStep={increaseStep} />}
      {step === 2 && (
        <Step2 increaseStep={increaseStep} reduceStep={reduceStep} />
      )}
      {step === 3 && (
        <Step3 increaseStep={increaseStep} reduceStep={reduceStep} />
      )}
      {step === 4 && (
        <Step4 increaseStep={increaseStep} reduceStep={reduceStep} />
      )}
    </div>
  );
}
export default App;
