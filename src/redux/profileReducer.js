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
}

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'ADD-POST':{
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
    case 'UPDATE-NEW-POST-TEXT':{
      let stateCopy = {...state}

      stateCopy.newPostText = action.newText
      return stateCopy
    }
    default:
      return state
  }
}

export const addPost = () => {
  return {
    type: 'ADD-POST'
  }
}

export const updateNewPostText = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
  }
}

export default profileReducer
