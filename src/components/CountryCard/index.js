import React from 'react';
import { Link } from 'react-router-dom';
import CustomCheckbox from '../customCheckbox/index';
import './styles.scss'

const CountryCard  = ({country, onChange, deleteHandler, path}) => {
    return (
        <Link to={path} >
            <div className='card-wrapper'>
                <div className='card-header'>
                    <img src={country.flag} alt="flag" />
                    {country.isPinned ? <div className='pinned-card'></div> : null}
                </div>
                <span>{country.name}</span>
                {country.callingCodes[0] !== '' ? <span>Country code: +{country.callingCodes}</span> : null}
                <div className='hidden-menu-wrapper'>
                    <CustomCheckbox 
                        checked={country.isPinned} 
                        onChange={() => onChange(country, country.id)}
                    />
                    <div className="btn-wrapper" onClick={(e) => deleteHandler(e, country.id)}></div>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard