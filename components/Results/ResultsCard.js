import React from "react";
import styles from "./ResultsCard.module.scss";

const ResultsCard = (props) => {
  return (
    <div className={styles.card}>
      <ul>
        {props.array &&
          props.array.map((word, index) => {
            const colour = index % 2 == 0 ? styles.even : styles.odd;
            return (
              <li className={colour} key={Math.random() * 1000}>
                {word}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ResultsCard;
