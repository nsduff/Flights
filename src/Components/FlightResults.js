import ResultCard from "./ResultCard";
import { Spinner } from "reactstrap";

function FlightResults({
  showResults,
  result,
  data,
  destination,
  direct,
  loading
}) {
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!result && showResults) {
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
