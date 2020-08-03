import React from 'react';
import Ratings from '../Ratings/Ratings';
import styles from './ResultItem.module.css';

const ResultItem = ({ business }) => {
    if (!business) {
        return <div />;
    }

    return (
        <div className={styles['search-result']}>
            <img
                className={styles['result-image']}
                src={business.image_url}
                alt="business-img"
            />
            <div className={styles['business-info']}>
                <h2 className="subtitle">{business.name}</h2>
                <Ratings business={business} />
                <p>
                    $${' '}
                    <span className="tag">
                        {business.categories[0]
                            ? business.categories[0].title
                            : null}
                    </span>{' '}
                    <span className="tag">
                        {business.categories[1]
                            ? business.categories[1].title
                            : null}
                    </span>
                </p>
            </div>
            <div className={styles['contact-info']}>
                <p>{business.phone}</p>
                <p>123 Main St</p>
                <p>32092, Berlin</p>
            </div>
        </div>
    );
};

export default ResultItem;
