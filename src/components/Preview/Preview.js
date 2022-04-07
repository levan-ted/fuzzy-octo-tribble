import React from "react";

import { X } from "react-feather";

import classes from "./Preview.module.scss";

const Preview = ({ data, handleClose }) => {
  return (
    <>
      <div className={classes.container}>
        <X className={classes.close} onClick={handleClose} />
        <img src={data.imagePath} alt={data.title} />
      </div>
      <div onClick={handleClose} className={classes.backdrop} />
    </>
  );
};

export default Preview;
