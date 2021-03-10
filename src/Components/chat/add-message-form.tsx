import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../../redux/chat-reducer'
import { getWSStatus } from '../../redux/chat-selectors'

export type AddMessageFormPropsType = {}

export const AddMessageForm: React.FC<AddMessageFormPropsType> = () => {
  const [newMessageText, setNewMessageText] = useState('')

  const isWSReady = useSelector(getWSStatus)

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
          value={newMessageText} />
      </div>
      <div>
        <button disabled={!isWSReady} onClick={sendMessageHandler}>send</button>
      </div>
    </div>
  )
}
