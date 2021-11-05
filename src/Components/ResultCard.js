import React from "react";
import { Link } from "react-router-dom";

function ResultCard({ flight, convertTime }) {
  return (
    // <Link to={`/flights/${flight.cityFrom}/${flight.cityTo}/${flight.dTime}`}>
    <div className="result-card">
      <div className="numbers">
        <h1>&euro;{flight.price}</h1>
        <div>
          <h6>Departs: {convertTime(flight.dTime)}</h6>
          <h6>Arrives: {convertTime(flight.aTime)}</h6>
        </div>
      </div>
      <div className="routes">
        {flight.route.map((r, i) => (
          <div key={i}>
            <img
              src={`https://images.kiwi.com/airlines/64x64/${r.airline}.png`}
            />
            <h6>
              <b>
                {r.airline}
                {r.flight_no}
              </b>
            </h6>
            <h6>{convertTime(r.dTime)}-</h6>
            <h6>{convertTime(r.aTime)}</h6>
          </div>
        ))}
      </div>
    </div>

    // </Link>
  );
}

export default ResultCard;
