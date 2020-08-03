import React from 'react';
import ResultItem from './ResultItem';
import Spinner from '../Spinner/Spinner';
import styles from './Results.module.css';

const Results = ({ businesses }) => {
    let searchResults = <Spinner />;

    if (businesses && businesses.length) {
        searchResults = businesses.map((business) => (
            <ResultItem business={business} key={business.id} />
        ));
    }

    return <div className={styles['search-results']}>{searchResults}</div>;
};

export default Results;
