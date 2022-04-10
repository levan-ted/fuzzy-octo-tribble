/* eslint-disable react/display-name */
import React from 'react';
import classes from './Loader.module.scss';

const Loader = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.loader}>
      Loading...
    </div>
  );
});

export default Loader;
