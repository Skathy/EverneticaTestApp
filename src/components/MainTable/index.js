import { React, useState, useEffect} from 'react';
import CustomButton from '../customButton/index';
import CustomInput from '../customInput/index';
import './style.scss'
import CountryCard from '../CountryCard/CountryCard';
import { useSelector, useDispatch } from 'react-redux'
import { getCountries } from '../../store/countries/actions';

const MainTable = () => {
    const dispatch = useDispatch()
    const [alphaCodeInput, setAlphaCodeInput] = useState('ukr')
    const [country, setCountry] = useState([])
    // const [alphaCode, setAlphaCode]  = useState([])

    const countries = useSelector(state => state.countryReducer.countries)

    const requestURL = `https://restcountries.eu/rest/v2/name/${alphaCodeInput}?fields=name;callingCodes;flag`

    useEffect(() => {
        fetchCountry()
        dispatch(getCountries())
    }, [])


    async function fetchCountry() {
        try {
            const response = await fetch(requestURL)
            const data = await response.json()
            setCountry(await data)
        } catch (e) {
            console.error(e)
        } finally {

        }
    }

    const onChangeHandler = e => {
        if (e.target.value.trim() !== '') {
            setAlphaCodeInput(e.target.value)
            fetchCountry()  
        }
    }
    const onClickHandler = () => {
        console.log('clicked')
        // console.log(`Input is: ${alphaCodeInput}`)
        // console.log('state', countries)
    }


    return (
        <div className='main-wrapper'>
            <div className='input-wrapper'>
                <CustomInput 
                    placeholder='Enter country name..'
                    value={alphaCodeInput}
                    onChange={e => onChangeHandler(e)}
                    />
                <CustomButton 
                    name='X'
                    onClick={onClickHandler}
                />
            </div>
            <div className='countries-wrapper'>
                {country.length ? country.map((item, index) => (
                    <CountryCard 
                        key={index} 
                        countryName={item.name} 
                        flag={item.flag} 
                        countryCode={item.callingCodes} 
                    />)) 
                : null}
            </div>
        </div>
    )
}

export default MainTable