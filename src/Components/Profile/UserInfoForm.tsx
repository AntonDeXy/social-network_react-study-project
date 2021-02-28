import React from 'react'
import { createField, GetStringKeys, Input, Textarea } from '../common/formControls/FormsControls'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { ProfileType } from '../../types/types'

type UserInfoFormPropsType = {
  profile: ProfileType
  onSubmit: (formData: ProfileType) => void
}

export type ProfileTypeKeys = GetStringKeys<ProfileType>

const UserInfoForm:React.FC<InjectedFormProps<ProfileType, UserInfoFormPropsType> & UserInfoFormPropsType> = ({handleSubmit, profile}) => {
  return (
    <form onSubmit={handleSubmit} className="UserInfo">
      <div><button>Save</button></div>
      <h3>Name: { createField<ProfileTypeKeys>("Full Name","fullName", [], Input, "text") }</h3>
      <h3>Про меня: { createField<ProfileTypeKeys>("About me","aboutMe", [], Textarea, "text" )}</h3>
      <h3>lookingForAJob: { createField<ProfileTypeKeys>("","lookingForAJob", [], Input, 'checkbox' )}</h3>
      <h3>My professional skills: </h3><h3>{ createField<ProfileTypeKeys>("My professional skills","lookingForAJobDescription", [], Textarea, "text" )}</h3>
      <h3>
        Мои контакты:
        {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key} className="contact">
              <b>{key}</b> {createField(key, 'contacts.' + key, [], Input, 'text')}
            </div>
          )
        })}
      </h3>
    </form>
  )
}

const UserInfoFormReduxForm = reduxForm<ProfileType, UserInfoFormPropsType>({form: 'edit-profile'})(UserInfoForm)

export default UserInfoFormReduxForm