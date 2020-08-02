import React from 'react';
import TopNav from '../Nav/TopNav';
import logo from '../../assets/logo-foursquare.svg';
import styles from './LandingPage.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Suggestions from '../Suggestions/Suggestions';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';

const LandingPage = () => {
    const { history } = useReactRouter();

    const search = (term, location) => {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);

        history.push(
            `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
        );
    };

    return (
        <div className={styles.landing}>
            {/* <TopNav /> */}
            <div className={styles['search-area']}>
                <Fade bottom duration={3000} distance={'1rem'}>
                    <Link to="/">
                        <img src={logo} className={styles.logo} alt="logo" />
                    </Link>
                </Fade>
                <Fade bottom duration={3000} distance={'1rem'} delay={1000}>
                    <SearchBar medium search={search} />
                </Fade>

                <Suggestions />
            </div>
        </div>
    );
};

export default LandingPage;
