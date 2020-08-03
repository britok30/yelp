import React from 'react';
import Navbar from '../Navbar/Navbar';
import SubNav from '../SubNav/SubNav';
import Summary from '../Summary/Summary';
import Results from '../Results/Results';
import { useHistory, useLocation } from 'react-router-dom';
import { useBusinessSearch } from '../api/useBusinessSearch';

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [
        businesses,
        amountResults,
        searchParams,
        setSearchParams,
    ] = useBusinessSearch(term, locationParam);

    const search = (term, location) => {
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(
            `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`
        );
        setSearchParams({ term, location });
    };

    return (
        <div>
            <Navbar term={term} location={locationParam} search={search} />
            <SubNav />
            <Summary
                term={searchParams.term}
                location={searchParams.location}
                amountResults={amountResults}
                shownResults={businesses ? businesses.length : 0}
            />
            <Results businesses={businesses} />
        </div>
    );
};

export default Search;
