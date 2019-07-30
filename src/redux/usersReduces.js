const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    // { id: 1, photoUrl: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/b/b/bbc42ecec20ed2c885ab70204c37d2e7.jpg',followed: false, FullName: 'Dmitry', status: 'I`m a boss', location: {city: 'Minsk', country: 'Belarus'} },
    // { id: 2, photoUrl: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/b/b/bbc42ecec20ed2c885ab70204c37d2e7.jpg', followed: true, FullName: 'Sasha', status: 'I`m a boss too', location: {city: 'Moscow', country: 'Russian'} },
    // { id: 3, photoUrl:'https://i.citrus.ua/imgcache/size_800/uploads/shop/b/b/bbc42ecec20ed2c885ab70204c37d2e7.jpg', followed: false, FullName: 'Andrew', status: 'I`m a boss too', location: {city: 'Kyiv', country: 'Ukraine'} },
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: state.users.map ( u => {
          if(u.id === action.userId){
            return {...u, followed: true}
          }
          return u
        })
      }

    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map ( u => {
          if(u.id === action.userId){
            return {...u, followed: false }
          }
          return u
        })
      }

    case SET_USERS: {
      return{ ...state, users: [...state.users, ...action.users] }
    }
    default:
      return state
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer
