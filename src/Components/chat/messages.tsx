import React, { UIEvent, useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getMessages } from '../../redux/chat-selectors'
import { Message } from './message'

type MessagesPropsType = {}

export const Messages: React.FC<MessagesPropsType> = () => {
  const messages = useSelector(getMessages)
  const [isAutoScroll, setIsAutoScrollActive] = useState(true)

  const messagesAnchorRef = useRef<HTMLDivElement>(null)

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget
    if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
      setIsAutoScrollActive(true)
    } else {
      setIsAutoScrollActive(false)
    }
  }

  useEffect(() => {
    isAutoScroll && messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [isAutoScroll, messages])

  return (
    <div
      onScroll={scrollHandler}
      style={{ height: '500px', overflowY: 'auto' }}>
      {messages.map(message => <Message key={message.id} message={message} />)}
      <div ref={messagesAnchorRef} ></div>
    </div>
  )
}
