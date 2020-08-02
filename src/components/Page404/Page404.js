import React from 'react';
import styles from './Page404.module.css';
import logo from '../../assets/logo-foursquare.svg';

const Page404 = () => {
    return (
        <div className={styles.error}>
            <div className={styles['error-text']}>
                <img className={styles.logo} src={logo} alt="logo" />
                <h1 className={styles['error-head']}>
                    404: Sorry, Page Not Found
                </h1>
            </div>
        </div>
    );
};

export default Page404;
