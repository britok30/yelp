import React from 'react';
import TopNav from '../Nav/TopNav';
import logo from '../../assets/logo-foursquare.svg';
import styles from './LandingPage.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Suggestions from '../Suggestions/Suggestions';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className={styles.landing}>
            {/* <TopNav /> */}
            <div className={styles['search-area']}>
                <Link to="/">
                    <img src={logo} className={styles.logo} alt="logo" />
                </Link>
                <SearchBar medium />
                <Suggestions />
            </div>
        </div>
    );
};

export default LandingPage;
