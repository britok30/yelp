import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div>
            <div className="field has-addons">
                <p className="control">
                    <button className="button is-static is-small">
                        Search
                    </button>
                </p>
                <p className="control">
                    <input
                        className={`input is-small ${styles['input-control']}`}
                        type="text"
                        placeholder="burgers, barbers, spas, handymen..."
                    />
                </p>
                <p className="control">
                    <button class="button is-static is-small">NEAR</button>
                </p>
                <p className="control">
                    <input
                        className={`input is-small ${styles['input-control']}`}
                        type="text"
                        placeholder="Where"
                    />
                </p>
                <button
                    className={`button is-small ${styles['search-button']}`}
                >
                    <i className={`fas fa-search ${styles['search-icon']}`}></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
