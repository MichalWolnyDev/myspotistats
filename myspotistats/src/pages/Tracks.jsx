import React, { useState } from "react";
import Container from "../components/UI/Container";
import useAxios from "../hooks/use-axios";
import { useRouteLoaderData } from "react-router-dom";
import styles from "./Tracks.module.scss";
import Listing from "../components/Listing";
import ListingMenu from "../components/ListingMenu";

const Tracks = () => {
  const token = useRouteLoaderData("root");
  const [timeRange, setTimeRange] = useState("long_term");

  const {
    response: track,
    error,
    loading,
    refetch,
  } = useAxios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/top/tracks`,
    params: {
      time_range: timeRange,
    },
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const items = track?.data.items;

  console.log(items);

  const menuButtonHandler = (param) => {
    setTimeRange(param);
    refetch({}); //refetch axios data
  };

  return (
    <Container>
      <ListingMenu
        menuButtonHandler={menuButtonHandler}
        timeRange={timeRange} />
      <Listing
        type={"tracks"}
        data={items}
        loading={loading}
      />
    </Container>
  );
};

export default Tracks;
