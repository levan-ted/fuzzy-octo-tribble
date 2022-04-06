import React from "react";
import Card from "../Card";
import classes from "./Gallery.module.scss";

import { CHMC } from "../../constants/app-settings";

const Gallery = ({ list }) => {
  const randomize = (num = 1) => Math.trunc(Math.random() * num) + 1;
  return (
    <section className={classes["grid-container"]}>
      {list.map((item, idx) => (
        <Card data={item} className={classes[`h-${randomize(CHMC)}`]} />
      ))}
    </section>
  );
};

export default Gallery;
