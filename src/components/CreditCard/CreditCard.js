import React from 'react';
import './CreditCard.css';
import visaImg from '../../assets/images/visa.png';
// import mastercardImg from '../../assets/images/master-card.svg';

function CreditCard(props) {
    const { 
        type, 
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
    } = props;

    let hashedCreditCard = number.substr(-4);

    const zeroedMonth = (month) => {
        if (expirationMonth < 10) {
            return "0" + month;
        } else {
            return month;
        }  
    };

    const shortenedYear = (year) => {
        return String(year).slice(-2);
    };

    const cardColors = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
    };

    return (
        <div className='creditCard' style={cardColors}>
            {/* Calling the mastercardImg variable breaks the code */}
            {type === "Visa" ? (
                <img src={visaImg} />
                ) : (
                <img src="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg" />
                )
            }
            <div className='credit-card-number'>
                •••• •••• •••• {hashedCreditCard}
            </div>
            <div className='expiration'>
                Expires {zeroedMonth(expirationMonth)}/{shortenedYear(expirationYear)}
            </div>
            <div className='bank'>{bank}</div>
            <div className='owner'>{owner}</div>
        </div>
    );
}

export default CreditCard;