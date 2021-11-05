import React from 'react'

function Checkbox({ direct, setDirect, setStartSearch }) {



    return (
        <>
            <label htmlFor="direct">Direct Flights Only: </label>
            <input type='checkbox' name='direct' value={direct}
                onChange={(e) => {
                    setDirect(direct === 0 ? 1 : 0);
                    setStartSearch(true)
                }} />
        </>
    )
}

export default Checkbox

