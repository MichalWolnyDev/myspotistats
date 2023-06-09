import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.scss'
import Container from '../components/UI/Container'
import axios from 'axios';
import { useRouteLoaderData } from 'react-router-dom';

const Dashboard = () => {
  const token = useRouteLoaderData('root');
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(res => {
      console.log(res.data)
      setUser(res.data)
    })
  }, [token])


  return (
    <Container>
      {user.country}
      <br />
      {user.display_name}
      <br />
      {user.email}
        <ul>
          {/* {Object.keys(user).map((u, index) => {
            return (
              <li key={index}>{user[u]}</li>
            )
          })} */}
        </ul>
    </Container>
  )
}

export default Dashboard