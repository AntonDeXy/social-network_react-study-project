import { AppStateType } from "./redux-store"

export const getMessages = (state: AppStateType) => {
  return state.chat.messages
}

export const getWSStatus = (state: AppStateType) => {
  return state.chat.isWSConnected
}