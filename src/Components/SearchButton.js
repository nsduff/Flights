import React from 'react'

function SearchButton({ setStartSearch }) {


    return (
        <button onClick={() => setStartSearch(true)}>Search</button>
    )
}

export default SearchButton
