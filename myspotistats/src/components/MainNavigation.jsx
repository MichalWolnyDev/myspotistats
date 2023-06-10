import React from 'react'
import styles from './MainNavigation.module.scss'
import Container from './UI/Container'
import { Link, useNavigate, useRouteLoaderData } from 'react-router-dom'
import Button from './UI/Button'

const MainNavigation = () => {
    const token = useRouteLoaderData('root');
    const navigate = useNavigate();


    const loginButtonHandler = () => {
        window.location.href = 'http://localhost:8080/login';
    }

    const logoutButtonHandler = e => {
        e.preventDefault();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('expiration');

        return navigate('/');
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

                        {!token && <Button onClick={loginButtonHandler}>
                            Login with Spotify
                        </Button>}
                        {token && <>
                            <ul className="nav__list">
                                <li>
                                    <Link to='/dashboard'>
                                        Dashboard
                                    </Link>
                                </li>
                            </ul></>}
                        {token && <Button onClick={logoutButtonHandler}>
                            Logout
                        </Button>}
                       
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default MainNavigation