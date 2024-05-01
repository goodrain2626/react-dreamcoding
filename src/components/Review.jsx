import React, { useState } from 'react';

export default function Review({totalCount, onClick}) {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount((prev) => prev + 1)
        onClick()
    }
    return (
            <div style={{width: '300px', height:'250px', 
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1>{count} / {totalCount}</h1>
                <button onClick={handleCount}>Add + </button>
            </div>
    );
}

