import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.scss'
import Container from '../components/UI/Container'
import axios from 'axios';
import { Link, useRouteLoaderData } from 'react-router-dom';
import Card from '../components/UI/Card';


const dashboardMenu = [
  {
    title: 'Your profile',
    link: '/profile'
  },
  {
    title: 'Top artists',
    link: '/artists'
  },
  {
    title: 'Top tracks',
    link: '/tracks'
  }
]


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
      <section className={styles.dashboard__menu}>
        {dashboardMenu.map((item, id) => (
          <Link to={item.link} key={id}>
            <Card title={item.title} />
          </Link>
        ))}
      </section>
    </Container>
  )
}

export default Dashboard