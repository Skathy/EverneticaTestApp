import { React, useState, useEffect} from 'react';
import CustomButton from '../customButton/index';
import CustomInput from '../customInput/index';
import './style.scss'
import CountryCard from '../CountryCard/CountryCard';

const MainTable = () => {
    const [alphaCodeInput, setAlphaCodeInput] = useState('ukr')
    const [country, setCountry] = useState([])
    // const [alphaCode, setAlphaCode]  = useState([])


    const requestURL = `https://restcountries.eu/rest/v2/name/${alphaCodeInput}?fields=name;callingCodes;flag`
    // const allAlphaCodesURL = `https://restcountries.eu/rest/v2/all?fields=alpha2Code;alpha3Code;name`

    useEffect(() => {
        // fetchAllAlphaCodes()
        fetchCountry()
    }, [])

    // async function fetchAllAlphaCodes()  {
    //     try {
    //         const response = await fetch(allAlphaCodesURL)
    //         const data = await response.json()
    //         console.log(await data)
    //         setAlphaCode(await data)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    async function fetchCountry() {
        try {
            const response = await fetch(requestURL)
            const data = await response.json()
            setCountry(await data)
            // console.log(await data[0])
        } catch (e) {
            console.error(e)
        } finally {

        }
    }

    const onChangeHandler = e => {
        if (e.target.value.trim() !== '') {
            setAlphaCodeInput(prev => prev = e.target.value)
            fetchCountry()  
        }
    }
    const onClickHandler = () => {
        console.log(`Input is: ${alphaCodeInput}`)
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
            
            {/* <CountryCard
                countryName={country.name}
                flag={country.flag}
                countryCode={country.callingCodes} 
            /> */}
        </div>
    )
}

export default MainTable