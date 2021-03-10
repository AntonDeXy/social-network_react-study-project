import React from 'react';
import { ChatMessageType } from '../../redux/chat-reducer'

type MessagePropsType = {
  message: ChatMessageType
}

export const Message: React.FC<MessagePropsType> = React.memo(({ message }) => {
  return (
    <div>
      <img style={{ width: '30px' }} src={message.photo} alt="" />
      <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  )
})
