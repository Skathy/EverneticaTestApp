import { React, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import { getCountries, showDisplayedCountries, pin, unpin, deleteFromDisplay, deleteFromPinned, getPinned } from '../../store/countries/actions';
import CustomButton from '../customButton/index';
import CustomInput from '../customInput/index';
import CountryCard from '../CountryCard';
import './style.scss'
import Flex from './../../assets/styledComponents/Flex';

const MainTable = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const [currentCard, setCurrentCard] = useState({})

    const {countries, displayedCountries, pinnedCountries}= useSelector(state => state.countryReducer)

    useEffect(() => {
        if ( !JSON.parse(sessionStorage.getItem('display')) ) {
            sessionStorage.setItem('display', '[]')
        } if (!JSON.parse(sessionStorage.getItem('pinned') )){
            sessionStorage.setItem('pinned', '[]')
        }

        dispatch(getCountries())
        dispatch(showDisplayedCountries(JSON.parse(sessionStorage.getItem('display'))))
        dispatch(getPinned(JSON.parse(sessionStorage.getItem('pinned'))))
    }, [])

    const displayCountry = () => {
        if (input.trim() !== '') {
            const triggeredCountry = countries
                .filter(item => item.name.includes(input))
                .map((country, index) => Object.assign(country, {isPinned: false, id: uuid(), order: index}))
    
            dispatch(showDisplayedCountries(triggeredCountry))
            sessionStorage.setItem('display',JSON.stringify(triggeredCountry))
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
        } else if (e.target.value.trim() === '') {
            setInput('')
            dispatch(showDisplayedCountries([]))
            sessionStorage.setItem('display', '[]')   
        }
    }
    
    const onClickHandler = () => {
        setInput('')
        dispatch(showDisplayedCountries([]))
        sessionStorage.setItem('display', '[]')   
    }

    const pinHandler = (country, id) => {
        if (country.isPinned === false) {
            const filteredArr = displayedCountries.map((item) => {
                if (item.id === id) {
                    return {...item, isPinned: !item.isPinned}
                } else {
                    return item
                }
            })
            const pinnedArr = filteredArr.filter(item => item.isPinned === true)

            dispatch(showDisplayedCountries(filteredArr.filter(item => item.isPinned === false)))
            sessionStorage.setItem('display', JSON.stringify(filteredArr.filter(item => item.isPinned === false)))

            dispatch(pin(pinnedArr[0]))
            sessionStorage.setItem('pinned', JSON.stringify(JSON.parse(sessionStorage.getItem('pinned')).concat(pinnedArr)))

        } else if (country.isPinned === true) {
            const filteredArr = pinnedCountries.map((item) => {
                if (item.id === id) {
                    return {...item, isPinned: !item.isPinned,}
                } else {
                    return item
                }
            })
            const unpinnedArr = filteredArr.filter(item => item.isPinned === false)
            displayedCountries.unshift(unpinnedArr[0])

            dispatch(showDisplayedCountries(displayedCountries))
            sessionStorage.setItem('display',JSON.stringify(displayedCountries))

            dispatch(unpin(filteredArr.filter(item => item.isPinned === true)))
            sessionStorage.setItem('pinned', JSON.stringify(filteredArr.filter(item => item.isPinned === true)))
        }
    }

    const deleteHandler = (e, id) => {
        e.preventDefault()
        const displayedFilteredArr = displayedCountries.filter(item => item.id !== id)
        const pinnedFilteredArr = pinnedCountries.filter(item => item.id !== id)

        dispatch(deleteFromDisplay(displayedFilteredArr))
        sessionStorage.setItem('display', JSON.stringify(displayedFilteredArr))

        dispatch(deleteFromPinned(pinnedFilteredArr))
        sessionStorage.setItem('pinned', JSON.stringify(pinnedFilteredArr))
    }

    const dragStartHandler = (e, country) => {
        setCurrentCard(country)
    }

    const dragOverHandler = e => {
        e.preventDefault()
    }

    const dropHandler = (e, country) => {
        e.preventDefault()
        dispatch(showDisplayedCountries(displayedCountries.map( item => {
            if (item.id === country.id) {
                return {...item, order: currentCard.order}
            }
            if (item.id === currentCard.id) {
                return {...item, order: country.order}
            }
            return item
        })))
    }

    const sortCards = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
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
                    style={{fontSize: '1.5rem'}}
                />
            </div>
            <div  className='countries-wrapper'>
                <Flex justify='center' direction='row'>
                    {pinnedCountries ? pinnedCountries.map((country, index) => (
                        <CountryCard
                            path={'/details?id='+country.id}
                            deleteHandler={deleteHandler}
                            key={index}
                            onChange={pinHandler}
                            country={country}
                        />)
                    ) : null}
                    {displayedCountries ? displayedCountries.sort(sortCards).map((country, index) => (
                        <div 
                            onDragStart={e => dragStartHandler(e, country)}
                            onDragOver={e => dragOverHandler(e)}
                            onDrop={e => dropHandler(e, country)}
                            draggable={true}
                            key={index}
                        >
                            <CountryCard
                                path={'/details?id='+country.id}
                                deleteHandler={deleteHandler}
                                onChange={pinHandler}
                                country={country}
                            />
                        </div>
                    )) : null}
                </Flex>
            </div>
        </div>
    )
}

export default MainTable