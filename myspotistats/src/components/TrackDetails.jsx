import React from 'react'
import styles from './TrackDetails.module.scss'
import Button from './UI/Button';

const TrackDetails = ({ item }) => {
    console.log(item);
    return (
        <div className={styles.details}>
            <h2 className={styles.details__header}>
                Details
            </h2>
            <div className={styles.details__album}>
                <h3 className={styles.details__title}>
                    Album
                </h3>
                <div className={styles['details__album-row']}>
                    <div className={styles['details__album-cover']}>
                        <img src={item?.album.images[1].url} alt={item.album.name} />
                    </div>
                    <div className={styles['details__album-info']}>
                        <h4>
                            {item.album.name}
                        </h4>
                        <br />
                        <p>
                            Release date: {item.album.release_date}
                        </p>
                        <p>
                            Total tracks: {item.album.total_tracks}
                        </p>
                        <a href={item.album.external_urls.spotify} target='_blank'>
                            <Button>
                                Listen on Spotify
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <audio className={styles.details__player} src={item.preview_url} controls>
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}

export default TrackDetails