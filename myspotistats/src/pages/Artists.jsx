import React, { useState } from "react";
import Container from "../components/UI/Container";
import useAxios from "../hooks/use-axios";
import { useRouteLoaderData } from "react-router-dom";
import styles from "./Artists.module.scss";
import Button from "../components/UI/Button";

const MENU = [
  {
    text: 'Last 4 weeks',
    param: 'short_term',
  },
  {
    text: 'Last 6 months',
    param: 'medium_term',
  },
  {
    text: 'All time',
    param: 'long_term',
  },
];

const Artists = () => {
  const token = useRouteLoaderData("root");
  const [timeRange, setTimeRange] = useState('long_term')

  const {
    response: artist,
    error,
    loading,
    refetch
  } = useAxios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/top/artists`,
    params: {
      time_range: timeRange
    },
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const items = artist?.data.items;

  const menuButtonHandler = param => {
    setTimeRange(param)
    refetch({}) //refetch axios data
  }

  return (
    <Container>
      <div className={styles.artists}>
        <div className={styles.artists__menu}>
          {MENU?.map((item, id) => (
            <Button className={item.param === timeRange ? 'active' : ''} key={id} onClick={() => menuButtonHandler(item.param)}>{item.text}</Button>
          ))}
        </div>
        <div className={styles.artists__wrap}>
          {loading && <p>loading...</p>}
          {!loading && items &&
            items.map((item, id) => (
              <div key={id} className={styles.artists__item}>
                <div className={styles.artists__number}>
                  <p>{id + 1}</p>
                </div>
                <div className={styles.artists__image}>
                  <img src={item.images[0]?.url} alt={item.name} />
                </div>
                <div className={styles.artists__details}>
                  <h1 className={styles.artists__name}>{item.name}</h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Artists;
