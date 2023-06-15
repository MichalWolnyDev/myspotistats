import React from 'react'
import Container from '../components/UI/Container'
import useAxios from '../hooks/use-axios'
import { useRouteLoaderData } from 'react-router-dom'

const Playlists = () => {
    const token = useRouteLoaderData('root');

    const {
        response: playlists,
        error,
        loading,
        refetch,
      } = useAxios({
        method: "GET",
        url: `https://api.spotify.com/v1/users/therazorxd/playlists`,
       
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      console.log(playlists)
  return (
   <Container>
     playlists
   </Container>
  )
}

export default Playlists