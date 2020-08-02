import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo-foursquare.svg';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="logo" />
            </Link>

            <SearchBar />
            
            <button className={`button is-small ${styles['nav-button']}`}>
                Log In
            </button>
            <button className={`button is-small ${styles['nav-button']}`}>
                Sign Up
            </button>
        </div>
    );
};

export default Navbar;
