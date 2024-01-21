import { useState } from "react";
import css from "./Options.module.css";

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

export const Optins = (a) => {
  const [good, setGood] = useState(getInitialClicks().good + 1 || 0);
  const [neutral, setNeutral] = useState(getInitialClicks().neutral + 1 || 0);
  const [bad, setBad] = useState(getInitialClicks().bad + 1 || 0);

  const set = (a) => {
    if (a === 1) {
      setGood(good + 1);
      window.localStorage.setItem(
        "feedback",
        JSON.stringify({
          ...getInitialClicks(),
          good: good,
        })
      );
    } else if (a === 2) {
      setNeutral(neutral + 1);
      window.localStorage.setItem(
        "feedback",
        JSON.stringify({
          ...getInitialClicks(),
          neutral: neutral,
        })
      );
    } else if (a === 3) {
      setBad(bad + 1);
      window.localStorage.setItem(
        "feedback",
        JSON.stringify({
          ...getInitialClicks(),
          bad: bad,
        })
      );
    } else if (a === 4) {
      setGood(1);
      setNeutral(1);
      setBad(1);
      window.localStorage.setItem(
        "feedback",
        JSON.stringify({
          good: 0,
          neutral: 0,
          bad: 0,
        })
      );
    }
  };

  return (
    <ul className={css.options}>
      <li>
        <button
          onClick={() => {
            set(1), a.onUpdate();
          }}
        >
          good
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            set(2), a.onUpdate();
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            set(3), a.onUpdate();
          }}
        >
          Bad
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            set(4), a.onUpdate();
          }}
        >
          Reset
        </button>
      </li>
    </ul>
  );
};
