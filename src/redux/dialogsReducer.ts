import { FormAction, reset } from "redux-form"
import { BaseThunkType, InferActionsTypes } from "./redux-store"

type DialogType = {
  id: number,
  name: string
}

type MessageType = {
  message: string
}

const initialState = {
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
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/dialogs/SEND_MESSAGE':{
      const newMessage = {
        message: action.message
      }
      // let stateCopy = {...state}
      // stateCopy.messages = [...state.messages]
      // stateCopy.messages.push(newMessage)
      // stateCopy.newMessageText = ''
      return {...state, messages: [...state.messages, newMessage]}
    }
    default:
      return state
  }
}

export const actions = {
  sendMessage: (message: string) => ({type: 'SN/dialogs/SEND_MESSAGE', message} as const),
}  

export const sendMessage = (message: string):ThunkType => async (dispatch) => {
  dispatch(actions.sendMessage(message))
  dispatch(reset('dialogs-add-message-form'))
}

export default dialogsReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
