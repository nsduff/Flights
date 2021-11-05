import ResultCard from "./ResultCard";
import { Spinner } from 'reactstrap';

function FlightResults({ startSearch, result, data, convertTime, destination, direct }) {

  if (
    startSearch &&
    !result) {
    return <Spinner></Spinner>;
  }
  else if (!data.length) {

    return (destination === 'ASS' && direct === 1) ? <h2>TO DEEZ BOLLOCKS?</h2>
      : <h2>SCREW YOU, NO FLIGHTS</h2>
      ;
  }



  return (
    <div>
      {data.map((flight, index) => (
        <ResultCard key={index} flight={flight} convertTime={convertTime} />
      ))}
    </div>
  );
}
export default FlightResults;
