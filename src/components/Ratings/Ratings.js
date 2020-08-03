import React from 'react';
import styles from './Ratings.module.css';
import Rating from 'react-rating';

const Ratings = ({ business }) => {
    return (
        <div className={styles.ratings}>
            <Rating
                emptySymbol={`far fa-star ${styles.icon}`}
                fullSymbol={`fas fa-star ${styles.icon}`}
                fractions={2}
                initialRating={business.rating}
                readonly
            />
            <p className={styles.reviews}>{business.review_count} Reviews</p>
        </div>
    );
};

export default Ratings;
