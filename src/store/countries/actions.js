const allCountries = `https://restcountries.eu/rest/v2/all?fields=name;callingCodes;flag;languages;population;currencies`

// const countryName = sessionStorage.getItem('CountryDetails').split(' ')[0].toLowerCase()

// console.log(countryName.split(' ').toLowerCase()[0])
const countryURL = `https://restcountries.eu/rest/v2/name/ukraine?fields=name;callingCodes;flag;languages:name;population;currencies`


export const GET_COUNTRY = 'GET_COUNTRY'
export function getCountry() {
    return async dispatch => {
        const response = await fetch(countryURL)
        const json = await response.json()
        dispatch({type: GET_COUNTRY, payload: json})
    }
}

export const GET_COUNTRIES = 'GET_COUNTRIES'
export function getCountries() {
    return async dispatch => {
        const response = await fetch(allCountries)
        const json = await response.json() 
        dispatch({type: GET_COUNTRIES, payload: json})
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

export const DELETE_FROM_DISPLAY = 'DELETE_FROM_DISPLAY'
export function deleteFromDisplay(payload) {
    return {
        type: DELETE_FROM_DISPLAY,
        payload
    }
}
export const DELETE_FROM_PINNED = 'DELETE_FROM_PINNED'
export function deleteFromPinned(payload) {
    return {
        type: DELETE_FROM_PINNED,
        payload
    }
}