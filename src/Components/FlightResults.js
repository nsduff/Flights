import ResultCard from "./ResultCard";
import { Spinner } from "reactstrap";

function FlightResults({
  startSearch,
  result,
  data,
  destination,
  direct,
}) {
  if (startSearch && !result) {
    return <Spinner></Spinner>;
  }
  if (!data.length && startSearch) {
    return (destination === "ASS" && direct === 1) ? (
      <h2>TO DEEZ BOLLOCKS?</h2>
    ) : (
      <h2>SCREW YOU, NO FLIGHTS</h2>
    );
  }

  return (
    <div className="container">
      {data.map((flight, index) => (
        <ResultCard key={index} flight={flight} />
      ))}
    </div>
  );
}
export default FlightResults;
