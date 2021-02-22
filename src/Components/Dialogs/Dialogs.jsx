import React from 'react'
import DialogItem from './DialogItem'
import Message from './Message'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../common/formControls/FormsControls';
import { required, maxLenghtCreator } from '../../utils/validators/validators';

const maxLenght50 = maxLenghtCreator(50)

const AddMessageForm = ({handleSubmit}) => {
  return (
    <div className="enterText">
      <form onSubmit={handleSubmit}>
        <Field component={Textarea} placeholder="Enter" name="newMessageBody"
        validate={[required, maxLenght50]} />
        <button>Send</button>
      </form>
    </div>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogs-add-message-form'})(AddMessageForm)

const Dialogs = ({dialogsPage, sendMessage, isAuth}) => {
  if (!isAuth) return <Redirect to={'/login'} />

  const onSubmit = (formData: any) => {
    sendMessage(formData.newMessageBody)
  }

  return (
    <div className="dialogs">
      <div className="dialogs-items">
        {dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className="messages">
        {dialogsPage.messages.map(message => <Message message={message} />)}
        <AddMessageFormRedux onSubmit={onSubmit}/>
      </div>
    </div>
  )
}


export default Dialogs