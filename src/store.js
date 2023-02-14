import { createStore } from 'redux'
import rootReducer from './reducers'

const defaultState = {
  isLogged: false,
  users: [],
  trails: [],
  selectedUser: {},
  selectedTrail: {}
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store