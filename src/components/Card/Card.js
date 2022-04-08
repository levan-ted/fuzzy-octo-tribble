import React, { useState } from "react";
import PropTypes from "prop-types";
import Preview from "../Preview";
import classes from "./Card.module.scss";

const Card = ({ data, className, idx }) => {
  const [showPrev, setShowPrev] = useState(false);
  const animationDelay = `${idx * 100}s`;
  return (
    <>
      <div
        onClick={() => setShowPrev(true)}
        style={{ animationDelay }}
        className={`${classes.card} ${className}`}
      >
        <div className={classes["image-container"]}>
          <img
            className={classes.image}
            src={data.imagePath}
            alt={data.title}
          />
        </div>
        <span className={classes.title}>{data.title}</span>
      </div>
      {showPrev && (
        <Preview data={data} handleClose={() => setShowPrev(false)} />
      )}
    </>
  );
};

Card.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  idx: PropTypes.number,
};

export default Card;
