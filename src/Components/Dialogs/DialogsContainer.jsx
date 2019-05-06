import React from 'react'
import { sendMessageText, updateNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  return <StoreContext.Consumer>
    { store => {

      let state = store.getState()

      let sendMessage = () => {
        store.dispatch(sendMessageText())
      }

      let onMessageChange = (newMessage) => {
        store.dispatch(updateNewMessageText(newMessage))
      }
        return(
          <Dialogs
            updateNewMessage={onMessageChange}
            sendMessageText={sendMessage}
            dialogsPage={state.dialogsReducer}
          />
        )
      }}
  </StoreContext.Consumer>
}

export default DialogsContainer