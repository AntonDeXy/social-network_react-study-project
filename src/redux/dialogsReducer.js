let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND-MESSAGE':{
      let newMessage = {
        id: 6,
        message: state.newMessageText,
      }
      let stateCopy = {...state}
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push(newMessage)
      stateCopy.newMessageText = ''
      return stateCopy
    }
    case 'UPDATE-MESSAGE-TEXT':{
      let stateCopy = {...state}
      stateCopy.newMessageText = action.newMessage
      return stateCopy
    }
    default:
      return state
  }
}

export const sendMessageText = () => {
  return {
    type: 'SEND-MESSAGE'
  }
}

export const updateNewMessageText = (newMessage) => {
  return {
    type: 'UPDATE-MESSAGE-TEXT',
    newMessage: newMessage
  }
}

export default dialogsReducer