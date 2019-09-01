import { createStore, combineReducers, applyMiddleware } from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducer from './usersReduces'
import authReducer from './authReducer'
import thunkMiddleware from "redux-thunk"
import appReducer from './appReducer';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  usersReducer: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store