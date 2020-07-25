import { store } from '../store'
import actionsType from './actionsType'

export const testAction = (bool) => {
    store.dispatch({ type: actionsType.GET_TEST, payload: bool })
}