import './App.scss';

import { useEffect, useState } from 'react';

import Header from './Components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {
    const [data, setData] = useState([]);
    const [destination, setDestination] = useState('VLC');
    const [origin, setOrigin] = useState('PRG');
    const [result, setResult] = useState(null);
    const [direct, setDirect] = useState(0);

    const [loading, setLoading] = useState(false);

    const [showResults, setShowResults] = useState(false);

    const partner = 'data4youcbp202106';

    const url = `https://api.skypicker.com/flights?fly_from=${origin}&fly_to=${destination}&date_from=10/11/2021&date_to=10/11/2021&direct_flights=${direct}&locale=en&partner=${partner}&curr=EUR&price_from=1&price_to=10000`;

    async function fetchData(url) {
        setLoading(true);
        const resp = await fetch(url);
        const result = await resp.json();
        setResult(result);
        setData(result.data);
        setLoading(false);
    }

    useEffect(() => {
        showResults && fetchData(url);
    }, [direct, showResults]);

    return (
        // <div className="App">
        //   <Header />

        //   <Search
        //     origin={origin}
        //     setOrigin={setOrigin}
        //     setDestination={setDestination}
        //     destination={destination}
        //     direct={direct} setDirect={setDirect}
        //     showResults={showResults}

        //   />

        //   <FlightResults result={result} data={data} convertTime={convertTime} destination={destination} direct={direct} showResults={showResults} />
        // </div>

        <div className="App">
            <Header />

            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <Home
                                origin={origin}
                                setOrigin={setOrigin}
                                setDestination={setDestination}
                                destination={destination}
                                direct={direct}
                                setDirect={setDirect}
                                showResults={showResults}
                                result={result}
                                data={data}
                                setShowResults={setShowResults}
                                loading={loading}
                            />
                        }
                    />

                    <Route
                        path="/flights/:cityFrom/:cityTo/:dTime/:id"
                        element={<Details fetchData={fetchData} data={data} showResults={showResults} />}
                    />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
