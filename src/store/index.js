import { compose,createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import { createLogger} from 'redux-logger'
import thunk from 'redux-thunk';


export const store = createStore(rootReducer, compose (
        applyMiddleware(createLogger(), thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
)