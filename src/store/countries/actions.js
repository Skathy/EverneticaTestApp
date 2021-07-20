import { v4 as uuid } from 'uuid';


export const GET_DETAILS = 'GET_DETAILS'
export const getDetails = (name) => {
    return async dispatch => {
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${name}`)
        const json = await response.json()
        dispatch({type: GET_DETAILS, payload: json})
    }
}

export const GET_COUNTRIES = 'GET_COUNTRIES'
export function getCountries(name) {
    return async dispatch => {
        try {
            const response = await fetch(name ? `https://restcountries.eu/rest/v2/name/${name}?fields=name;callingCodes;alpha3Code;languages;population;currencies;flag` : null)
            const json = await response.json()
            if (json.status) {
                console.error('Err:', json.status)
            } else {
                dispatch({type: SHOW_DISPLAYED_COUNTRIES, payload: json.map((country, index) => Object.assign(country, {isPinned: false, id: uuid(), order: index}))})
            }
        } catch (e) {
            console.error('Err', e)
        } 
    }
}

export const GET_PINNED = 'GET_PINNED'
export function getPinned(params) {
    return async dispatch => {
        try {
            const response = await fetch(params ? `https://restcountries.eu/rest/v2/alpha?codes=${params}` : null)
            const json = await response.json()
            if (json.status) {
                console.error('Err:', json.status)
            } else {
                dispatch({type: GET_PINNED, payload: json?.map((country, index) => Object.assign(country, {isPinned: true, id: uuid(), order: index}))})
            }
        } catch (e) {
            console.error('Err', e)
        }
    }
}

export const SHOW_DISPLAYED_COUNTRIES =  'SHOW_DISPLAYED_COUNTRIES'
export function showDisplayedCountries(payload) {
    return {
        type: SHOW_DISPLAYED_COUNTRIES,
        payload
    }
}

export const PIN = 'PIN'
export function pin(payload) {
    return {
        type: PIN,
        payload
    }
}

export const UNPIN = 'UNPIN'
export function unpin(payload) {
    return {
        type: UNPIN,
        payload
    }
}

export const DELETE_DISPLAY_ITEM = 'DELETE_DISPLAY_ITEM'
export function deleteFromDisplay(payload) {
    return {
        type: DELETE_DISPLAY_ITEM,
        payload
    }
}
export const DELETE_PINNED_ITEM = 'DELETE_PINNED_ITEM'
export function deleteFromPinned(payload) {
    return {
        type: DELETE_PINNED_ITEM,
        payload
    }
}