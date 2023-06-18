import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useRouteLoaderData } from "react-router-dom";
import useAxios from "../hooks/use-axios";
import Container from "../components/UI/Container";
import Listing from "../components/Listing";
import styles from './Playlists.module.scss'

const PlaylistDetails = () => {
  const token = useRouteLoaderData('root');
  const { id } = useParams();
  let { state } = useLocation();

  const { response: details, error, loading } = useAxios({
    method: 'GET',
    url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  const tracks = details?.data.items;


  return (
    <Container>
      <div className={styles.playlist}>
        <div className={styles.playlist__header}>
          <h1>
            {state?.title}
          </h1>
        </div>
        <Listing data={tracks} key={id} type={"playlist"} loading={loading} />
      </div>
    </Container>
  );
};

export default PlaylistDetails;
