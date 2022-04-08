import React from "react";
import PropTypes from "prop-types";

import { X } from "react-feather";

import classes from "./Preview.module.scss";

const Preview = ({ data, handleClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") handleClose();
  };
  return (
    <>
      <div tabIndex="0" className={classes.container} onKeyDown={handleKeyDown}>
        <X className={classes.close} onClick={handleClose} />
        <img src={data.imagePath} alt={data.title} />
      </div>
      <div onClick={handleClose} className={classes.backdrop} />
    </>
  );
};

Preview.propTypes = {
  data: PropTypes.object,
  handleClose: PropTypes.func,
};

export default Preview;
