import React, { useState, useEffect } from "react";
import ResultsCard from "../Results/ResultsCard";
import styles from "./Search.module.scss";

const Search = (props) => {
  const [word, setWord] = useState("");
  const [resultsArr, setResultsArr] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/rhymes`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_WORDS,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.rhymes.all !== undefined) {
          // console.log(data.rhymes.all.filter((word) => !word.includes(" ")));
          setResultsArr(data.rhymes.all.filter((word) => !word.includes(" ")));
        } else {
          setResultsArr(["No rhyme exists for that word!"]);
        }
        console.log();
      });
    setWord("");
  };

  console.log(resultsArr);

  useEffect(() => {
    const input = document.getElementById("input");
    input.oninvalid = (e) => {
      e.target.setCustomValidity("Please enter a word!");
    };
    input.oninput = (e) => {
      e.target.setCustomValidity("");
    };
  });

  return (
    <div className={styles.form}>
      <form onSubmit={submitHandler}>
        <input
          id="input"
          type="text"
          placeholder="Enter a word"
          onChange={(e) => {
            setWord(e.target.value);
          }}
          value={word}
          required
        />
        <button className={word ? styles.bounce : styles.button} type="submit">
          Enter
        </button>
      </form>
      <ResultsCard array={resultsArr} />
    </div>
  );
};

export default Search;
