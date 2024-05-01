import React, { useEffect, useState } from 'react';

export default function Products() {
    // const [count, setCount] = useState(0)
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(true);
    const handleChecked = () => {
        setChecked((prev) => !prev)
    }
    useEffect(()=>{
        fetch(`data/${checked ? "sale_" : ""}products.json`)
        .then((res) => res.json())
        .then((data)=>{
            console.log("데이터 받아왔다!🤓");
            setProducts(data)
        })
        return () => {
            console.log("🧹깨끗하게 청소합니다~")
        }
    }, [checked])
    return (
        <>
        <input id='checkbox' type='checkbox' value={checked} onChange={handleChecked}/>
        <label htmlFor='checkbox'>✨세일 중인 품목만 보여줘🎁</label> 
        <ul>
        {products.map((product) => ( 
       <li key={product.id}>
            <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </article>
        </li>
        ))}
        </ul>
         {/* <button onClick={() => setCount((prev) => (prev + 1))}>{count}</button> */}
        </>
    );
}

