import React from 'react';
import styles from './Summary.module.css';

const Summary = ({ term, location }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className={`subtitle ${styles.search}`}>
                    {' '}
                    <strong>
                        Best {capitalizeFirstLetter(term)} in{' '}
                        {capitalizeFirstLetter(location)}
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
