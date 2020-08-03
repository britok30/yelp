import React from 'react';
import styles from './Summary.module.css';

const Summary = ({ term, location }) => {
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className={`subtitle ${styles.search}`}>
                    {' '}
                    <strong>
                        Best {term} in {location}
                    </strong>
                </h1>
                <p className={styles.results}>
                    <strong>All Results</strong>
                </p>
            </div>
        </div>
    );
};

export default Summary;
