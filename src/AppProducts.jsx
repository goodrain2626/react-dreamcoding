import React, { useState } from 'react';
import Products from './components/Products';

export default function AppProducts() {
    const [showProducts, setShowProducts] = useState(true)
    return (
        <div>
           {showProducts && <Products/>}
           <button onClick={() => setShowProducts((prev) => !(prev))}>토글</button> 
        </div>
    );
}

