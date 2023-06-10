import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import styles from './Profile.module.scss';
import Container from '../components/UI/Container';

const Profile = () => {
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
            <section>
                {Object.keys(user).length !== 0 && (
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
                                <li>
                                    Id: {user.id}
                                </li>
                                <li>
                                    Total followers: {user.followers.total}
                                </li>
                                <li>
                                    Account type: {user.product}
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