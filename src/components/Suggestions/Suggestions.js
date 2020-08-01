import React from 'react';
import styles from './Suggestions.module.css';

const Suggestions = () => {
    return (
        <div className={styles.suggestions}>
            <span className="icon is-small">
                <i className="fas fa-wrench"></i>
            </span>
            <span className={styles.suggestion}>Plumbers</span>
            <span className="icon is-small">
                <i className="fas fa-utensils"></i>
            </span>{' '}
            <span className={styles.suggestion}>Restaurants</span>
            <span className="icon is-small">
                <i className="fas fa-city"></i>
            </span>
            <span className={styles.suggestion}>Nightlife</span>
            <span className="icon is-small">
                <i className="fas fa-car"></i>
            </span>
            <span className={styles.suggestion}>Delivery</span>
        </div>
    );
};

export default Suggestions;
