import React from 'react'
import { sendMessageText, updateNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsReducer
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    updateNewMessage: (newMessage) => {
      dispatch(updateNewMessageText(newMessage))
    },
    sendMessageText: () => {
      dispatch(sendMessageText())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer