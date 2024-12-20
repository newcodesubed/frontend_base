import React, { useState } from "react";
import Adder from "./components/Adder";
import List from "./components/List";

const Goals = [
  {
    id: 1,
    goal: "Learn a New Skill",
  },
  {
    id: 2,
    goal: "Complete a Project",
  },
  {
    id: 3,
    goal: "Save and Invest",
  },
  {
    id: 4,
    goal: "Improve Physical Health",
  },
];

export default function App() {
  const [goals, setGoals] = useState("");
  const [lists, setLists] = useState(Goals);
  return (
    <>
      <Adder goals={goals} setGoals={setGoals}>
        <span>+</span>
      </Adder>
      <List lists={lists} />
    </>
  );
}
