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
    setStartSearch,
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
                setStartSearch={setStartSearch}
            />
            <br />
            <SearchButton setStartSearch={setStartSearch} />
        </div>
    );
}

export default Search;
