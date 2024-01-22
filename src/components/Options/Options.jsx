import css from "./Options.module.css";

export const Optins = ({ onUpdate, total }) => {
  return (
    <ul className={css.options}>
      <li>
        <button onClick={() => onUpdate("good")}>Good</button>
      </li>
      <li>
        <button onClick={() => onUpdate("neutral")}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onUpdate("bad")}>Bad</button>
      </li>
      {!total || (
        <li>
          <button onClick={() => onUpdate("Reset")}>Reset</button>
        </li>
      )}
    </ul>
  );
};
