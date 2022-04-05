import React from "react";
import Card from "../../components/Card/Card";
import { MOCK_DATA } from "../../constants/mock-data";
import classes from "./Homepage.module.scss";

const Homepage = () => {
  let list = MOCK_DATA;

  console.log(list);

  const randomize = (num = 1) => Math.trunc(Math.random() * num) + 1;
  console.log(randomize());

  return (
    <>
      <section>SearchBar</section>
      <section className={classes["grid-container"]}>
        {list.map((item, idx) => (
          <Card
            data={item}
            className={
              classes[`w-${randomize(3)}`] + " " + classes[`h-${randomize(3)}`]
            }
          />
        ))}
      </section>
    </>
  );
};

export default Homepage;
