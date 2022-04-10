import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Search, X } from 'react-feather';
import Input from '../Input';

import classes from './Searchbar.module.scss';

const Searchbar = ({ keywords, setKeywords }) => {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeywords((prevState) => {
      if (prevState.includes(inputVal) || inputVal.trim() === '') return prevState;
      return [...prevState, inputVal.toLowerCase()];
    });
    setInputVal('');
  };

  const handleChange = (e) => {
    setInputVal(e.target.value.toLowerCase());
  };

  const handleClearInput = () => setInputVal('');

  const handleRemove = (word) =>
    setKeywords((prevState) => prevState.filter((item) => item !== word));

  return (
    <section className={classes.container}>
      <form onSubmit={handleSubmit}>
        <X className={classes.clear} onClick={handleClearInput} />
        <Input type="text" placeholder="Search..." value={inputVal} onChange={handleChange} />
        <button type="submit">
          <Search />
        </button>
        {/* <span /> */}
      </form>
      <div className={classes.keywords}>
        {keywords.map((word) => (
          <span key={word} className={classes.keyword}>
            {word}
            <X className={classes['remove-icon']} onClick={() => handleRemove(word)} />
          </span>
        ))}
      </div>
    </section>
  );
};

Searchbar.propTypes = {
  keywords: PropTypes.array,
  setKeywords: PropTypes.func
};

export default Searchbar;
