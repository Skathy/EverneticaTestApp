import React from 'react';
import './styles.scss'

const CountryCard  = ({countryName, countryCode, flag}) => {
    return (
        <div className='card-wrapper'>
            <img src={flag} alt="flag" />
            <span>Country name: {countryName}</span>
            <span>Country call code: +{countryCode}</span>
        </div>
    )
}

export default CountryCard