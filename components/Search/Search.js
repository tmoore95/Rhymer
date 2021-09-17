import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const [word, setWord] = useState("");
  console.log(word);

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
          console.log(data.rhymes.all.filter((word) => !word.includes(" ")));
        }
      });
    setWord("");
  };

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
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Search;
