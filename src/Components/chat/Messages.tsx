import React from 'react'
import { useSelector } from 'react-redux';
import { Message } from './chat'
import { getMessages } from '../../redux/chat-selectors'

type MessagesPropsType = {
}

export const Messages: React.FC<MessagesPropsType> = () => {
  const messages = useSelector(getMessages)

  return (
    <div style={{ height: '500px', overflowY: 'auto' }}>
      {messages.map((message, index) => <Message key={index} message={message} />)}
    </div>
  );
};
