import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.scss';

import { X } from 'react-feather';

const Modal = ({ children, handleClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') handleClose();
    if (e.target.id === 'X' && e.key === 'Enter') handleClose();
  };
  return (
    <>
      <div tabIndex="0" className={classes.container} onKeyDown={handleKeyDown}>
        <X
          id="X"
          tabIndex="0"
          className={classes.close}
          onClick={handleClose}
          onKeyDown={handleKeyDown}
        />
        {children}
      </div>
      <div onClick={handleClose} className={classes.backdrop} />
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func
};

export default Modal;
