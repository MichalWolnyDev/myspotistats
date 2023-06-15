import React, { useState } from "react";
import styles from "./Listing.module.scss";
import Button from "./Button";
import TrackDetails from "../TrackDetails";
import Loader from "../Loader";

const MENU = [
  {
    text: "Last 4 weeks",
    param: "short_term",
  },
  {
    text: "Last 6 months",
    param: "medium_term",
  },
  {
    text: "All time",
    param: "long_term",
  },
];

const Listing = ({ data, menuButtonHandler, timeRange, loading, type }) => {
  const [showDetails, setShowDetails] = useState(null);

  const showDetailsHandler = index => {
    setShowDetails(prev => {
      return prev === index ? null : index;
    })
  }

  console.log(data)

  return (
    <div className={styles.listing}>
      <div className={styles.listing__menu}>
        {MENU?.map((item, id) => (
          <Button
            className={item.param === timeRange ? "active" : ""}
            key={id}
            onClick={() => {
              menuButtonHandler(item.param);
              setShowDetails(null)
            }}
          >
            {item.text}
          </Button>
        ))}
      </div>
      <div className={styles.listing__wrap}>
        {loading && <Loader />}
        {!loading &&
          data &&
          data.map((item, id) => (
            <div key={id} className={styles.listing__item}>
              <div className={styles.listing__row}>
                <div className={styles.listing__number}>
                  <p>{id + 1}</p>
                </div>
                <div className={styles.listing__image}>
                  {type == "artists" && (
                    <img src={item.images[0]?.url} alt={item.name} />
                  )}
                  {type == "tracks" && (
                    <img src={item.album.images[0]?.url} alt={item.album.name} />
                  )}
                </div>
                <div className={styles.listing__details}>
                  {type == "tracks" && (
                    <p>{item.artists.map((artist) => artist.name + " ")}</p>
                  )}
                  <h1 className={styles.listing__name}>{item.name}</h1>
                  {type == "tracks" && (
                    <div className={styles.listing__cta}>
                      <div className={styles['listing__cta-row']}>
                        <a href={item.external_urls.spotify} target="_blank">
                          <Button>Listen on Spotify</Button>
                        </a>
                      </div>
                      <div className={styles['listing__cta-row']}>
                        <Button onClick={() => showDetailsHandler(id)}>{showDetails === id ? 'Hide details' : 'Show details'}</Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {showDetails === id && <TrackDetails item={item} />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Listing;
