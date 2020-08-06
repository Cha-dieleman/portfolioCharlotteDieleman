// import { createStore, applyMiddleware, compose } from 'redux'
import { createStore, compose } from 'redux'
import { rootReducers } from './reducers/index'
// import { createLogger } from 'redux-logger'

export const store = createStore(
    rootReducers,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        // applyMiddleware(createLogger())
    )
)