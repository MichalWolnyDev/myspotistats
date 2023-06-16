import React, { useEffect, useState } from "react";
import Container from "../components/UI/Container";
import useAxios from "../hooks/use-axios";
import { Link, useRouteLoaderData } from "react-router-dom";
import axios from "axios";

const Playlists = () => {
  const token = useRouteLoaderData("root");
  const id = localStorage.getItem('userId')
  const [playlists, setPlaylists] = useState([]);

  // const {
  //     response: playlists,
  //     error,
  //     loading,
  //     refetch,
  //   } = useAxios({
  //     method: "GET",
  //     url: `https://api.spotify.com/v1/users/${id}/playlists`,

  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   });

  useEffect(() => {
    const fetchData = async () => {
      if(id){
        const response = await axios
        .get(`https://api.spotify.com/v1/users/${id}/playlists`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
      setPlaylists(response?.data);

        })
        .catch((err) => console.log(err));

      }
     
    };

    fetchData();
  }, [id, token]);

  return <Container>
    {playlists.items?.length > 0 && playlists.items.map((item, id) => (
      <Link key={id} to={`${item.id}`}>
        <p >{item.name}</p>
      </Link>
    ))}
  </Container>;
};

export default Playlists;
