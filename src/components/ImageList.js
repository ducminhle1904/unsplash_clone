import React from "react";
import Image from "./Image";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, result, prev, next, page } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (result.length < 1) {
    <h2 className="section-title">no image matched your search</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Unplash</h2>
      <div className="cocktails-center">
        {result.map((item) => {
          return <Image key={item.id} {...item} />;
        })}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-primary"
          onClick={prev}
          style={{ marginRight: "20px" }}
          disabled={page <= 1}
        >
          Prev
        </button>
        <button className="btn btn-primary" onClick={next}>
          Next
        </button>
      </div>
    </section>
  );
};

export default CocktailList;
