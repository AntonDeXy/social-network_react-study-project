import React from 'react'
import { reduxForm } from 'redux-form'
import { required, maxLenghtCreator } from '../../utils/validators/validators'
import { createField, GetStringKeys, Textarea } from '../common/formControls/FormsControls'
import { InjectedFormProps } from 'redux-form';

const maxLenght10 = maxLenghtCreator(10)

type AddNewPostFormPropsType = {
  onSubmit: (formData: AddPostFormValuesType) => void
}

export type AddPostFormValuesType = {
  newPostText: string
}

type AddPostFormValuesKeysType = GetStringKeys<AddPostFormValuesType>

const AddNewPostForm:React.FC<InjectedFormProps<AddPostFormValuesType, AddNewPostFormPropsType> & AddNewPostFormPropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField<AddPostFormValuesKeysType>('Post message', 'newPostText', [required, maxLenght10], Textarea, 'text')}
      <button>Add post</button>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm<AddPostFormValuesType, AddNewPostFormPropsType>({
  form: "Profile"
})(AddNewPostForm)


export default AddNewPostFormRedux