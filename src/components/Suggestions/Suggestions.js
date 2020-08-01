import React from 'react';
import styles from './Suggestions.module.css';

const Suggestions = () => {
    return (
        <div className={styles.suggestions}>
            <span className="icon is-small">
                <i className="fas fa-wrench"></i>
                <span className={styles.suggestion}>Plumbers</span>
            </span>
            <span className="icon is-small">
                <i className="fas fa-utensils"></i>
                <span className={styles.suggestion}>Restaurants</span>
            </span>
            <span className="icon is-small">
                <i className="fas fa-city"></i>
                <span className={styles.suggestion}>Nightlife</span>
            </span>
            <span className="icon is-small">
                <i className="fas fa-car"></i>
                <span className={styles.suggestion}>Delivery</span>
            </span>
        </div>
    );
};

export default Suggestions;
