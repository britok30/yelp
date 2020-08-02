import React from 'react';
import styles from './ResultItem.module.css';

const ResultItem = () => {
    return (
        <div className={styles['search-result']}>
            <img
                className={styles['result-image']}
                src="https://via.placeholder.com/200"
                alt="business-img"
            />
            <p>Information</p>
            <p>Address</p>
        </div>
    );
};

export default ResultItem;
