import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/formControls/FormsControls'
import { required } from './../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from './../../redux/authReducer'
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => (
  <form action="" onSubmit={props.handleSubmit}>
    <div><Field component={Input} name={'email'} placeholder={'Email'}
      type="text" validate={[required]} /></div>
    <div><Field component={Input} name={'password'} placeholder={'Password'}
      type="password" validate={[required]} /></div>
    <div><Field component={Input} name={'rememberMe'}
      type="checkbox" />remember me</div>
      {props.error && <div className='formSummatyError'>{props.error}</div>}
    
    <div><button>Login</button></div>
  </form>
)

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if(props.isAuth) {
    return <Redirect to={"/profile"}/>
  }

  return <div className='content'>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)