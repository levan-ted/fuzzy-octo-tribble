import React from "react";
import classes from "./Card.module.scss";

const Card = ({ data, className }) => {
  return (
    <div className={`${classes.card} ${className}`}>
      <div className={classes["image-container"]}>
        <img className={classes.image} src={data.imagePath} alt={data.title} />
      </div>
      <span className={classes.title}>{data.title}</span>
    </div>
  );
};

export default Card;
