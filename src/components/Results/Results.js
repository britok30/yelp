import React from 'react';
import ResultItem from './ResultItem';
import styles from './Results.module.css';

const Results = ({ businesses }) => {
    if (!businesses || !businesses.length) {
        return <div></div>;
    }

    const searchResults = businesses.map((business) => (
        <ResultItem business={business} key={business.id} />
    ));
    return <div className={styles['search-results']}>{searchResults}</div>;
};

export default Results;
