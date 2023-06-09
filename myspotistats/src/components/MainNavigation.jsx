import React from 'react'
import styles from './MainNavigation.module.scss'
import Container from './UI/Container'
import { Link, redirect } from 'react-router-dom'
import Button from './UI/Button'

const MainNavigation = () => {


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
                        <Button onClick={loginButtonHandler}>
                            Login
                        </Button>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default MainNavigation