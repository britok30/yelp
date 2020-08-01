import React from 'react';
import TopNav from '../Nav/TopNav';
import logo from '../../assets/logo-foursquare.svg';
import styles from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <div>
            <TopNav />
            <img src={logo} className={styles.logo} alt="logo" />
        </div>
    );
};

export default LandingPage;
