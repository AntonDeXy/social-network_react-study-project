import React from 'react'

import DialogItem from './DialogItem'
import Message from './Message'
import AddMessageFormRedux from './add-message-form'
import { InitialStateType } from '../../redux/dialogsReducer'

type OwnPropsType = {
  dialogsPage: InitialStateType
  sendMessage: (messageText: string) => void
}

export type FormValuesType = {
  newMessageBody: string
}

const Dialogs: React.FC<OwnPropsType> = ({ dialogsPage, sendMessage }) => {
  const onSubmit = (formData: FormValuesType) => {
    sendMessage(formData.newMessageBody)
  }

  return (
    <div className="dialogs">
      <div className="dialogs-items">
        {dialogsPage.dialogs.map(dialog => (
          <DialogItem name={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className="messages">
        {dialogsPage.messages.map(message => (
          <Message message={message} />
        ))}
        <AddMessageFormRedux onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Dialogs