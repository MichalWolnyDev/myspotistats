import React from "react";
import { useParams } from "react-router-dom";
import { useRouteLoaderData } from "react-router-dom";
import useAxios from "../hooks/use-axios";
import Container from "../components/UI/Container";

const PlaylistDetails = () => {
const token = useRouteLoaderData('root');
  const { id } = useParams();

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
        {tracks.length > 0 && tracks.map((track, id) => <p key={id}>{track.track.name}</p>)}
    </Container>
  );
};

export default PlaylistDetails;
