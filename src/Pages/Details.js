import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import ResultCard from '../Components/ResultCard';
import { Spinner } from 'reactstrap';

function Details() {

    const { cityFrom, cityTo, dTime, id } = useParams();

    const [flight, setFlight] = useState(null);

    function convertToDate(unixTime) {
        const date = DateTime.fromMillis(unixTime * 1000).toFormat('dd/MM/yyyy').toString();
        return date;
    }

    const partner = "data4youcbp202106"

    async function fetchNewData() {

        const url = `https://api.skypicker.com/flights?fly_from=${cityFrom}&fly_to=${cityTo}&date_from=${convertToDate(dTime)}&date_to=${convertToDate(dTime)}&partner=${partner}`

        const resp = await fetch(url);
        const result = await resp.json();

        const currentFlight = result.data.filter((flight => flight.id === id))[0];

        setFlight(currentFlight);

    }

    useEffect(
        () => {


            fetchNewData();

        }, []

    )

    if (!flight) {
        return <Spinner></Spinner>;
    }

    return (
        < ResultCard flight={flight} />
    )
}

export default Details
