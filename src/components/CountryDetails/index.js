import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDetails } from '../../store/countries/actions';
import Flex from './../../assets/styledComponents/Flex';
import './style.scss'

const CountryDetails = () => {
    const [pinned, setPinned] = useState(false)

    const {countryName, isPinned} = useParams()
    const dispatch = useDispatch()
    const {details, pinnedCountries} = useSelector(state => state.countryReducer)
    
    useEffect(() => {
        dispatch(getDetails(countryName))
        if (isPinned === 'isPinned') {
            setPinned(prev => !prev)
        }
    }, [])

    const display = (alpha) => {
        const filteredArr = pinnedCountries.filter(item => item.alpha3Code === alpha)
        if (filteredArr.length) {
            return filteredArr
        } else {
            return details
        }
    }

    return (
        <Flex justify='center'>
        {display(countryName).map( (item, index) => (
            <div key={index} className='details-card-wrapper'>
                <div className='img-wrapper'>
                    <img src={item.flag} alt="flag" />
                    {pinned ? <div className='pinned-card'></div> : null}
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