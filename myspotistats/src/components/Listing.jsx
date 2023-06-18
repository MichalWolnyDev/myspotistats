import React, { useState } from "react";
import styles from "./Listing.module.scss";
import Button from "./UI/Button";
import TrackDetails from "./TrackDetails";
import Loader from "./UI/Loader";

const Listing = ({ data, loading, type }) => {
  const [showDetails, setShowDetails] = useState(null);

  const showDetailsHandler = index => {
    setShowDetails(prev => {
      return prev === index ? null : index;
    })
  }

  let playListData = [];

  if (type == "playlist") {
    playListData = data?.map(item => item.track);
    data = playListData;
  }

  return (
    <div className={styles.listing}>
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
                  {(type == "tracks" || type == "playlist") && (
                    <img src={item.album.images[0]?.url} alt={item.album.name} />
                  )}
                </div>
                <div className={styles.listing__details}>
                  {type == "tracks" || type == "playlist" && (
                    <p>{item.artists.map((artist) => artist.name + " ")}</p>
                  )}
                  <h1 className={styles.listing__name}>{item.name}</h1>

                  {(type == "tracks" || type == "playlist") && (
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
