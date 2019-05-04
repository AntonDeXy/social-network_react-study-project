import React from 'react'
import {NavLink, Router} from 'react-router-dom'
import DialogItem from './DialogItem'
import Message from './Message'

const Dialogs = props => {
  

  const sendMessage = () => {
    props.newMessageText()
  }

  const onMessageChange = () => {
    let text = messageRef.current.value
    props.updateMessageText(text)
  }

  let messageRef = React.createRef()

  return(
    <div className="dialogs">
      {/* Dialogs */}
      <div className="dialogs-items">
        {props.dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className="messages">
        {props.messages.map ( message => <Message message={message}/>)}
        <div className="enterText">
          <textarea ref={messageRef} onChange={onMessageChange} value={props.messageValue} ></textarea>
          <button onClick={sendMessage}>Send message</button>      
        </div>
      </div>
    </div>
  )
}

export default Dialogs