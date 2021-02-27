import React from 'react'
import { InjectedFormProps, reduxForm } from "redux-form"
import { createField, Textarea } from "../common/formControls/FormsControls"
import { maxLenghtCreator, required } from '../../utils/validators/validators'
import { FormValuesType } from './Dialogs'

const maxLenght50 = maxLenghtCreator(50)

type AddMessageFormPropsType = {
  onSubmit: (formDatф: FormValuesType) => void
}

const AddMessageForm: React.FC<InjectedFormProps<FormValuesType, AddMessageFormPropsType> & AddMessageFormPropsType> = (props) => {
  return (
    <div className="enterText">
      <form onSubmit={props.handleSubmit}>
        {createField<NewMessageBodyFormValuesKeysType>('Enter your message', 'newMessageBody', [required, maxLenght50], Textarea, 'text')}
        <button>Send</button>
      </form>
    </div>
  )
}

const AddMessageFormRedux = reduxForm<FormValuesType, AddMessageFormPropsType>({form: 'dialogs-add-message-form'})(AddMessageForm)

export default AddMessageFormRedux

type NewMessageBodyFormValuesKeysType = Extract<keyof FormValuesType, string>
