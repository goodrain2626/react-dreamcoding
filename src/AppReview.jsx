import React, { useState, useEffect } from 'react';
import Review from './components/Review';

export default function AppReview() {
    const [totalCount, setTotalCount] = useState(0)
    const handleTotalCount = () => {setTotalCount((prev) => prev + 1)}

        // useEffect를 사용하여 totalCount가 변경될 때마다 배경색을 조건부로 설정
        useEffect(() => {
            document.querySelector('.total-wrapper').style.backgroundColor = totalCount > 10 ? 'lightCoral' : 'lightSeaGreen'
        },[totalCount])

    return (
        <div className='total-wrapper' style={{display:'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center'}}> 
            <div>Total Count : {totalCount}</div>
            <Review onClick={handleTotalCount} totalCount={totalCount}/>
            <Review onClick={handleTotalCount} totalCount={totalCount}/>
        </div>
    );
}

