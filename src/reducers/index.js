import { combineReducers } from 'redux'
import reducer_nav from './reducer_nav'
import reducer_selectedPark from './reducer_selectedPark'

export const initialState = {
  nav: {
    nav: {},
  },
  selectedPark: {
    name: null
  }
}

export const rootReducers = combineReducers({
  nav: reducer_nav,
  selectedPark: reducer_selectedPark
})
