import React from 'react'
import Container from '../components/UI/Container'
import Button from '../components/UI/Button'
import styles from './Home.module.scss'
import { redirect } from 'react-router-dom'

const Home = () => {

    const loginButtonHandler = () => {
        window.location.href = 'http://localhost:8080/login';
    }

    return (
        <Container>
            <div className={styles.home}>
                <div className={styles.home__content}>
                    <h1 className={styles.home__title}>
                        MySpotiStats
                    </h1>
                    <p className={styles.home__subtitle}>
                        All Spotify statistics in one place.
                    </p>
                    <div className={styles.home__cta}>
                        <Button onClick={loginButtonHandler}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home