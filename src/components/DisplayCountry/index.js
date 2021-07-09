import { React, useState } from 'react';
import CustomButton from './../customButton/index';
import CustomInput from './../customInput/index';
import './style.scss'
import CountryCard from './../CountryCard/CountryCard';

const DisplayCountry = () => {
    const [input, setInput] = useState('')
    const [isData, setData] = useState(true)

    const onChangeHandler = e => {
        setInput(e.target.value)
    }
    const onClickHandler = () => {
        // setData(isData = !isData)
        console.log(`Input is: ${input}`)
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
            <CountryCard />
        </div>
    )
}

export default DisplayCountry