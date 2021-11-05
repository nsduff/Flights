import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';

function Details({ setStartSearch, fetchData }) {

    const { cityFrom, cityTo, dTime } = useParams();

    function convertToDate(unixTime) {
        const date = DateTime.fromMillis(unixTime * 1000).toFormat('dd/MM/yyyy');
        return date;
    }

    const url = `https://api.skypicker.com/flights?fly_from=${cityFrom}&fly_to=${cityTo}&date_from=${convertToDate(dTime)}&date_to=${convertToDate(dTime)}`

    useEffect(
        () => { fetchData(url); }

    )


    return (
        <div>
            bollocks
        </div>
    )
}

export default Details
