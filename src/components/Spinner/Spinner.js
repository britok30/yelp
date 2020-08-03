import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
    return (
        <div>
            <div
                className={`button is-loading is-large ${styles.spinner}`}
            ></div>
        </div>
    );
};

export default Spinner;
