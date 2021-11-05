import "./App.css";
import { Spinner } from "reactstrap";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

import FlightResults from "./Components/FlightResults";
import Dropdown from "./Components/Dropdown";

function App() {
  const [data, setData] = useState([]);
  const [destination, setDestination] = useState("VLC");
  const [origin, setOrigin] = useState("PRG");
  const [result, setResult] = useState(null);

  const url = `https://api.skypicker.com/flights?fly_from=${origin}&fly_to=${destination}&date_from=06/11/2021&date_to=06/11/2021&direct_flights=0&locale=en&partner=data4youcbp202106&curr=EUR&price_from=1&price_to=10000`;

  async function fetchData() {
    const resp = await fetch(url);
    const result = await resp.json();
    // console.log(result);
    setResult(result);
    setData(result.data);
  }

  function convertTime(unixTime) {
    const time = DateTime.fromMillis(unixTime * 1000).toFormat("hh:mm");
    return time;
  }

  useEffect(() => {
    fetchData();
  }, [origin, destination]);

  if (!result) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="App">
      {/* bollocks */}
      <Dropdown
        origin={origin}
        setOrigin={setOrigin}
        setDestination={setDestination}
        destination={destination}
      />
      <FlightResults data={data} convertTime={convertTime} />
    </div>
  );
}

export default App;
