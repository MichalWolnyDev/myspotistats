import React from "react";
import styles from "./Profile.module.scss";
import Container from "../components/UI/Container";
import { useSelector } from "react-redux";
import GoBack from "../components/GoBack";

const Profile = () => {
  const user = useSelector((state) => state.profile.profile);

  return (
    <Container>
      <section>
        <GoBack />
        <div className={styles.profile}>
          <div className={styles.profile__header}>
            <h1 className={styles.profile__name}>
              Hello, {user.display_name}!
            </h1>
          </div>
          <div className={styles.profile__avatar}>
            <img src={user.images[0].url} alt={user.id} />
          </div>
          <div className={styles.profile__content}>
            <ul className={styles.profile__list}>
              <li>Id: {user.id}</li>
              <li>Total followers: {user.followers.total}</li>
              <li>Account type: {user.product}</li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Profile;
