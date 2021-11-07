import { useState, useEffect } from 'react';
import worldAirports from '../airports.json';
import '../searchBar.scss';

function SearchBar({ origin, setOrigin, destination, setDestination }) {
    let searchBarValue = '';
    //const [searchButtonPressed, setSearchButtonPressed] = useState(null);
    const [searchResults, setSearchResults] = useState('');

    function getAirports() {
        let results = [];
        if (searchBarValue !== '') {
            searchBarValue = searchBarValue.toLowerCase();
            let searchArray = searchBarValue.split(' ');
            for (let i = 0; i < searchArray.length; i++) {
                if (searchArray[i] !== '') {
                    searchArray[i] =
                        searchArray[i][0].toUpperCase() +
                        searchArray[i].substring(1);
                }
            }

            searchBarValue = searchArray.join(' ');
            console.log(searchBarValue);

            Object.values(worldAirports).forEach((element) => {
                if (
                    element.name.includes(searchBarValue) ||
                    element.city.includes(searchBarValue) ||
                    element.state.includes(searchBarValue)
                ) {
                    results.push(element);
                }
            });

            searchBarValue = searchBarValue.toUpperCase();

            Object.values(worldAirports).forEach((element) => {
                if (Object.values(element).includes(searchBarValue)) {
                    results.push(element);
                }
            });

            setSearchResults(
                results.map(
                    (airport, i) =>
                        airport.iata !== '' && (
                            <div className="results" key={i}>
                                <div className="results__can-fly">
                                    <h6 className="results__airport">
                                        {airport.name}: {airport.iata}
                                    </h6>
                                    <p className="results__city-country">
                                        {airport.city}, {airport.country}
                                    </p>
                                    <button
                                        className="results__button"
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOrigin(airport.iata);
                                        }}
                                    >
                                        set as origin
                                    </button>
                                    <button
                                        className="results__button"
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setDestination(airport.iata);
                                        }}
                                    >
                                        set as destination
                                    </button>
                                </div>
                            </div>
                        )
                )
            );
        }
    }

    return (
        <div className="searchbar">
            <br />
            <h5>
                Current origin: {origin} | Current destination: {destination}
            </h5>
            <label for="searchBar">Find other airports:</label>
            <input
                name="searchBar"
                type="text"
                id="searchBar"
                onChange={(e) => {
                    searchBarValue = e.target.value;
                    getAirports();
                }}
            />
            <br />
            <br />
            {searchResults}
        </div>
    );
}

export default SearchBar;
