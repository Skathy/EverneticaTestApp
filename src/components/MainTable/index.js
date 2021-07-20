import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { getCountries, showDisplayedCountries, pin, unpin, deleteFromDisplay, deleteFromPinned, getPinned } from '../../store/countries/actions';
import CustomButton from '../customButton/index';
import CustomInput from '../customInput/index';
import CountryCard from '../CountryCard';
import './style.scss'
import Flex from './../../assets/styledComponents/Flex';

const MainTable = () => {
    const {pinned} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const [currentCard, setCurrentCard] = useState({})
    const [urlParam, setUrlParam] = useState([])

    const {displayedCountries, pinnedCountries}= useSelector(state => state.countryReducer)
    
    useEffect(() => {
        dispatch(getCountries(input))
        dispatch(getPinned(pinned))
        setUrlParam(pinnedCountries.map(item => item.alpha3Code))
        history.push(urlParam.join(';'))
    }, [input])

    useEffect(() => {
        history.push(urlParam.join(';'))
    }, [urlParam])

    const onChangeHandler = e => {
        if (e.target.value.trim() !== '') {
            const text = e.target.value
            const capitalizeText = text.split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1) ).join(' ')
            setInput(capitalizeText)
        } else if (e.target.value.trim() === '') {
            setInput('')
            dispatch(showDisplayedCountries([]))
        }
    }
    
    const onClickHandler = () => {
        setInput('')
        dispatch(showDisplayedCountries([]))
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

            setUrlParam(prev => [...prev, pinnedArr[0].alpha3Code])
            dispatch(showDisplayedCountries(filteredArr.filter(item => item.isPinned === false)))
            dispatch(pin(pinnedArr[0]))

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
            dispatch(unpin(filteredArr.filter(item => item.isPinned === true)))
            setUrlParam(filteredArr.filter(item => item.isPinned === true))
        }
    }

    const deleteHandler = (e, id) => {
        e.preventDefault()
        const displayedFilteredArr = displayedCountries.filter(item => item.id !== id)
        const pinnedFilteredArr = pinnedCountries.filter(item => item.id !== id)

        setUrlParam(pinnedFilteredArr.map(item => item.alpha3Code))
        dispatch(deleteFromDisplay(displayedFilteredArr))
        dispatch(deleteFromPinned(pinnedFilteredArr))
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

    const countryName = (name) => {
        const filteredPinArr = pinnedCountries.filter(item => item.name === name)
        if( filteredPinArr.length) {
            return '/details/'+filteredPinArr[0].alpha3Code+'/isPinned'
        } else {
            const filteredArr = displayedCountries.filter(item => item.name === name)
            if (filteredArr.length) {
                return '/details/'+filteredArr[0].alpha3Code+'/notPinned'
            } else {
                return 
            }
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
                    {pinnedCountries.length ? pinnedCountries.sort(sortCards).map((country, index) => (
                        <CountryCard
                            path={() => countryName(country.name)}
                            deleteHandler={deleteHandler}
                            onChange={pinHandler}
                            country={country} 
                        />
                    )
                    ) : null}
                    {displayedCountries.length ? displayedCountries.sort(sortCards).map((country, index) => (
                        <div 
                            onDragStart={e => dragStartHandler(e, country)}
                            onDragOver={e => dragOverHandler(e)}
                            onDrop={e => dropHandler(e, country)}
                            draggable={true}
                            key={index}
                        >
                            <CountryCard
                                path={() => countryName(country.name)}
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