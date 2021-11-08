import React from 'react';

function Checkbox({ direct, setDirect, setShowResults }) {
    return (
        <>
            <label htmlFor="direct">Direct Flights Only: </label>
            <input
                type="checkbox"
                name="direct"
                value={direct}
                onChange={(e) => {
                    setDirect(direct === 0 ? 1 : 0);
                    setShowResults(true);
                }}
            />
        </>
    );
}

export default Checkbox;
