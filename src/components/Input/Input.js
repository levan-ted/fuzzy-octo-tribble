import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

const Input = ({ type, placeholder, value, onChange, helperText }) => {
  const [showUnderline, setShowUnderline] = useState(false);

  const handleFocus = () => {
    setShowUnderline(true);
  };
  const handleBlur = () => {
    setShowUnderline(() => {
      if (value.trim() !== '') {
        return true;
      } else {
        return false;
      }
    });
  };

  const underlineClasses = showUnderline
    ? `${classes.underline} ${classes['show-underline']}`
    : classes.underline;
  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <span className={underlineClasses} />
      {helperText && <p className={classes['helper-text']}>{helperText}</p>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.string
};

export default Input;
