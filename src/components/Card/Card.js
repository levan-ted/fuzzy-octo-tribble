import React from "react";
import classes from "./Card.module.scss";

const Card = ({ data, className }) => {
  return (
    <div className={`${classes.card} ${className}`}>
      <div>
        <img className={classes.image} src={data.imagePath} alt={data.title} />
      </div>
    </div>
  );
};

export default Card;
