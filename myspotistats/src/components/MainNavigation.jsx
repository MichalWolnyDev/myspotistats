import React from "react";
import styles from "../assets/scss/components/MainNavigation.module.scss";
import Container from "./UI/Container";
import { Link, useRouteLoaderData } from "react-router-dom";
import Button from "./UI/Button";
// import CurrentlyPlaying from "./CurrentlyPlaying";

const MainNavigation = () => {
  const token = useRouteLoaderData("root");

  const loginButtonHandler = () => {
    window.location.href = "http://localhost:8080/login";
  };

  const logoutButtonHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("expiration");

    window.location.href = "/";
  };

  return (
    <header className={styles.nav}>
      <Container>
        <nav className={styles.nav__header}>
          <Link to="/">
            <div className={styles.nav__logo}>
              <h1>MySpotiStats</h1>
            </div>
          </Link>
          {/* <CurrentlyPlaying token={token}/> */}

          <div className={styles.nav__menu}>
            {!token && (
              <Button onClick={loginButtonHandler}>Login with Spotify</Button>
            )}
            {token && (
              <>
                <ul className="nav__list">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                </ul>
              </>
            )}
            {token && <Button onClick={logoutButtonHandler}>Logout</Button>}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default MainNavigation;
