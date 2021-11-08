import React from 'react';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

function Search({
    origin,
    destination,
    setOrigin,
    setDestination,
    direct,
    setDirect,
    showResults,
    setShowResults,
    setLoading,
}) {
    return (
        <div>
            <Dropdown setOrigin={setOrigin} setDestination={setDestination} />
            <SearchBar
                origin={origin}
                setOrigin={setOrigin}
                destination={destination}
                setDestination={setDestination}
            />
            <Checkbox
                direct={direct}
                setDirect={setDirect}
                setLoading={setLoading}
                showResults={showResults}
                setShowResults={setShowResults}
            />
            <br />
            <SearchButton setLoading={setLoading} setShowResults={setShowResults} />
        </div>
    );
}

export default Search;
