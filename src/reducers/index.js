import { combineReducers } from 'redux'
import reducer_test from './reducer_test'

export const initialState = {
  test: {
    display: false
  }
}

export const rootReducers = combineReducers({
  test: reducer_test
})
