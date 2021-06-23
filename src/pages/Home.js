import React from "react";
import ImageList from "../components/ImageList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <ImageList />
    </main>
  );
};

export default Home;
