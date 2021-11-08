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
    setShowResults,
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
                setShowResults={setShowResults}
            />
            <br />
            <SearchButton setShowResults={setShowResults} />
        </div>
    );
}

export default Search;
