import css from "./Feedback.module.css";

export const Feedback = ({ value: { good, neutral, bad } }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <h2>No feedback yet</h2>;
  }
  return (
    <ul className={css.feedback}>
      <li>Good {good || 0}</li>
      <li>Neutral {neutral || 0}</li>
      <li>Bad {bad || 0}</li>
      <li>Total {(good || 0) + (neutral || 0) + (bad || 0)}</li>
      <li>
        Positive
        {Math.round(((good + neutral) / (good + neutral + bad)) * 100) || 0}%
      </li>
    </ul>
  );
};
