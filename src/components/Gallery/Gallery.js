import React from "react";
import Card from "../Card";
import classes from "./Gallery.module.scss";

const Gallery = ({ list }) => {
  if (list.length === 0) return <p>No results</p>;
  return (
    <section className={classes["grid-container"]}>
      {list.map((item, idx) => (
        <Card
          key={item.title}
          idx={idx}
          data={item}
          className={classes[`h-${item.size}`]}
        />
      ))}
    </section>
  );
};

export default Gallery;
