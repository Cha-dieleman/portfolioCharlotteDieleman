import { createStore } from 'redux'
import { rootReducers } from './reducers/index'

export const store = createStore( rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// function todos(state = [], action) {
//   switch (action.type) {
//   case 'ADD_TODO':
//   return state.concat([action.text])
//   default:
//   return state
//   }
//  }
//  export const store = createStore(todos, ['Use Redux'])
//  store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs'
//  })
//  console.log(store.getState())