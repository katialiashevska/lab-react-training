import React from 'react';
import './IdCard.css';

function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;

    return (
        <div className="idCard">
            <div>
              <img src={picture} alt="id-pic"/>
            </div>
            <div>
                <p><strong>First name</strong>: {firstName}</p>
                <p><strong>Last name</strong>: {lastName}</p>
                <p><strong>Gender</strong>: {gender}</p>
                <p><strong>Height</strong>: {height}cm</p>
                <p><strong>Birth</strong>: {birth}</p>
            </div>
        </div>
    );
}
  
export default IdCard;

