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
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} })

// thunk
export const getUserInfo = () => {
  return (dispatch)  => {
    authAPI.getUserInfo()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setUserData(id, email, login))
      }
    })
  }
}

export default authReducer