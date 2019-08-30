import React from 'react'
import DialogItem from './DialogItem'
import Message from './Message'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../common/formControls/FormsControls';
import { required, maxLenghtCreator } from '../../utils/validators/validators';

const maxLenght50 = maxLenghtCreator(50)

const AddMessageForm = (props) => {
  return (
    <div className="enterText">
      <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} placeholder="Enter" name="newMessageBody"
        validate={[required, maxLenght50]} />
        <button>Send</button>
      </form>
    </div>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogs=add-message-form'})(AddMessageForm)


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

  if (!props.isAuth) return <Redirect to={'/login'} />

  return (
    <div className="dialogs">
      {/* Dialogs */}
      <div className="dialogs-items">
        {state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className="messages">
        {state.messages.map(message => <Message message={message} />)}
        <AddMessageFormRedux onSubmit={sendMessage}/>
      </div>
    </div>
  )
}


export default Dialogs