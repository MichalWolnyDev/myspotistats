import React from "react";
import styles from "../../assets/scss/search/ArtistTracks.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { convertDuration } from "../../helpers/convertTime";
import PlayButton from "../Svg/PlayButton";
import Player from "./Player";

const ArtistTracks = ({ data }) => {
  const tracks = data.slice(0, 6);


  return (
    <div>
      <h3>Tracks:</h3>
      <br />
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <div
              className={styles.tracks__row}
            >
              <div className={styles.tracks__cover}>
                <LazyLoadImage
                  alt={track.name}
                  src={track.album.images[0]?.url}
                  effect="opacity"
                />
                {/* {track.preview_url} */}
                <Player url={track.preview_url} />
                {/* <PlayButton /> */}
                {/* <audio src={track.preview_url} controls/> */}
              </div>
              <div className={styles.tracks__details}>
                <p className={styles.tracks__artist}>
                  {track.artists[0]?.name}
                </p>
                <p className={styles.tracks__name}>{track.name}</p>
              </div>
              <div className={styles.tracks__duration}>
                <p className={styles["tracks__duration-value"]}>
                  {convertDuration(track.duration_ms)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistTracks;
