import { GET_COUNTRIES, SHOW_DISPLAYED_COUNTRIES, PIN, UNPIN, DELETE_DISPLAY_ITEM, DELETE_PINNED_ITEM, GET_PINNED, GET_DETAILS } from './actions';

const initialState  = {
    countries: [],
    displayedCountries: [],
    pinnedCountries: [],
    countryDetails: [],
    details: []
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
        case DELETE_DISPLAY_ITEM: {
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
        case GET_PINNED: {
            return {
                ...state,
                pinnedCountries: action.payload
            }
        }
        case UNPIN: {
            return {
                ...state,
                pinnedCountries: action.payload
            }
        }
        case DELETE_PINNED_ITEM: {
            return {
                ...state,
                pinnedCountries: action.payload
            }
        }
        case GET_DETAILS: {
            return {
                ...state, 
                details: [action.payload]
            }
        }
        default: return state
    }
}