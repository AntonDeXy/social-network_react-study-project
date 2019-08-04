import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY':'07c3174e-9e42-4cb5-b816-db6738dd581d'
  }
})

export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
  }
} 

export const profileAPI = {
  getProfile(userId = 2){
    return instance.get(`profile/` + userId)  
    .then(response => response.data)
  }
}
