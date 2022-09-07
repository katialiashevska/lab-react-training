import React from 'react';
import './Random.css';

function Random(props) {
    const { min, max } = props;
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min); 
    };
     
    return (
        <div className="random">
            <p>
                Random value between {min} and {max} => {random(min, max)}
            </p>
        </div>
    );
}

export default Random;