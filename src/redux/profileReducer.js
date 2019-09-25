import { profileAPI } from '../API/Api'
import { stopSubmit } from 'redux-form';
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
  ],
  friends: [
    { id: 1, name: "Dima", img: 'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg' },
    { id: 2, name: "Vlad", img: 'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg' },
    { id: 3, name: "Sasha", img: 'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg' },
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
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
      return { ...state, profile: {...state.profile, photos: action.photos} }
    }
    default:
      return state
  }
}

export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

// thunk
export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.responseCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file) => async (dispatch) => {
  let data = await profileAPI.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.photos))
  } 
}

export const saveProfile = (profile) => async (dispatch, getState) => {
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
