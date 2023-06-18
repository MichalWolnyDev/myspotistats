import React, { useEffect, useState } from "react";
import Container from "../components/UI/Container";
import { Link, useRouteLoaderData } from "react-router-dom";
import axios from "axios";
import styles from './Playlists.module.scss'
import Loader from "../components/UI/Loader";

const Playlists = () => {
  const token = useRouteLoaderData("root");
  const id = localStorage.getItem('userId')
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
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
    <div className={styles.playlist}>
      <div className={styles.playlist__header}>
        <h1>
          Your playlists
        </h1>
      </div>
      {playlists.items?.length > 0 ? playlists.items.map((item, id) => (
        <Link key={id} to={`${item.id}`} state={
          { title: item.name }
        }>
          <div className={styles.playlist__item}>
            <p >{item.name}</p>
          </div>
        </Link>
      )) : <Loader />}
    </div>
  </Container>;
};

export default Playlists;
