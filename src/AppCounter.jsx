import React, { useState } from 'react';
import './App.css';

import Counter from './components/Counter'

export default function AppCounter() {
    const [totalCount, setTotalCount] = useState(0);
    const handleCick = () => {
        setTotalCount((prev) => prev +1 )
    }
    return (
        <div className='counter-container'>
            <div className='banner'>Total Count : {totalCount} {totalCount > 10 ? '🔥' : '❄️'}</div>
            <div className='counters'>
            <Counter total={totalCount} onClick={handleCick}/>
            <Counter total={totalCount} onClick={handleCick}/>
            </div>
        </div>
    );
}

