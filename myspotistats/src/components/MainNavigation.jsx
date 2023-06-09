import React from 'react'
import styles from './MainNavigation.module.scss'
import Container from './UI/Container'
import { Link, redirect, useRouteLoaderData } from 'react-router-dom'
import Button from './UI/Button'

const MainNavigation = () => {
    const token = useRouteLoaderData('root');


    const loginButtonHandler = () => {
        window.location.href = 'http://localhost:8080/login';
    }

    return (
        <header className={styles.nav}>
            <Container>
                <nav className={styles.nav__header}>
                    <Link to="/">
                        <div className={styles.nav__logo}>
                            <h1>
                                MySpotiStats
                            </h1>
                        </div>
                    </Link>
                    <div className={styles.nav__menu}>
                        {/* <ul className="nav__list">
                            <li>

                            </li>
                        </ul> */}
                        {!token && <Button onClick={loginButtonHandler}>
                            Login with Spotify
                        </Button>}
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default MainNavigation