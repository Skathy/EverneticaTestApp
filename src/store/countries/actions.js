const allAlphaCodesURL = `https://restcountries.eu/rest/v2/all?fields=name;callingCodes;flag`


export const GET_COUNTRIES = 'GET_COUNTRIES'
export function getCountries() {
    return async dispatch => {
        const response = await fetch(allAlphaCodesURL)
        const json = await response.json() 
        dispatch({type: GET_COUNTRIES, payload: json})
    }
}

export const DISPLAY_COUNTRIES =  'DISPLAY_COUNTRIES'
export function displayCountries(payload) {
    return {
        type: DISPLAY_COUNTRIES,
        payload
    }
}

export const PINNED = 'PINNED'
export function pinned(payload) {
    return {
        type: PINNED,
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