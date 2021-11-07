import React from 'react';
import FlightResults from '../Components/FlightResults';
import Search from '../Components/Search';

function Home({
    origin,
    setOrigin,
    setDestination,
    direct,
    setDirect,
    setStartSearch,
    startSearch,
    result,
    data,
    convertTime,
    destination,
}) {
    return (
        <>
            <Search
                origin={origin}
                setOrigin={setOrigin}
                destination={destination}
                setDestination={setDestination}
                direct={direct}
                setDirect={setDirect}
                setStartSearch={setStartSearch}
            />

            <FlightResults
                result={result}
                data={data}
                convertTime={convertTime}
                destination={destination}
                direct={direct}
                startSearch={startSearch}
            />
        </>
    );
}

export default Home;
