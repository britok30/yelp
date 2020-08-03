import React from 'react';
import styles from './Ratings.module.css';
import Rating from 'react-rating';

const Ratings = ({ reviewCount, rating }) => {
    return (
        <div className={styles.ratings}>
            <Rating
                emptySymbol={`far fa-star ${styles.icon}`}
                fullSymbol={`fas fa-star ${styles.icon}`}
                fractions={2}
                initialRating={rating}
                readonly
            />
            <p className={styles.reviews}>{reviewCount} Reviews</p>
        </div>
    );
};

export default Ratings;
