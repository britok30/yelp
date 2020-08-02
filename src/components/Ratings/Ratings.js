import React from 'react';
import styles from './Ratings.module.css';
import Rating from 'react-rating';

const Ratings = () => {
    return (
        <div className={styles.ratings}>
            <Rating
                emptySymbol={`far fa-star ${styles.icon}`}
                fullSymbol={`fas fa-star ${styles.icon}`}
                fractions={2}
                initialRating={3}
                readonly
            />
            <p className={styles.reviews}>724 Reviews</p>
        </div>
    );
};

export default Ratings;
