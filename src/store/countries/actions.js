const allAlphaCodesURL = `https://restcountries.eu/rest/v2/all?fields=name;callingCodes;flag`


export const GET_COUNTRIES = 'GET_COUNTRIES'
export function getCountries() {
    return async dispatch => {
        const response = await fetch(allAlphaCodesURL)
        const json = await response.json() 
        dispatch({type: GET_COUNTRIES, payload: json})
    }
} 