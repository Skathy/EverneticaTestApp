import { React, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getCountries } from '../../store/countries/actions';
import CustomButton from '../customButton/index';
import CustomInput from '../customInput/index';
import CountryCard from '../CountryCard/CountryCard';
import './style.scss'

const MainTable = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('ukr')

    const countries = useSelector(state => state.countryReducer.countries)

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    const displayCountry = () => {
        const triggeredCountry = countries.filter(item => item.name.includes(input))
        // console.log('TRIGGER',triggeredCountry)

        return triggeredCountry.map(item => item)
    }

    const onChangeHandler = e => {
        if (e.target.value.trim() !== '') {
            const text = e.target.value
            const capitalizeText = text.split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1) ).join(' ')
            setInput(capitalizeText)
        }
    }
    const onClickHandler = () => {
        console.log('clicked')
    }


    return (
        <div className='main-wrapper'>
            <div className='input-wrapper'>
                <CustomInput 
                    placeholder='Enter country name..'
                    value={input}
                    onChange={e => onChangeHandler(e)}
                    />
                <CustomButton 
                    name='X'
                    onClick={onClickHandler}
                />
            </div>
            <div className='countries-wrapper'>
                {displayCountry().length ? displayCountry().map( (country, index) => (
                    <CountryCard 
                        key={index}
                        countryCode={country.callingCodes}
                        countryName={country.name}
                        flag={country.flag}
                        />)
                ) : null}
            </div>
        </div>
    )
}

export default MainTable