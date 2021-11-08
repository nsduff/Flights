import React from 'react';

function Checkbox({ direct, setDirect, showResults, setShowResults, setLoading }) {
    return (
        <>
            <label htmlFor="direct">Direct Flights Only: </label>
            <input
                type="checkbox"
                name="direct"
                value={direct}
                onChange={() => {
                    setDirect(direct === 0 ? 1 : 0);
                    showResults && setLoading(true);
                    setShowResults(true);
                }}
            />
        </>
    );
}

export default Checkbox;
