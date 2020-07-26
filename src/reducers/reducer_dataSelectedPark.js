import { fromJS } from 'immutable'
import { PURGE } from 'redux-persist'
import { initialState } from './index'
import actionsType from '../actions/actionsType'

const immutableParkSelected = (state, action) => fromJS(state).setIn(['data'], action.payload).toJS()

const reducer_dataSelectedPark = (state = initialState.dataSelectedPark, action) => {
  switch (action.type) {
    case actionsType.GET_DATA_SELECTED_PARK:
      return immutableParkSelected(state, action)
    case PURGE:
      return initialState.dataSelectedPark
    default:
      return state
  }
}

export default reducer_dataSelectedPark
