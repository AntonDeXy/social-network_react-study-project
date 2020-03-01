import { authAPI, sucurityAPI, ResultCodeEnum, ResultCodeForCaptcha } from '../API/Api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'

export type InitialStateType = typeof initialState

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null
}

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
      
    default:
      return state
  }
}

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: SetAuthUserDataActionPayloadType
}

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType =>
  ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })


type getCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType =>
({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })



// thunk
export const getUserInfo = () => {
  return async (dispatch: any) => {
    let meData = await authAPI.getUserInfo()
    if (meData.resultCode === ResultCodeEnum.Success) {
      let { id, email, login } = meData.data
      dispatch(setUserData(id, email, login, true))
    }
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  let data = await authAPI.login(email, password, rememberMe, captcha )
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(getUserInfo())
  } else {
    if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl())
    }
    let message = data.messages.length > 0 ? data.messages[0] : "Some error"
    dispatch(stopSubmit('login', { _error: message }))

  }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await sucurityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url;
  
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export default authReducer
