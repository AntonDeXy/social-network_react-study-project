let state = {
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
  },
}

export default state