import React, { useState } from "react";
import { Search, X } from "react-feather";

import classes from "./Searchbar.module.scss";

const Searchbar = (props) => {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setKeywords((prevState) => {
      if (prevState.includes(inputVal)) return prevState;
      return [...prevState, inputVal.toLowerCase()];
    });
    setInputVal("");
  };

  const handleChange = (e) => {
    setInputVal(e.target.value.toLowerCase());
  };

  const handleClearInput = () => setInputVal("");

  const handleRemove = (word) =>
    props.setKeywords((prevState) => prevState.filter((item) => item !== word));

  return (
    <section className={classes.container}>
      <form onSubmit={handleSubmit}>
        <X className={classes.clear} onClick={handleClearInput} />
        <input
          type="text"
          placeholder="Search..."
          value={inputVal}
          onChange={handleChange}
        />
        <button type="submit">
          <Search />
        </button>
        <span />
      </form>
      <div className={classes.keywords}>
        {props.keywords.map((word) => (
          <span className={classes.keyword}>
            {word}
            <X
              className={classes["remove-icon"]}
              onClick={() => handleRemove(word)}
            />
          </span>
        ))}
      </div>
    </section>
  );
};

export default Searchbar;
