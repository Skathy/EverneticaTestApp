import { React, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import { getCountries, displayCountries, pinned, unpin, deleteFromDisplay, deleteFromPinned } from '../../store/countries/actions';
import CustomButton from '../customButton/index';
import CustomInput from '../customInput/index';
import CountryCard from '../CountryCard/CountryCard';
import './style.scss'

const MainTable = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const {countries, displayedCountries, pinnedCountries}= useSelector(state => state.countryReducer)

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    const displayCountry = () => {
        if (input.trim() !== '') {
            const triggeredCountry = countries
                .filter(item => item.name.includes(input))
                .map(country => Object.assign(country, {isPinned: false, id: uuid()}))
    
            dispatch(displayCountries(triggeredCountry))
        }
    }

    useEffect(() => {
        displayCountry()
    }, [input])

    const onChangeHandler = e => {
        if (e.target.value.trim() !== '') {
            const text = e.target.value
            const capitalizeText = text.split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1) ).join(' ')
            setInput(capitalizeText)
        }
    }
    const onClickHandler = () => {
        setInput('')
        dispatch(displayCountries([]))
    }

    const pinHandler = (country, id) => {
        if (country.isPinned === false) {
            const filteredArr = displayedCountries.map(item => {
                if (item.id === id) {
                    return {...item, isPinned: !item.isPinned}
                } else {
                    return item
                }
            })
            const pinnedArr = filteredArr.filter(item => item.isPinned === true)
            dispatch(displayCountries(filteredArr.filter(item => item.isPinned === false)))
            dispatch(pinned(pinnedArr[0]))
        } else if (country.isPinned === true) {
            const filteredArr = pinnedCountries.map(item => {
                if (item.id === id) {
                    return {...item, isPinned: !item.isPinned}
                } else {
                    return item
                }
            })
            const unpinnedArr = filteredArr.filter(item => item.isPinned === false)
            displayedCountries.unshift(unpinnedArr[0])
            dispatch(displayCountries(displayedCountries))
            dispatch(unpin(filteredArr.filter(item => item.isPinned === true)))
        }
    }

    const deleteHandler = (id) => {
        const displayedFilteredArr = displayedCountries.filter(item => item.id !== id)
        const pinnedFilteredArr = pinnedCountries.filter(item => item.id !== id)

        dispatch(deleteFromDisplay(displayedFilteredArr))
        dispatch(deleteFromPinned(pinnedFilteredArr))
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
                {pinnedCountries.length ? pinnedCountries.map((country, index) => (
                    <CountryCard
                        deleteHandler={deleteHandler}
                        key={index}
                        onChange={pinHandler}
                        country={country}
                    />)
                ) : null}
                {displayedCountries.length ? displayedCountries.map((country, index) => (
                    <CountryCard
                        deleteHandler={deleteHandler}
                        key={index}
                        onChange={pinHandler}
                        country={country}
                    />)
                ) : null}
            </div>
        </div>
    )
}

export default MainTable