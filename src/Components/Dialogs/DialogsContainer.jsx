import React from 'react'
import DialogItem from './DialogItem'
import Message from './Message'
import { sendMessageText, updateNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
  let state = props.store.getState()

  let sendMessage = () => {
    props.store.dispatch( sendMessageText() )
  }

  let onMessageChange = (newMessage) => {
    props.store.dispatch (updateNewMessageText(newMessage))
  }
  debugger
  return(
    <Dialogs
    updateNewMessage = {onMessageChange}
    sendMessageText = {sendMessage}
    dialogsPage = { state.dialogsReducer }
    />
  )
}

export default DialogsContainer