import { compose,createStore, applyMiddleware } from 'redux';
import { createLogger} from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'


export const store = createStore(rootReducer, compose (
        applyMiddleware(createLogger(), thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
)