import { authAPI } from '../API/Api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'

let initialState = {
  uderId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export const setUserData = (userId, email, login, isAuth) =>
  ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

// thunk
export const getUserInfo = () => async (dispatch) => {
  let response = await authAPI.getUserInfo()

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data
    dispatch(setUserData(id, email, login, true))
  }

}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getUserInfo())
  } else {
    let message = response.data.messages.lenght > 0 ? response.data.messages[0] : "Some error"
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(getUserInfo(null, null, null, false))
  }
}

export default authReducer
