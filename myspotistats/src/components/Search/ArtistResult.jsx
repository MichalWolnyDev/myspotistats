import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import styles from "../../assets/scss/search/ArtistResult.module.scss";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const ArtistResult = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.result}>
      <div className={styles.result__img}>
        <LazyLoadImage
          alt={data.name}
          src={data.images[0]?.url}
          effect="opacity"
        />
      </div>
      <h3 className={styles.result__name}>
        {data.name}</h3>
      <p className={styles.result__type}>
        {data.type}
        </p>
        <br /><br />
        <Link to={data.external_urls.spotify} target="_blank">
        <Button>
          Check on Spotify!
        </Button>
        </Link>
    </div>
  );
};

export default ArtistResult;
