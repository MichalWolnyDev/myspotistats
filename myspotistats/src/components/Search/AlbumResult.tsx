import styles from "../../assets/scss/search/AlbumResult.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

interface Album {
  name: string,
}
const AlbumResult = ({ data }: Album) => {
  return (
    <div className={styles.album}>
      <div className={styles.album__cover}>
        <LazyLoadImage
          alt={data.name}
          src={data.images[0]?.url}
          effect="opacity"
        />
      </div>
      <h4>
        {data.name}
      </h4>
      <p>
        {data.artists[0]?.name}
      </p>
    </div>
  );
};

export default AlbumResult;
