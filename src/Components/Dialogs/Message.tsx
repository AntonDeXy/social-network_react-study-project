import React from 'react'
import { MessageType } from '../../redux/dialogsReducer'

type MessagePropsType = {
  message: MessageType
}

const Message:React.FC<MessagePropsType> = ({message}) => {
  return(
    <div className="message">{message.message}</div>
  )
}

export default Message