import React from 'react';
import Ratings from '../Ratings/Ratings';
import styles from './ResultItem.module.css';

const ResultItem = ({ business }) => {
    if (!business) {
        return <div />;
    }

    const tags = business.categories.map((category) => (
        <span
            className={`tag ${styles['business-tag']}`}
            key={business.id + category.title}
        >
            {category.title}
        </span>
    ));

    const addressLines = business.location.display_address.map(
        (addressLine) => {
            return <p key={business.id + addressLine}>{addressLine}</p>;
        }
    );

    return (
        <div className={styles['search-result']}>
            <img
                className={styles['result-image']}
                src={business.image_url}
                alt="business-img"
            />
            <div className={styles['business-info']}>
                <h2 className="subtitle">{business.name}</h2>
                <Ratings
                    reviewCount={business.review_count}
                    rating={business.rating}
                />
                <div>{business.price}</div>
                <div>{tags}</div>
            </div>
            <div className={styles['contact-info']}>
                <p>{business.phone}</p>
                <p>{addressLines}</p>
            </div>
        </div>
    );
};

export default ResultItem;
