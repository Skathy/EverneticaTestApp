import React from 'react';
import './styles.scss'

const CountryCard  = ({countryName = 'Ukraine', countryCode = '380', flag = 'https://cdn.webshopapp.com/shops/94414/files/52440074/flag-of-ukraine.jpg'}) => {
    return (
        <div className='card-wrapper'>
            <img src={flag} alt="flag" />
            <span>Country name: {countryName}</span>
            <span>Country code: {countryCode}</span>
        </div>
    )
}

export default CountryCard