import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ChatMessageType } from '../../API/chat-api'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chat-reducer'
import { Messages } from './Messages'

const Chat = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startMessagesListening())
    return () => {
      dispatch(stopMessagesListening())
    }
  }, [dispatch])

  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  )
}

type MessagePropsType = {
  message: ChatMessageType
}

export const Message: React.FC<MessagePropsType> = ({ message }) => {
  return (
    <div>
      <img style={{ width: '30px' }} src={message.photo} alt="" />
      <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  )
}

type AddMessageFormPropsType = {
}

const AddMessageForm: React.FC<AddMessageFormPropsType> = () => {
  const [newMessageText, setNewMessageText] = useState('')

  const dispatch = useDispatch()

  const sendMessageHandler = () => {
    if (!newMessageText) {
      return
    }
    dispatch(sendMessage(newMessageText))
    setNewMessageText('')
  }

  return (
    <div>
      <div>
        <textarea
          onChange={e => setNewMessageText(e.currentTarget.value)}
          value={newMessageText}
        />
      </div>
      <div>
        <button disabled={false} onClick={sendMessageHandler}>send</button>
      </div>
    </div>
  )
}

export default Chat