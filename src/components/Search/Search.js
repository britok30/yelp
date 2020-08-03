import React from 'react';
import Navbar from '../Navbar/Navbar';
import SubNav from '../SubNav/SubNav';
import Summary from '../Summary/Summary';
import Results from '../Results/Results';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');

    return (
        <div>
            <Navbar term={term} location={locationParam} />
            <SubNav />
            <Summary term={term} location={locationParam} />
            <Results />
        </div>
    );
};

export default Search;
