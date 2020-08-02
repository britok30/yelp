import React from 'react';
import styles from './Summary.module.css';

const Summary = () => {
    return (
        <div className={styles['search-summary']}>
            <h1 className={styles.search}>
                {' '}
                <strong>burgers</strong> in berlin
            </h1>
        </div>
    );
};

export default Summary;
