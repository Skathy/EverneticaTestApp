import { GET_COUNTRIES, SHOW_DISPLAYED_COUNTRIES, PIN, UNPIN, DELETE_FROM_DISPLAY, DELETE_FROM_PINNED, GET_COUNTRY } from './actions';

const initialState  = {
    countries: [],
    displayedCountries: [],
    pinnedCountries: [],
    countryDetails: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES: {
            return {
                ...state, 
                countries: action.payload
            }
        }
        case SHOW_DISPLAYED_COUNTRIES: {
            return {
                ...state,
                displayedCountries: action.payload
            }
        }
        case DELETE_FROM_DISPLAY: {
            return {
                ...state,
                displayedCountries: action.payload
            }
        }
        case PIN: {
            return {
                ...state,
                pinnedCountries: [...state.pinnedCountries, action.payload]
            }
        }
        case UNPIN: {
            return {
                ...state,
                pinnedCountries: action.payload
            }
        }
        case DELETE_FROM_PINNED: {
            return {
                ...state,
                pinnedCountries: action.payload
            }
        }
        case GET_COUNTRY: {
            return {
                ...state,
                countryDetails: action.payload
            }
        }
        default: return state
    }
}