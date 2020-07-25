import { fromJS } from 'immutable'
import { PURGE } from 'redux-persist'
import { initialState } from './index'
import actionsType from '../actions/actionsType'

const immutableTest = (state, action) => fromJS(state).setIn(['display'], action.payload).toJS()

const reducer_test = (state = initialState.test, action) => {
  switch (action.type) {
    case actionsType.GET_TEST:
      return immutableTest(state, action)
    case PURGE:
      return initialState.test
    default:
      return state
  }
}

export default reducer_test
