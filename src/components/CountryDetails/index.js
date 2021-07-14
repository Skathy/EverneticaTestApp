import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPinned, showDisplayedCountries } from '../../store/countries/actions';
import Flex from './../../assets/styledComponents/Flex';
import './style.scss'

const CountryDetails = ( {location} ) => {
    const dispatch = useDispatch()
    const {displayedCountries, pinnedCountries} = useSelector(state => state.countryReducer)
    const [id, setId] = useState('')
    
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const id = params.get('id')
        if (!JSON.parse(sessionStorage.getItem('display'))) {
            sessionStorage.setItem('display', '[]')
        } else if (!JSON.parse(sessionStorage.getItem('pinned'))) {
            sessionStorage.setItem('pinned', '[]')
        }
        dispatch(showDisplayedCountries(JSON.parse(sessionStorage.getItem('display'))))
        dispatch(getPinned(JSON.parse(sessionStorage.getItem('pinned'))))
        setId(id)
    }, [])


    const displayTable = (id) => {
        const filteredArr = displayedCountries.filter(item => item.id === id)
        if (filteredArr.length) {
            return filteredArr.map(item => item)
        } else {
            const filterPinnedArr = pinnedCountries.filter(item => item.id === id)
            return filterPinnedArr.map(item => item)
        }
    }

    return (
        <Flex justify='center'>
        {displayTable(id).map( (item, index) => (
            <div key={index} className='details-card-wrapper'>
                <div className='img-wrapper'>
                    <img src={item.flag} alt="flag" />
                    {item.isPinned ? <div className='pinned-card'></div> : null}
                </div>
                <div className='info-wrapper'>
                    <div className='country-header'>
                        <h3>{item.name}</h3>
                    </div>
                    {item.callingCodes[0] !== '' ? 
                        <span>
                            <h4>Country code:</h4>
                            <h5>+{item.callingCodes}</h5>
                        </span> 
                    : null}
                    <span>
                        <h4>Language:</h4>
                        <h5>{item.languages[0].name}</h5>
                    </span>
                    <span>
                        <h4>Population:</h4>
                        <h5>{item.population}</h5>
                    </span>
                    <span>
                        <h4>Currency:</h4>
                        <h5>{item.currencies[0].symbol}, {item.currencies[0].name}</h5>
                    </span>
                </div>
                <div className='btn-wrapper'>
                    <Link to='/'>
                        HOME
                    </Link>
                </div>
            </div>
        ))}  
        </Flex>
    )
}

export default CountryDetails