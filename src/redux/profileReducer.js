const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
  newPostText: 'Enter text',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0
      }
      let stateCopy = {...state}

      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT:{
      let stateCopy = {...state}

      stateCopy.newPostText = action.newText
      return stateCopy
    }
    case SET_USER_PROFILE:{
      return {...state, profile: action.profile}
    }
    default:
      return state
  }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT,newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer
