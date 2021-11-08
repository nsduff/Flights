import { useState, useEffect } from 'react';
import worldAirports from '../airports.json';
import '../searchBar.scss';
import AirportCard from './AirportCard';

function SearchBar({ origin, setOrigin, destination, setDestination }) {
    const [searchBarValue, setSearchBarValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        function getAirports() {

            const results = Object.values(worldAirports).filter((airport) =>
                airport.name.toLowerCase().includes(searchBarValue.toLowerCase()) ||
                airport.city.toLowerCase().includes(searchBarValue.toLowerCase()) ||
                airport.state.toLowerCase().includes(searchBarValue.toLowerCase())
            );

            setSearchResults(results);
        }

        searchBarValue && getAirports();

    }, [searchBarValue])

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
                    setSearchBarValue(e.target.value);
                }}
            />
            <br />
            <br />
            {searchResults.map(
                (airport, i) =>
                    airport.iata !== '' && (
                        <AirportCard key={i} airport={airport} setOrigin={setOrigin} setDestination={setDestination} />
                    )
            )}
        </div>
    );
}

export default SearchBar;
