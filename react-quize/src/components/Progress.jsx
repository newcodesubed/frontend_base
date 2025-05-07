import { useQuiz } from "../context/QuizeContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoint, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> /{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoint}
      </p>
    </header>
  );
}

export default Progress;
