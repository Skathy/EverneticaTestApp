import React from 'react'
import CustomButton from './../customButton/index';
import './style.scss'


const CountryDetails = ({name, callingCodes, languages, population, currencies, flag}) => {
    return (
        <div className='details-card-wrapper'>
            <div className='img-wrapper'>
                <img src={flag} alt="flag" />
                <img src='' alt="isPinned" />
            </div>
            <div className='info-wrapper'>
                <span>Country name: {name}</span>
                <span>Country code: {callingCodes}</span>
                <span>Language: {languages}</span>
                <span>Population: {population} peoples</span>
                <span>Currency: {currencies}</span>
            </div>
            <div className='btn-wrapper'>
                <CustomButton name='goback'/>
             </div>
        </div>

    )
}

export default CountryDetails