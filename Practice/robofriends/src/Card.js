import React from 'react';
import './index.css'

const Card = ({ name, email, id }) => {
    return (
        <div className='Card'>
            <img src={`https://robohash.org/${id}`} alt="Robot"
                width={200} height={`auto`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;