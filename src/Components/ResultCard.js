import React from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";

function ResultCard({ flight }) {

    function convertTime(unixTime) {
        const time = DateTime.fromMillis(unixTime * 1000).toFormat("hh:mm");
        return time;
    }

    return (
        <Link to={`/flights/${flight.cityCodeFrom}/${flight.cityCodeTo}/${flight.dTime}/${flight.id}`}>
            <div className="result-card">
                <div className="numbers">
                    <h1>&euro;{flight.price}</h1>
                    <div>
                        <h6>
                            <b>Departs:</b> {convertTime(flight.dTime)}
                        </h6>
                        <h6>
                            <b>Arrives:</b> {convertTime(flight.aTime)}
                        </h6>
                    </div>
                </div>
                <div className="routes">
                    {flight.route.map((r, i) => (
                        <div key={i}>
                            <img
                                alt="airline"
                                src={`https://images.kiwi.com/airlines/64x64/${r.airline}.png`}
                            />
                            <h6>
                                {r.airline}
                                {r.flight_no}
                            </h6>
                            <h6>{convertTime(r.dTime)}-</h6>
                            <h6>{convertTime(r.aTime)}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default ResultCard;
