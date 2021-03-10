import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startMessagesListening, stopMessagesListening } from '../../redux/chat-reducer'
import { AddMessageForm } from './add-message-form'
import { Messages } from './messages'

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

export default Chat