import React from 'react'
import {NavLink, Router} from 'react-router-dom'
import DialogItem from './DialogItem'
import Message from './Message'

const Dialogs = props => {
  return(
    <div className="dialogs">
      {/* Dialogs */}
      <div className="dialogs-items">
        {props.dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className="messages">
        {props.messages.map ( message => <Message message={message}/>)}
      </div>
    </div>
  )
}

export default Dialogs