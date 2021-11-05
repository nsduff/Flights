import './App.scss';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

import FlightResults from "./Components/FlightResults";

import Header from './Components/Header';
import Search from './Components/Search';

function App() {
  const [data, setData] = useState([]);
  const [destination, setDestination] = useState("VLC");
  const [origin, setOrigin] = useState("PRG");
  const [result, setResult] = useState(null);
  const [direct, setDirect] = useState(0);

  const [startSearch, setStartSearch] = useState(false);



  const url = `https://api.skypicker.com/flights?fly_from=${origin}&fly_to=${destination}&date_from=06/11/2021&date_to=06/11/2021&direct_flights=${direct}&locale=en&partner=data4youcbp202106&curr=EUR&price_from=1&price_to=10000`;

  async function fetchData() {


    const resp = await fetch(url);
    const result = await resp.json();
    // console.log(result);
    setResult(result);
    setData(result.data);
    setStartSearch(false)

  }

  function convertTime(unixTime) {
    const time = DateTime.fromMillis(unixTime * 1000).toFormat("hh:mm");
    return time;
  }

  useEffect(() => {
    startSearch &&
      fetchData();

  }, [direct, startSearch]);



  // if (!result) {
  //   return null
  // }

  return (
    <div className="App">
      <Header />

      <Search
        origin={origin}
        setOrigin={setOrigin}
        setDestination={setDestination}
        destination={destination}
        direct={direct} setDirect={setDirect}
        setStartSearch={setStartSearch}

      />

      <FlightResults result={result} data={data} convertTime={convertTime} destination={destination} direct={direct} startSearch={startSearch} />
    </div>
  );
}
export default App;
