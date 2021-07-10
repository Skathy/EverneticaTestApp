import { Checkbox } from '@material-ui/core';
import React from 'react';
import CustomButton from '../customButton';
import './styles.scss'
import CustomCheckbox from './../customCheckbox/index';

const CountryCard  = ({countryName, countryCode, flag}) => {
    return (
        <div className='card-wrapper'>
            <img src={flag} alt="flag" />
            <span>{countryName}</span>
            <span>{countryCode.length ? `Country code: +${countryCode}`: null}</span>
            <div className='hidden-menu-wrapper'>
                <CustomCheckbox style={{color: 'white'}}/>
                <CustomButton style={{color: 'white'}}className='hidden-delete-button' name='delete'/>
            </div>
        </div>
    )
}

export default CountryCard