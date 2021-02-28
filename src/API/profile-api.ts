import { PhotosType, ProfileType } from "../types/types"
import { instance, APIResponseType } from "./Api"

type SavePhotiResponseDataType = {
  photos: PhotosType
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId)
      .then(res => {
        return res.data
      })
  },
  getStatus(userId = 2) {
    return instance.get<string>(`profile/status/` + userId)
      .then(res => res.data)
  },
  updateStatus(status: string) {
    return instance.put<APIResponseType>('profile/status/', { status: status })
      .then(res => res.data)
  },
  savePhoto(photoFile: File) {
    const formData = new FormData()
    formData.append("image", photoFile)

    return instance.put<APIResponseType<SavePhotiResponseDataType>>('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => res.data)
  },
  saveProfile(profile: ProfileType) {
    return instance.put<APIResponseType>('profile', profile)
    .then(res => res.data)
  }
}
