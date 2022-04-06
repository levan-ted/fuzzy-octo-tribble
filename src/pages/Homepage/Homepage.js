import React, { useState } from "react";
import Gallery from "../../components/Gallery";
import Pagination from "../../components/Pagination";
import classes from "./Homepage.module.scss";

import { MOCK_DATA } from "../../constants/mock-data";
import { cardsPerPage } from "../../constants/app-settings";

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let list = MOCK_DATA.slice(0, currentPage * cardsPerPage);

  return (
    <div className={classes.homepage}>
      <section>SearchBar</section>

      <Gallery list={list} />
      <Pagination
        noMoreItems={list.length === MOCK_DATA.length}
        handlePagination={() => setCurrentPage(currentPage + 1)}
      />
    </div>
  );
};

export default Homepage;
