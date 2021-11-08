import React from 'react'

function SearchButton({ setLoading, setShowResults }) {


    return (
        <button onClick={() => {
            setLoading(true);
            setShowResults(true)
        }}>Search</button>
    )
}

export default SearchButton
