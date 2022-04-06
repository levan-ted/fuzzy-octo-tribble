import React from "react";

import classes from "./Preview.module.scss";

const Preview = ({ data, handleClose }) => {
  return (
    <>
      <div className={classes.container}>
        <img src={data.imagePath} alt={data.title} />
      </div>
      <div onClick={handleClose} className={classes.backdrop} />
    </>
  );
};

export default Preview;
