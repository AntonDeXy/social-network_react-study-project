import { FormAction, stopSubmit } from 'redux-form'
import { profileAPI } from '../API/profile-api'
import { PostType, ProfileType, PhotosType } from '../types/types'
import { BaseThunkType, InferActionsTypes } from './redux-store'

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likes: 121 },
    { id: 2, message: "Yooooo", likes: 282 },
    { id: 3, message: "It`s my first post", likes: 212 },
  ] as Array<PostType>,
  friends: [
    { id: 1, name: "Dima", img: 'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg' },
    { id: 2, name: "Vlad", img: 'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg' },
    { id: 3, name: "Sasha", img: 'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg' },
  ] as Array<FriendsType>,
  profile: null as ProfileType | null,
  status: "",
}

export type FriendsType = {
  id: number
  name: string
  img: string
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/profile/ADD_POST': {
      const newPost = {
        id: state.posts.length,
        message: action.newPostText,
        likes: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case 'SN/profile/SET_USER_PROFILE': {
      return { ...state, profile: action.profile }
    }
    case 'SN/profile/SET_STATUS': {
      return { ...state, status: action.status }
    }
    case 'SN/profile/DELETE_POST': {
      return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
    }
    case 'SN/profile/SAVE_PHOTO_SUCCESS': {
      return { ...state, profile: {...state.profile, photos: action.photos} as ProfileType }
    }
    default:
      return state
  }
}

export const actions = {
  deletePost: (postId: number) => ({ type: 'SN/profile/DELETE_POST', postId } as const),
  addPost: (newPostText: string) => ({ type: 'SN/profile/ADD_POST', newPostText } as const),
  updateNewPostText: (text: string) => ({ type: 'SN/profile/UPDATE_NEW_POST_TEXT', newText: text } as const),
  setUserProfile: (profile: ProfileType) => ({ type: 'SN/profile/SET_USER_PROFILE', profile } as const),
  setStatus: (status: string) => ({ type: 'SN/profile/SET_STATUS', status } as const),
  savePhotoSuccess: (photos:PhotosType) => ({ type: 'SN/profile/SAVE_PHOTO_SUCCESS', photos } as const)
}

export const getUserProfile = (userId: number):ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(actions.setUserProfile(data))
}

export const getStatus = (userId: number):ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string):ThunkType => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(actions.setStatus(status))
  }
}

export const savePhoto = (file: File):ThunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos))
  } 
}

export const saveProfile = (profile: ProfileType):ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const data = await profileAPI.saveProfile(profile)
  if (data.resultCode === 0) {
    if (userId !== null) {
      dispatch(getUserProfile(userId))
    } else {
      throw new Error('UserId cant be null')
    }
  } else {
    dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
    return Promise.reject(data.messages[0])
  }
}

export default profileReducer

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>