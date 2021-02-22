import axios from 'axios'
import { UserType } from '../types/types'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '07c3174e-9e42-4cb5-b816-db6738dd581d'
  }
})

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}


export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D
  messages: Array<String>
  resultCode: RC
}
