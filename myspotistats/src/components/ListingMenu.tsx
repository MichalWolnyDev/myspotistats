import React from 'react';
import styles from '../assets/scss/components/Listing.module.scss';
import Button from './UI/Button';

const MENU = [
    {
        text: "Last 4 weeks",
        param: "short_term",
    },
    {
        text: "Last 6 months",
        param: "medium_term",
    },
    {
        text: "All time",
        param: "long_term",
    },
];


const ListingMenu = ({ menuButtonHandler, timeRange }) => {
    return (
        <div className={styles.listing__menu}>
            {MENU?.map((item, id) => (
                <Button
                    className={item.param === timeRange ? "active" : ""}
                    key={id}
                    onClick={() => {
                        menuButtonHandler(item.param);
                    }}
                >
                    {item.text}
                </Button>
            ))}
        </div>
    )
}

export default ListingMenu