import { authAPI } from '../API/Api';
const SET_USER_DATA = 'SET_USER_DATA'

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
({ type: SET_USER_DATA, payload: { userId, email, login, isAuth} })

// thunk
export const getUserInfo = () => (dispatch) => {
  authAPI.getUserInfo()
    .then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setUserData(id, email, login, true))
      }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getUserInfo())
      }
    })
}

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getUserInfo(null, null, null, false))
      }
    })
}

export default authReducer
