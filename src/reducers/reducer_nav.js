import { fromJS } from 'immutable'
import { PURGE } from 'redux-persist'
import { initialState } from './index'
import actionsType from '../actions/actionsType'

const immutableNav = (state, action) => fromJS(state).setIn(['nav'], action.payload).toJS()

const reducer_nav = (state = initialState.nav, action) => {
  switch (action.type) {
    case actionsType.GET_NAV:
      return immutableNav(state, action)
    case PURGE:
      return initialState.nav
    default:
      return state
  }
}

export default reducer_nav
