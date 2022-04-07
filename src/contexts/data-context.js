import React, { useState, useEffect, useContext } from "react";
import Loader from "../components/Loader";
import { fetchData } from "../services/data-fetching";

const initialState = { data: [], addCard: () => {} };

export const dataContext = React.createContext([]);

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
