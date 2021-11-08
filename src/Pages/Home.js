import React from 'react';
import FlightResults from '../Components/FlightResults';
import Search from '../Components/Search';

function Home({
    origin,
    setOrigin,
    setDestination,
    direct,
    setDirect,
    setLoading,
    showResults,
    loading,
    result,
    data,
    convertTime,
    destination,
    setShowResults
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
                setLoading={setLoading}
                showResults={showResults}
                setShowResults={setShowResults}
            />

            <FlightResults
                result={result}
                data={data}
                convertTime={convertTime}
                destination={destination}
                direct={direct}
                showResults={showResults}
                loading={loading}

            />
        </>
    );
}

export default Home;
