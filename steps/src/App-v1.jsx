import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Appv1() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({name :"jonas"});

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
    // setTest({name: "Subed"})
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`learn how to ${messages[step - 1]}`)}
              >
                learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="white"
              onClick={handlePrevious}
            >
              <span>🫲</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="white" onClick={handleNext}>
              Next <span>🫱</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
      {/* {test.name} */}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
