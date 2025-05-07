import { createContext, useContext, useEffect, useReducer } from "react";
const QuizeContext = createContext();
const SECS_PER_QUESTION = 30;
const initialState = {
  questions: [],
  //"loading", 'error', 'ready, 'active' , 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  hightscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finshed":
      return {
        ...state,
        status: "finshed",
        hightscore:
          state.points > state.hightscore ? state.points : state.hightscore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    // return {
    //   ...state,
    //   status: "ready",
    //   index: 0,
    //   answer: null,
    //   points: 0,
    //   hightscore: state.hightscore,
    // };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finshed" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
}

function QuizeProvider({ children }) {
  const [
    { questions, status, index, answer, points, hightscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoint = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizeContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        hightscore,
        secondsRemaining,
        dispatch,
        numQuestions,
        maxPossiblePoint,
      }}
    >
      {children}
    </QuizeContext.Provider>
  );
}
function useQuiz() {
  const context = useContext(QuizeContext);
  if (context === undefined)
    throw new Error("useQuiz must be used within a QuizeProvider");
  return context;
}

export { QuizeProvider, useQuiz };
