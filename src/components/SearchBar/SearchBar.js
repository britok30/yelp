import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ medium, shadow, search }) => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');

    const isMedium = medium ? 'is-medium' : '';
    const isShadow = shadow ? styles.shadow : '';

    const onHandleSubmit = (e) => {
        if (typeof search === 'function') {
            search(term, location);
        }
        e.preventDefault();
    };

    return (
        <div className={isShadow}>
            <form onSubmit={onHandleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <div className={`button is-static ${isMedium}`}>
                            Search
                        </div>
                    </div>
                    <p className="control">
                        <input
                            onChange={(e) => setTerm(e.target.value)}
                            className={`input ${isMedium} ${styles['input-control']}`}
                            type="text"
                            placeholder="burgers, barbers, spas, handymen..."
                            value={term}
                        />
                    </p>
                    <div className="control">
                        <div className={`button is-static ${isMedium}`}>
                            NEAR
                        </div>
                    </div>
                    <div className="control">
                        <input
                            onChange={(e) => setLocation(e.target.value)}
                            className={`input ${isMedium} ${styles['input-control']}`}
                            type="text"
                            placeholder="Where"
                            value={location}
                        />
                    </div>
                    <button
                        onClick={onHandleSubmit}
                        className={`button ${isMedium} ${styles['search-button']}`}
                    >
                        <i
                            className={`fas fa-search ${styles['search-icon']}`}
                        ></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
