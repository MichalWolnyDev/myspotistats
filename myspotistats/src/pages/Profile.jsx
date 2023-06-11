import React from 'react'
import { useRouteLoaderData } from 'react-router-dom';
import styles from './Profile.module.scss';
import Container from '../components/UI/Container';
import useAxios from '../hooks/use-axios';

const Profile = () => {
    const token = useRouteLoaderData('root');

    const { response: user, error, loading } = useAxios({
        method: 'GET',
        url: 'https://api.spotify.com/v1/me',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });



    return (
        <Container>
            <section>
                {error && <p>{error}</p>}
                {loading ? <p>loading...</p> : (
                    <div className={styles.profile}>
                        <div className={styles.profile__header}>
                            <h1 className={styles.profile__name}>
                                Hello, {user.data.display_name}!
                            </h1>
                        </div>
                        <div className={styles.profile__avatar}>
                            <img src={user.data.images[0].url} alt={user.data.id} />
                        </div>
                        <div className={styles.profile__content}>
                            <ul className={styles.profile__list}>
                                <li>
                                    Id: {user.data.id}
                                </li>
                                <li>
                                    Total followers: {user.data.followers.total}
                                </li>
                                <li>
                                    Account type: {user.data.product}
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </section>
        </Container>
    )
}

export default Profile