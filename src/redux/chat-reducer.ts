import { FormAction } from 'redux-form'
import { BaseThunkType, InferActionsTypes } from './redux-store'
import { chatAPI, ChatMessageAPIType } from '../API/chat-api'
import { Dispatch } from 'redux'
import { v1 } from 'uuid'

const initialState = {
  messages: [] as ChatMessageType[],
  isWSConnected: false
}

export type ChatMessageType = ChatMessageAPIType & { id: string }

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/chat/MESSAGES_RECEIVED':
      const messages = [
        ...state.messages,
        ...action.payload.messages.map(m => ({ ...m, id: v1() }))
      ]
      return {
        ...state,
        messages: messages.splice(messages.length - 100)
      }
    case 'SN/chat/STATUS_CHANGED':
      return {
        ...state,
        isWSConnected: action.payload.status
      }
    default:
      return state
  }
}

export const actions = {
  messagesReceived: (messages: ChatMessageType[]) => ({
    type: 'SN/chat/MESSAGES_RECEIVED', payload: { messages }
  } as const),
  statusChanged: (status: boolean) => ({
    type: 'SN/chat/STATUS_CHANGED', payload: { status }
  } as const)
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesReceived(messages))
    }
  }

  return _newMessageHandler
}

let _newStatusChangedHandler: ((status: boolean) => void) | null = null

const newStatusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_newStatusChangedHandler === null) {
    _newStatusChangedHandler = (status) => {
      dispatch(actions.statusChanged(status))
    }
  }

  return _newStatusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.startConnection()
  chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.subscribe('status-changed', newStatusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.unsubscribe('status-changed', newStatusChangedHandlerCreator(dispatch))
  chatAPI.stopConnection()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatAPI.sendMessage(message)
}

export default chatReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>