import React from 'react';
import '../App.css'
import Avatar from './Avatar';



export default function Profile({img, isNew, name, title}) {
    return (
        <div className='wrapper'>
            <h1 className='name'>{name}</h1>
            <Avatar img={img} isNew={isNew}/>
            <p className='title'>{title}</p>
        </div>
    );
}

