export type InitialStateType = typeof initialState

const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogType = {
  id: number,
  name: string
}

type MessageType = {
  message: string
}

let initialState = {
  messages: [
    { message: 'Hi' },
    { message: 'How are u?' },
    { message: 'Yoooo' },
  ] as Array<MessageType>,
  dialogs: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Vlad' },
  ] as Array<DialogType>,
  newMessageText: 'Enter message'
}

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:{
      let newMessage = {
        id: 6,
        message: state.newMessageText
      }
      let stateCopy = {...state}
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push(newMessage)
      stateCopy.newMessageText = ''
      return stateCopy
    }
    case UPDATE_MESSAGE_TEXT:{
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
    type: SEND_MESSAGE
  }
}

type sendMessageCreatorActionType = {
  type: typeof UPDATE_MESSAGE_TEXT
  newMessage: string
}

export const updateNewMessageText = (newMessage: string): sendMessageCreatorActionType => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    newMessage: newMessage
  }
}

export default dialogsReducer