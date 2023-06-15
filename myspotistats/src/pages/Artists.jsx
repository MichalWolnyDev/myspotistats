import React, { useState } from "react";
import Container from "../components/UI/Container";
import useAxios from "../hooks/use-axios";
import { useRouteLoaderData } from "react-router-dom";
import styles from "./Artists.module.scss";
import Listing from "../components/UI/Listing";

const Artists = () => {
  const token = useRouteLoaderData("root");
  const [timeRange, setTimeRange] = useState("long_term");

  const {
    response: artist,
    error,
    loading,
    refetch,
  } = useAxios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/top/artists`,
    params: {
      time_range: timeRange,
    },
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const items = artist?.data.items;

  // const artistIds = items?.map((item) => item.id);

  // const {
  //   response: following,
  //   error: followingError,
  //   loading: followingLoader,
  //   refetch: followingRefetch,
  // } = useAxios({
  //   method: "GET",
  //   url: `https://api.spotify.com/v1/me/following/contains`,
  //   params: {
  //     type: "artist",
  //     ids: artistIds?.toString(),
  //   },
  //   headers: {
  //     Authorization: "Bearer " + token,
  //   },
  // });


  const menuButtonHandler = (param) => {
    setTimeRange(param);
    refetch({}); //refetch axios data
  };

  return (
    <Container>
      <Listing
        type={"artists"}
        data={items}
        menuButtonHandler={menuButtonHandler}
        timeRange={timeRange}
        loading={loading}
      />
    </Container>
  );
};

export default Artists;
