import React from 'react'
import { createField, Input, Textarea } from '../common/formControls/FormsControls';
import { reduxForm } from 'redux-form';

const UserInfoForm = ({handleSubmit,profile}) => {
  return (
    <form onSubmit={handleSubmit} className="UserInfo">
      <div><button>Save</button></div>
      <h3>Name: { createField("Full Name","fullName", [], Input) }</h3>
      <h3>Про меня: { createField("About me","aboutMe", [], Textarea )}</h3>
      <h3>lookingForAJob: { createField("","lookingForAJob", [], Input, 'checkbox' )}</h3>
      <h3>My professional skills: </h3><h3>{ createField("My professional skills","lookingForAJobDescription", [], Textarea )}</h3>
      <h3>
        Мои контакты:
        {/* {Object.keys(profile.contacts).map(key => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })} */}
      </h3>
    </form>
  )
}

const UserInfoFormReduxForm = reduxForm({form: 'edit-profile'})(UserInfoForm)

export default UserInfoFormReduxForm