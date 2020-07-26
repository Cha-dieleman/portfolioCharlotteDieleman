import { fromJS } from 'immutable'
import { PURGE } from 'redux-persist'
import { initialState } from './index'
import actionsType from '../actions/actionsType'

const immutablePark = (state, action) => fromJS(state).setIn(['name'], action.payload).toJS()

const reducer_selectedPark = (state = initialState.selectedPark, action) => {
  switch (action.type) {
    case actionsType.GET_SELECTED_PARK:
      return immutablePark(state, action)
    case PURGE:
      return initialState.selectedPark
    default:
      return state
  }
}

export default reducer_selectedPark
