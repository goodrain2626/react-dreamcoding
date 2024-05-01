import React, { useState } from 'react';

export default function Counter({total, onClick}) {
    const [number, setNumber] = useState(0);
    const addNumber = () => {
    setNumber((prev) => prev + 1);
    onClick();
}
    return (
        <div className='counter-wrapper'>
            <h1>{number} <span className='total'>/ {total}</span></h1>
            <button onClick={addNumber}>Add + </button>
        </div>
    );
}

