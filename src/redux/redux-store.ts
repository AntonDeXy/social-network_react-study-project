import { createStore, combineReducers, applyMiddleware } from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from "redux-thunk"
import appReducer from './appReducer'
import { reducer as formReducer } from 'redux-form'
import { compose } from 'redux'

let rootReducer = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  usersReducer: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any} > = ReturnType<PropertiesTypes<T>>

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
 
// @ts-ignore
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store