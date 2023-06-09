import React from 'react'
import Container from './UI/Container'

import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <p>
                    Made by Michał Wolny
                </p>
            </Container>
        </footer>
    )
}

export default Footer