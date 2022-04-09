import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Modal from "../Modal";
import classes from "./Card.module.scss";

const Card = ({ data, className, idx }) => {
  const [showPrev, setShowPrev] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") setShowPrev(true);
  };

  return (
    <>
      <div
        onKeyDown={handleKeyDown}
        tabIndex="0"
        onClick={() => setShowPrev(true)}
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
        <Modal handleClose={() => setShowPrev(false)}>
          <img src={data.imagePath} alt={data.title} />
          <p className={classes["image-description"]}>{data.description}</p>
        </Modal>
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
