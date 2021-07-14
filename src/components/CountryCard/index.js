import React from 'react';
import CustomCheckbox from '../customCheckbox/index';
import './styles.scss'
import { Link } from 'react-router-dom';

const CountryCard  = ({country, onChange, deleteHandler, path}) => {
    return (
        <Link to={`${path}`} >
            <div className='card-wrapper'>
                <img src={country.flag} alt="flag" />
                <span>{country.name}</span>
                {country.callingCodes[0] !== '' ? <span>Country code: +{country.callingCodes}</span> : null}
                <div className='hidden-menu-wrapper'>
                    <CustomCheckbox 
                        checked={country.isPinned} 
                        onChange={() => onChange(country, country.id)}
                        style={{color: 'black'}}
                    />
                    <div className="btn-wrapper" onClick={(e) => deleteHandler(e, country.id)}></div>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard