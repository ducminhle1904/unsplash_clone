import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchItem } = useGlobalContext();
  const searchValue = React.useRef("");
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchImage = () => {
    setSearchItem(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search" style={{ position: "relative" }}>
      <img
        src="https://images.unsplash.com/photo-1594141374233-92296405383d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        style={{ height: "50vh", objectFit: "cover" }}
      />
      <form
        className="search-form"
        onSubmit={handleSubmit}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <div className="form-control">
          <label htmlFor="name">Search free high-resolution photos</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchImage}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
