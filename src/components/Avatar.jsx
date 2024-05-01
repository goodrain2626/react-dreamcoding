import React from 'react';

export default function Avatar({img, isNew}) {
    return (
        <div className='avatar'>
            {isNew && <span className='isNew'>NEW</span>}
            <img src={img} alt='workers'/>
        </div>
    );
}

