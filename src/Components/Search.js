import React from "react";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

function Search({ setOrigin, setDestination, direct, setDirect, setStartSearch }) {
    return (
        <div>
            <Dropdown
                setOrigin={setOrigin}
                setDestination={setDestination}
            />
            <Checkbox direct={direct} setDirect={setDirect} setStartSearch={setStartSearch} />
            <SearchBar />

            <SearchButton setStartSearch={setStartSearch} />
        </div>
    );
}

export default Search;
