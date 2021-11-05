import React from 'react'
import { Link } from 'react-router-dom'

function ResultCard({ flight, convertTime }) {
    return (
        // <Link to={`/flights/${flight.id}`}>
        <div className="result-card">
            <div>
                {flight.cityFrom} to {flight.cityTo}
            </div>
            <div>Departure Time: {convertTime(flight.dTime)}</div>
            <div>Arrival Time: {convertTime(flight.aTime)}</div>
            <div>Ticket Price: {flight.price} EUR</div>
            <div>
                {flight.route.map((r, i) => (
                    <div key={i}>
                        {r.airline}
                        {r.flight_no}
                    </div>
                ))}
            </div>
        </div>
        // </Link>
    )
}

export default ResultCard
