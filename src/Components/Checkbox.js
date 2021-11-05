import React from 'react'

function Checkbox({ direct, setDirect }) {
    return (
        <>
            <label htmlFor="direct">Direct Flights Only: </label>
            <input type='checkbox' name='direct' value={direct} onChange={(e) => { console.log(direct); setDirect(direct === 0 ? 1 : 0) }} />
        </>
    )
}

export default Checkbox

