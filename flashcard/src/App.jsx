import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setselectedId] = useState(9103);
  // handleClick le kun cahi click garxa banera id bat amatra tha hunxa so id lai nai pass garxa tesko lagi id aaunu paryo click garda.
  function handleClick(id) {
    setselectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {/* question is being maped rightnow */}
      {questions.map((question) => (
        <div
          key={question.id}
          // kina cahi function ma rakheko banda click baye paxi matra execute hoss banerw else bako bai garxa
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
