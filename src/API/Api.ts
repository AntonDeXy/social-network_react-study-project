import axios from 'axios'
import { ProfileType } from '../types/types'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '07c3174e-9e42-4cb5-b816-db6738dd581d'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  }
}

export const profileAPI = {
  getProfile(userId: number): any {
    return instance.get(`profile/` + userId)
      .then(response => response.data)
  },
  getStatus(userId = 2) {
    return instance.get(`profile/status/` + userId)
      .then(response => response.data)
  },
  updateStatus(status: string): any {
    return instance.put('profile/status/', { status: status })
  },
  savePhoto(photoFile: any): any {
    const formData = new FormData()
    formData.append("image", photoFile)

    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile: ProfileType): any {
    return instance.put('profile', profile)
  }
}

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}

type MeResponseType = {
  data: {id: number, email: string, login: string}
  resultCode: ResultCodeEnum
  messages: Array<string>
}

type LoginResponseType = {
  data: {userId: number}
  resultCode: ResultCodeEnum | ResultCodeForCaptcha
  messages: Array<string>
}

export const authAPI = {
  getUserInfo() {
    return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data)
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

export const sucurityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  }
}