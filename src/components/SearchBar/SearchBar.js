import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ medium }) => {
    const isMedium = medium ? 'is-medium' : '';
    return (
        <div>
            <div className="field has-addons">
                <p className="control">
                    <button className={`button is-static ${isMedium}`}>
                        Search
                    </button>
                </p>
                <p className="control">
                    <input
                        className={`input ${isMedium} ${styles['input-control']}`}
                        type="text"
                        placeholder="burgers, barbers, spas, handymen..."
                    />
                </p>
                <p className="control">
                    <button className={`button is-static ${isMedium}`}>
                        NEAR
                    </button>
                </p>
                <p className="control">
                    <input
                        className={`input ${isMedium} ${styles['input-control']}`}
                        type="text"
                        placeholder="Where"
                    />
                </p>
                <button
                    className={`button ${isMedium} ${styles['search-button']}`}
                >
                    <i className={`fas fa-search ${styles['search-icon']}`}></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
