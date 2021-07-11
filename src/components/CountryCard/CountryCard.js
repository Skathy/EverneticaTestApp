import React from 'react';
import CustomButton from '../customButton';
import CustomCheckbox from './../customCheckbox/index';
import './styles.scss'

const CountryCard  = ({country, onChange, deleteHandler}) => {
    return (
        <div className='card-wrapper'>
            <img src={country.flag} alt="flag" />
            <span>{country.name}</span>
            <span>{country.callingCodes ? `Country code: +${country.callingCodes}`: null}</span>
            <div className='hidden-menu-wrapper'>
                <CustomCheckbox 
                    checked={country.isPinned} 
                    onChange={() => onChange(country, country.id)} 
                    style={{color: 'white'}}
                />
                <CustomButton
                    onClick={() => deleteHandler(country.id)} 
                    style={{color: 'white'}}
                    className='hidden-delete-button' 
                    name='delete'
                />
            </div>
        </div>
    )
}

export default CountryCard