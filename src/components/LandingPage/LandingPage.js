import React from 'react';
import TopNav from '../Nav/TopNav';
import logo from '../../assets/logo-foursquare.svg';
import styles from './LandingPage.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Suggestions from '../Suggestions/Suggestions';

const LandingPage = () => {
    return (
        <div>
            <div className={styles.landing}>
                <TopNav />
                <img src={logo} className={styles.logo} alt="logo" />
                <SearchBar />
                <Suggestions />
            </div>
        </div>
    );
};

export default LandingPage;
