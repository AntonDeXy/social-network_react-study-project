import { ResultCodeEnum, ResultCodeForCaptchaEnum } from '../API/Api'
import { FormAction, stopSubmit } from 'redux-form'
import { securityAPI } from '../API/security-api'
import { authAPI } from '../API/auth-api'
import { BaseThunkType, InferActionsTypes } from './redux-store'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null
}


const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/auth/SET_USER_DATA':
    case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload
      }
      
    default:
      return state
  }
}


export const actions = {
  setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({ 
    type: 'SN/auth/SET_USER_DATA', payload: { userId, email, login, isAuth } 
  } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', payload: { captchaUrl } 
  } as const)
}

// thunk
export const getUserInfo = (): ThunkType => {
  return async (dispatch) => {
    let meData = await authAPI.getUserInfo()
    if (meData.resultCode === ResultCodeEnum.Success) {
      let { id, email, login } = meData.data
      dispatch(actions.setUserData(id, email, login, true))
    }
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string):ThunkType => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe, captcha )
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(getUserInfo())
  } else {
    if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl())
    } 
    const message = data.messages.length > 0 ? data.messages[0] : "Some error"
    dispatch(stopSubmit('login', { _error: message }))
  }
}
export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = ():ThunkType => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(actions.setUserData(null, null, null, false))
  }
}

export default authReducer

// types
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>