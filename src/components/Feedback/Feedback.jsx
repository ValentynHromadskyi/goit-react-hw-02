import css from "./Feedback.module.css";

export const Feedback = ({
  feedback: { good, neutral, bad },
  total,
  positive,
}) => {
  if (!total) return <h2>No feedback yet</h2>;
  return (
    <ul className={css.feedback}>
      <li>Good {good}</li>
      <li>Neutral {neutral}</li>
      <li>Bad {bad}</li>
      <li>Total {total}</li>
      <li>Positive {Math.round(positive)} %</li>
    </ul>
  );
};
