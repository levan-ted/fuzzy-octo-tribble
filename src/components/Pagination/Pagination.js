import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';

import classes from './Pagination.module.scss';

const Pagination = ({ noMoreItems, handlePagination }) => {
  const endOfPage = <p>No more items to show...</p>;
  const loaderRef = useRef();

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setTimeout(handlePagination, 500);
    }
  });

  useEffect(() => {
    const options = { root: null, rootMargin: '20px', threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loaderRef.current) observer.observe(loaderRef.current);
  }, [handleObserver]);

  return (
    <section className={classes.container}>
      {noMoreItems ? endOfPage : <Loader ref={loaderRef} />}
    </section>
  );
};

Pagination.propTypes = {
  handlePagination: PropTypes.func,
  noMoreItems: PropTypes.bool
};

export default Pagination;
