import React from 'react';
import styles from './Summary.module.css';

const Summary = () => {
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className={`subtitle ${styles.search}`}>
                    {' '}
                    <strong>Best Burgers in Berlin</strong>
                </h1>
                <p className={styles.results}>
                    <strong>All Results</strong>
                </p>
            </div>
        </div>
    );
};

export default Summary;
