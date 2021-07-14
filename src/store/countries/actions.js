const allCountries = `https://restcountries.eu/rest/v2/all?fields=name;callingCodes;flag;languages;population;currencies`

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

export const GET_PINNED = 'GET_PINNED'
export function getPinned(payload) {
    return {
        type: GET_PINNED,
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