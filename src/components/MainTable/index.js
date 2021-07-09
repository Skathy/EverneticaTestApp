import { React, useState, useEffect} from 'react';
import CustomButton from '../customButton/index';
import CustomInput from '../customInput/index';
import './style.scss'
import CountryCard from '../CountryCard/CountryCard';

const MainTable = () => {
    const [alphaCodeInput, setAlphaCodeInput] = useState('ua')
    const [country, setCountry] = useState({})

    const xhr = new XMLHttpRequest()

    const requestURL = `https://restcountries.eu/rest/v2/alpha/${alphaCodeInput}?fields=name;callingCodes;flag`
    const allAlphaCodes = `https://restcountries.eu/rest/v2/all?fields=alpha2Code;alpha3Code;`

    useEffect(() => {
        getAllAlphaCodes('GET', allAlphaCodes)
            .then(data => console.log(data))
            .catch(err => console.log(err))
            // .finally(console.log('All shit is completed'))
    }, [])

    function getAllAlphaCodes(method, url) {
        return new Promise ( (resolve, reject) => {
            xhr.open(method, url)
            xhr.responseType = 'json'
            xhr.onload = () => {
                if (xhr.status >= 400) {
                    reject(xhr.response)
                } else {
                    resolve(xhr.response)
                }
            }
            xhr.onerror = () => {
                reject(xhr.response)
            }
            xhr.send()
        })
    }

    // function sendRequest (method, url) {
    //     return new Promise((resolve, reject) => {

    //         xhr.open(method, url)

    //         xhr.responseType = 'json'

    //         xhr.onload = () => {
    //             if (xhr.status >= 400) {
    //                 reject(xhr.response)
    //             } else {
    //                 resolve(xhr.response)}
    //         }
    //         xhr.onerror = () => {
    //            reject(xhr.response)
    //         }

    //         xhr.send()
    //     })
    // } 

    async function fetchCountry() {
        console.log('Fetch country started..')
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
        setAlphaCodeInput(e.target.value)
        fetchCountry()
        // console.log('He;;',country)
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
            <CountryCard
                countryName={country.name}
                flag={country.flag}
                countryCode={country.callingCodes} 
            />
        </div>
    )
}

export default MainTable