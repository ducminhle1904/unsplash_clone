import React, { useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://api.unsplash.com/photos/";

const SingleImage = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [photo, setPhoto] = React.useState(null);
  const [clientId, setClientId] = useState(
    "e4pAzcW1iLWEA0CIIEh1NRU02i8vFx9nyv7o4iir_-U"
  );

  React.useEffect(() => {
    setLoading(true);
    async function getImage() {
      try {
        const response = await fetch(`${url}${id}?client_id=${clientId}`);
        const data = await response.json();
        setPhoto(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    getImage();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!photo) {
    return <h2 className="section-title">This page is not available</h2>;
  }
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back home
      </Link>
      <h2 className="section-title">{photo.description}</h2>
      <div className="drink">
        <img src={photo.urls.full} alt={photo.alt_description} />
        <div className="drink-info">
          <p>
            <span className="drink-data">author:</span>
            {photo.user.first_name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {photo.categories}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {photo.user.bio}
          </p>
          <p>
            <span className="drink-data">location:</span>
            {photo.location.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleImage;
