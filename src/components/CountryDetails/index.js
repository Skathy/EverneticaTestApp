import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getCountry} from '../../store/countries/actions'
import CountryDetails from './display';
import './style.scss'

const DisplayDetails = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountry())
    }, [])
    const countryName = sessionStorage.getItem('CountryDetails')

    const display = useSelector(state => state.countryReducer.countryDetails)
    console.log('fetched', display)

    return (
        <div className='key'>
            {display.length ? display.map( item => {
                return <CountryDetails
                    name={item.name}
                    callingCodes={item.callingCodes}
                    languages={item.languages}
                    flag={item.flag}
                    population={item.population}
                    currencies={item.currencies} 
                />
            }) : null}
        </div>   
    )
}

export default DisplayDetails