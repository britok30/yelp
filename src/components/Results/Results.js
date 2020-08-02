import React from 'react';
import ResultItem from './ResultItem';
import styles from './Results.module.css';

const Results = () => {
    return (
        <div className={styles['search-results']}>
            <ResultItem />
            <ResultItem />
            <ResultItem />
        </div>
    );
};

export default Results;
