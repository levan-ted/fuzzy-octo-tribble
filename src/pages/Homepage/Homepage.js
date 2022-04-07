import React, { useState, useContext } from "react";

import Searchbar from "../../components/Searchbar/Searchbar";
import Gallery from "../../components/Gallery";
import Pagination from "../../components/Pagination";
import classes from "./Homepage.module.scss";

import { dataContext } from "../../contexts/data-context";
import { cardsPerPage } from "../../constants/app-settings";
import { filterCards } from "../../helpers/filter-cards";

const Homepage = () => {
  const ctx = useContext(dataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [keywords, setKeywords] = useState([]);
  const filteredCards = filterCards(ctx.data, keywords);
  let list = filteredCards.slice(0, currentPage * cardsPerPage);

  return (
    <div className={classes.homepage}>
      <Searchbar keywords={keywords} setKeywords={setKeywords} />

      <Gallery list={list} />
      {list.length > 0 && (
        <Pagination
          noMoreItems={list.length === filteredCards.length}
          handlePagination={() => setCurrentPage(currentPage + 1)}
        />
      )}
    </div>
  );
};

export default Homepage;
