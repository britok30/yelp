import React from 'react';
import Ratings from '../Ratings/Ratings';
import styles from './ResultItem.module.css';

const ResultItem = () => {
    return (
        <div className={styles['search-result']}>
            <img
                className={styles['result-image']}
                src="https://via.placeholder.com/200"
                alt="business-img"
            />
            <div className={styles['business-info']}>
                <h2 className="subtitle">Burger Place</h2>
                <Ratings />
                <p>
                    $$ <span className="tag">Burger</span>{' '}
                    <span className="tag">Fast Food</span>
                </p>
            </div>
            <div className={styles['contact-info']}>
                <p>+1 (786)-343-3434</p>
                <p>123 Main St</p>
                <p>32092, Berlin</p>
            </div>
        </div>
    );
};

export default ResultItem;
