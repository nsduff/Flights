import "./App.scss";

import { useEffect, useState } from "react";

import Header from './Components/Header';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {
  const [data, setData] = useState([]);
  const [destination, setDestination] = useState("VLC");
  const [origin, setOrigin] = useState("PRG");
  const [result, setResult] = useState(null);
  const [direct, setDirect] = useState(0);

  const [startSearch, setStartSearch] = useState(false);

  const partner = "data4youcbp202106"

  const url = `https://api.skypicker.com/flights?fly_from=${origin}&fly_to=${destination}&date_from=06/11/2021&date_to=06/11/2021&direct_flights=${direct}&locale=en&partner=${partner}&curr=EUR&price_from=1&price_to=10000`;

  async function fetchData(url) {

    const resp = await fetch(url);
    const result = await resp.json();
    setResult(result);
    setData(result.data);



    setStartSearch(false);

  }



  useEffect(() => {
    startSearch &&
      fetchData(url);

  }, [direct, startSearch]);


  return (
    // <div className="App">
    //   <Header />

    //   <Search
    //     origin={origin}
    //     setOrigin={setOrigin}
    //     setDestination={setDestination}
    //     destination={destination}
    //     direct={direct} setDirect={setDirect}
    //     setStartSearch={setStartSearch}

    //   />

    //   <FlightResults result={result} data={data} convertTime={convertTime} destination={destination} direct={direct} startSearch={startSearch} />
    // </div>

    <div className="App">

      <Header />

      <Router>

        <Routes>
          <Route exact path="/" element={<Home
            origin={origin}
            setOrigin={setOrigin}
            setDestination={setDestination}
            destination={destination}
            direct={direct} setDirect={setDirect}
            setStartSearch={setStartSearch}
            result={result} data={data}
            startSearch={startSearch}
          />} />

          <Route path="/flights/:cityFrom/:cityTo/:dTime/:id" element={<Details
            fetchData={fetchData} data={data} />} />

        </Routes>
      </Router>
    </div>
  );
}
export default App;
