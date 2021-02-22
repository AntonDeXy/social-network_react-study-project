import { instance, APIResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum } from "./Api"

type MeResponseDataType = {
  id: number
  email: string
  login: string
}

type LoginResponseDataType = {
  userId: number
}

export const authAPI = {
  getUserInfo() {
    return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<APIResponseType<LoginResponseDataType, ResultCodeForCaptchaEnum | ResultCodeEnum>>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data)
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}
