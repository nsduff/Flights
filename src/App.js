import "./App.css";
import { DateTime } from "luxon";

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const url =
    "https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&date_from=06/11/2021&date_to=06/11/2021&direct_flights=0&locale=en&partner=data4youcbp202106&curr=EUR&price_from=1&price_to=10000";

  async function fetchData() {
    const resp = await fetch(url);
    const result = await resp.json();
    // console.log(result);
    setData(result.data);
  }

  function convertTime(unixTime) {
    const time = DateTime.fromMillis(unixTime * 1000).toFormat("hh:mm");
    return time;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      bollocks
      {console.log(data)}
      {data.map((flight, index) => (
        <div>
          <div>
            <div>{convertTime(flight.dTime)}</div>
            {flight.route.map((r, i) => (
              <div>
                {r.airline}
                {r.flight_no}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
