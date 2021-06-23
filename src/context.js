import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
const url = "https://api.unsplash.com";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const [result, setResult] = useState([]);
  const [clientId, setClientId] = useState(
    "e4pAzcW1iLWEA0CIIEh1NRU02i8vFx9nyv7o4iir_-U"
  );
  const [page, setPage] = useState(1);
  const next = () => {
    const updatePage = page + 1;
    setPage(updatePage);
  };
  const prev = () => {
    const updatePage = page - 1;
    setPage(updatePage);
  };
  const fetchImage = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}/search/photos?client_id=${clientId}&page=${page}&query=${searchItem}`
      );
      const data = await response.json();
      const { results } = data;
      setResult(results);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [searchItem, page]);
  useEffect(() => {
    fetchImage();
  }, [fetchImage, searchItem]);
  return (
    <AppContext.Provider
      value={{ loading, result, setSearchItem, prev, next, page }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
