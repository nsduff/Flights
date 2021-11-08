import React from 'react'

function SearchButton({ setShowResults }) {


    return (
        <button onClick={() => setShowResults(true)}>Search</button>
    )
}

export default SearchButton
