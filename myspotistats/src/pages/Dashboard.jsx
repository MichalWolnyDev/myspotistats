import React from 'react'
import styles from './Dashboard.module.scss'
import Container from '../components/UI/Container'
import { Link } from 'react-router-dom';
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