import { createStore, combineReducers, applyMiddleware, Action } from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducer from './users-reducer'
import authReducer from './authReducer'
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import appReducer from './appReducer'
import { reducer as formReducer } from 'redux-form'
import { compose } from 'redux'
import chatReducer from "./chat-reducer"

let rootReducer = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  usersReducer: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  chat: chatReducer
})

// type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>



type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store