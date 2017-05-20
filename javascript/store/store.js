// Redux setup is /containers = use redux & app logic + html, /components = just render html
// Reducers and actions for each section of the store live in the same file,
// e.g. auth.js holds actions around auth, then reducers for state.auth

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import cart from 'cart'

export default createStore(
  combineReducers({ cart }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
)
