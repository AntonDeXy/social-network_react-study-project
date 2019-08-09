import React from 'react'
import DialogItem from './DialogItem'
import Message from './Message'
import {Redirect} from 'react-router-dom'

const Dialogs = props => {
  let state = props.dialogsPage

  let sendMessage = () => {
    props.sendMessageText()
  }

  let onMessageChange = () => {
    let newMessage = messageRef.current.value
    props.updateNewMessageText(newMessage)
  }

  let messageRef = React.createRef()

  if(!props.isAuth) return <Redirect to={'/login'}/>

  return(
    <div className="dialogs">
      {/* Dialogs */}
      <div className="dialogs-items">
        {state.dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className="messages">
        {state.messages.map ( message => <Message message={message}/>)}
        <div className="enterText">
          <textarea ref={messageRef} onChange={onMessageChange} value={state.newMessageText} ></textarea>
          <button onClick={sendMessage}>Send message</button>      
        </div>
      </div>
    </div>
  )
}

export default Dialogs