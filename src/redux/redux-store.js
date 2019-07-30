import { createStore, combineReducers } from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducer from './usersReduces'

let reducers = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  usersReducer: usersReducer,
})

let store = createStore(reducers)

window.store = store

export default store