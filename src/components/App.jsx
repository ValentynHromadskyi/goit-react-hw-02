import "./App.css";
import { Description } from "./Descripton/Description";
import { Feedback } from "./Feedback/Feedback";
import { Optins } from "./Options/Options";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(
    JSON.parse(window.localStorage.getItem("feedback")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );
  const handleClick = () => {
    setFeedback(JSON.parse(window.localStorage.getItem("feedback")));
  };

  return (
    <>
      <Description />
      <Optins onUpdate={handleClick} />
      <Feedback value={feedback} />
    </>
  );
}

export default App;
