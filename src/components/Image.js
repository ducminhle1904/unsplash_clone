import React from "react";
import { Link } from "react-router-dom";

function Cocktail({ ...item }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={item.urls.small} alt="img" />
      </div>
      <div className="cocktail-footer">
        <h3>{item.user.first_name}</h3>
        <h4>Likes: {item.likes}</h4>
        <Link to={`/photos/${item.id}`} className="btn btn-details">
          detail
        </Link>
      </div>
    </article>
  );
}

export default Cocktail;
