import React from 'react'
import Container from '../components/UI/Container'
import useAxios from '../hooks/use-axios'
import { useRouteLoaderData } from 'react-router-dom'

const Artists = () => {
  const token = useRouteLoaderData('root');

  const { response: artist, error, loading } = useAxios({
    method: 'GET',
    url: 'https://api.spotify.com/v1/me/top/artists',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  console.log(artist)


  return (
    <Container>
      artysci


    </Container>
  )
}

export default Artists