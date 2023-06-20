import React from 'react'
import Container from '../components/UI/Container'
import styles from '../assets/scss/Home.module.scss'

const Home = () => {


    return (
        <Container>
            <div className={styles.home}>
                <div className={styles.home__content}>
                    <h1 className={styles.home__title}>
                        MySpotiStats
                    </h1>
                    <p className={styles.home__subtitle}>
                        All your Spotify statistics in one place.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Home