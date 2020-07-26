import { store } from '../store'
import actionsType from './actionsType'

export const setNav = (value) => {
    store.dispatch({ type: actionsType.GET_NAV, payload: value })
}

export const getSelectedPark = (value) => {
    store.dispatch({ type: actionsType.GET_SELECTED_PARK, payload: value })
}