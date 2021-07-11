import { GET_COUNTRIES, DISPLAY_COUNTRIES, PINNED, UNPIN } from './actions';

const initialState  = {
    countries: [],
    displayedCountries: [],
    pinnedCountries: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES: {
            return {
                ...state, 
                countries: action.payload
            }
        }
        case DISPLAY_COUNTRIES: {
            return {
                ...state,
                displayedCountries: action.payload
            }
        }
        case PINNED: {
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
        default: return state
    }
}