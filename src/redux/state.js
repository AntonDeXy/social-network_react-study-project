let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", likes: 121 },
        {id: 2, message: "Yooooo", likes: 282 },
        {id: 3, message: "It`s my first post", likes: 212 },
      ],
      friends: [
        {id: 1, name: "Dima", img:'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg'},
        {id: 2, name: "Vlad", img:'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg'},
        {id: 3, name: "Sasha", img:'https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg'},
      ],    
      newPostText: 'Enter text',
    },
    messagesPage: {
      messages: [
        { message: 'Hi' },
        { message: 'How are u?' },
        { message: 'Yoooo' },
      ],
      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Vlad' },
      ],
      newMessageText: 'Enter message'
    },
  },

  getState() {
    return this._state
  },

  _rerenderEntrireTree(){
    console.log('state changed')
  },
  
  addMessage() {
    let newMessage = {
      message: this._state.messagesPage.newMessageText,
    }
    this._state.messagesPage.messages.push(newMessage)
    this._state.messagesPage.newMessageText = ''
    this._rerenderEntrireTree()
  },
  
  updateNewMessageText(newMessage) {
    this._state.messagesPage.newMessageText = (newMessage)
    this._rerenderEntrireTree()
  },
  
  subscribe(observer) {
    this._rerenderEntrireTree = observer
  },
  
  dispatch(action){
    if (action.type === 'ADD-POST'){
      debugger
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._rerenderEntrireTree()
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._rerenderEntrireTree()
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._rerenderEntrireTree()
    }
  }
}


export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
  }
}

window.store = store

export default store