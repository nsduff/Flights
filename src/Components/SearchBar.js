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

    // useEffect(() => {
    //     getAirports(searchBarValue);
    //     //  setSearchButtonPressed(false);
    // }, [searchButtonPressed]);

    // console.log(airports);
    //console.log(worldAirports);
    // const locationsUrl = ''

    // async function fetchLocations() {
    //     const response = await fetch(locationsUrl);
    //     const result = await
    // }
    return (
        <div className="searchbar">
            <br />
            <label for="searchBar">Find other airport:</label>
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
            <h3>Current origin: {origin}</h3>
            <h3>Current destination: {destination}</h3>
        </div>
    );
}

export default SearchBar;
