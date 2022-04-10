import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import { fetchData } from '../services/data-fetching';

const initialState = { data: [], addCard: () => {} };

export const dataContext = React.createContext(initialState);

export const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const addCard = (data) => {
    setData((prevState) => [data, ...prevState]);
  };

  useEffect(() => {
    (async () => {
      await fetchData(setData);
      setLoading(false);
    })();
  }, []);

  return (
    <dataContext.Provider value={{ data, addCard }}>
      {loading ? <Loader /> : props.children}
    </dataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node
};
