import { createStore, combineReducers, applyMiddleware } from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducer from './usersReduces'
import authReducer from './authReducer'
import thunkMiddleware from "redux-thunk"
import appReducer from './appReducer';
import { reducer as formReducer } from 'redux-form'
import compose from './../Components/SideBarContainer';

let reducers = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  usersReducer: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store