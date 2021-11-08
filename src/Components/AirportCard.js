import React from 'react'

const AirportCard = ({ airport, setOrigin, setDestination }) => {
    return (
        <div className="results">
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
                    onClick={() => {
                        setOrigin(airport.iata);
                    }}
                >
                    set as origin
                </button>
                <button
                    className="results__button"
                    type="button"
                    onClick={() => {
                        setDestination(airport.iata);
                    }}
                >
                    set as destination
                </button>
            </div>
        </div>
    )
}

export default AirportCard
