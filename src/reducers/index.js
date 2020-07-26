import { combineReducers } from 'redux'
import reducer_nav from './reducer_nav'
import reducer_selectedPark from './reducer_selectedPark'
import reducer_dataSelectedPark from './reducer_dataSelectedPark'

export const initialState = {
  nav: {
    nav: {}
  },
  selectedPark: {
    name: null
  },
  dataSelectedPark: {
    data: null
  }
}

export const rootReducers = combineReducers({
  nav: reducer_nav,
  selectedPark: reducer_selectedPark,
  dataSelectedPark: reducer_dataSelectedPark
})
