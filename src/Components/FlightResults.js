function FlightResults({ data, convertTime }) {
  if (!data.length) {
    return <h2>SCREW YOU, NO FLIGHTS</h2>;
  }
  return (
    <div>
      {data.map((flight, index) => (
        <div>
          <div>
            {flight.cityFrom} to {flight.cityTo}
          </div>
          <div>Departure Time: {convertTime(flight.dTime)}</div>
          <div>Arrival Time: {convertTime(flight.aTime)}</div>
          <div>Ticket Price: {flight.price} EUR</div>
          <div>
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
export default FlightResults;
