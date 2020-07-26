import { combineReducers } from 'redux'
import reducer_nav from './reducer_nav'

export const initialState = {
  nav: {
    nav: {}
  }
}

export const rootReducers = combineReducers({
  nav: reducer_nav
})
