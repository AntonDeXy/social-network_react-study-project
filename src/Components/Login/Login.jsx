import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { Input } from '../common/formControls/FormsControls';
import { required } from './../../utils/validators/validators';

const LoginForm = (props) => (
  <form action="" onSubmit={props.handleSubmit}>
    <div><Field component={Input} name={'login'} placeholder={'Login'}
    type="text"  validate={[required]}/></div>  
    <div><Field component={Input} name={'password'} placeholder={'Password'}
    type="password"  validate={[required]}/></div>
    <div><Field component={Input} name={'rememberMe'}
    type="checkbox" />remember me</div>
    <div><button>Login</button></div>
  </form> 
)

const LoginReduxForm = reduxForm ({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return  <div className='content'>
    <h1>Login</h1> 
    <LoginReduxForm onSubmit={onSubmit} />
  </div> 
}

export default Login