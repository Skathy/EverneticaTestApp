import React from 'react';
import CustomButton from '../customButton';
import CustomCheckbox from '../customCheckbox/index';
import './styles.scss'
import { Link } from 'react-router-dom';

const CountryCard  = ({country, onChange, deleteHandler, onClickHandler, path}) => {
    return (
        <div className='card-wrapper'>
            <img src={country.flag} alt="flag" />
            <span>{country.name}</span>
            <span>{country.callingCodes ? `Country code: +${country.callingCodes}`: null}</span>
            <div className='hidden-menu-wrapper'>
                <CustomCheckbox 
                    checked={country.isPinned} 
                    onChange={() => onChange(country, country.id)} 
                    style={{color: 'black'}}
                />
                <Link to={path} onClick={() => onClickHandler(country)}>Details</Link>
                {/* <CustomButton
                    onClick={()=> onClickHandler(country)}
                    style={{color: 'black'}}
                    className='hidden-delete-button' 
                    name='details'
                /> */}
                <CustomButton
                    onClick={() => deleteHandler(country.id)} 
                    style={{color: 'black'}}
                    className='hidden-delete-button' 
                    name='delete'
                />
            </div>
        </div>
    )
}

export default CountryCard