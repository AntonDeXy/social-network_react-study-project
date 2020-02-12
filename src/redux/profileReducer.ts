import { profileAPI } from '../API/Api'
import { stopSubmit } from 'redux-form';
import { PostType, ProfileType, PhotosType } from '../types/types';
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likes: 121 },
    { id: 2, message: "Yooooo", likes: 282 },
    { id: 3, message: "It`s my first post", likes: 212 },
  ] as Array<PostType>,
  friends: [
    { id: 1, name: "Dima", img: 'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg' },
    { id: 2, name: "Vlad", img: 'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg' },
    { id: 3, name: "Sasha", img: 'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg' },
  ],
  profile: null as ProfileType | null,
  status: "",
  newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      debugger
      let newPost = {
        id: 4,
        message: action.newPostText,
        likes: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    case DELETE_POST: {
      return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: {...state.profile, photos: action.photos} as ProfileType }
    }
    default:
      return state
  }
}

type AddPostType = {
  type: typeof ADD_POST
  newPostText: string
}

type deletePostType = {
  type: typeof DELETE_POST
  postId: number
}

type updateNewPostTextType = {
  type: typeof UPDATE_NEW_POST_TEXT
  newText: string
}

type setUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

type setStatusType = {
  type: typeof SET_STATUS
  status: string
}

type savePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}

export const deletePost = (postId: number): deletePostType => ({ type: DELETE_POST, postId })
export const addPost = (newPostText: string): AddPostType => ({ type: ADD_POST, newPostText })
export const updateNewPostText = (text: string): updateNewPostTextType => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile: ProfileType): setUserProfileType => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos:PhotosType): savePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos })

// thunk

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  let data = await profileAPI.updateStatus(status)
  if (data.responseCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  let data = await profileAPI.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.photos))
  } 
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId
  const data = await profileAPI.saveProfile(profile)
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit("edit-profile", {_error: data.data.messages[0]}))
    return Promise.reject(data.data.messages[0])
  }
}


export default profileReducer
