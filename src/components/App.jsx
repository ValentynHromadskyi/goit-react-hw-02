import "./App.css";
import { Description } from "./Descripton/Description";
import { Feedback } from "./Feedback/Feedback";
import { Optins } from "./Options/Options";
import { useState, useEffect } from "react";

const getInitialClicks = () => {
  const savedFeedback = window.localStorage.getItem("feedback");
  return (
    JSON.parse(savedFeedback) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );
};

function App() {
  const [feedback, setFeedback] = useState(getInitialClicks);
  const handleClick = (option) => {
    if (option === "Reset") {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }
    setFeedback((preFeedbacks) => {
      return {
        ...preFeedbacks,
        [option]: preFeedbacks[option] + 1,
      };
    });
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round(
    ((feedback.good + feedback.neutral) / total) * 100
  );
  return (
    <>
      <Description />
      <Optins onUpdate={handleClick} total={total} />
      <Feedback feedback={feedback} total={total} positive={positive} />
    </>
  );
}

export default App;
