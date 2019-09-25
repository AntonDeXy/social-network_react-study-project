import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input, createField } from '../common/formControls/FormsControls'
import { required } from './../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from './../../redux/authReducer'
import { Redirect } from 'react-router-dom';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => (
  <form action="" onSubmit={handleSubmit}>
    {createField('Email', 'email', [required], Input, 'text')}
    {createField('Password', 'password', [required], Input, 'password')}
    {createField('', 'rememberMe', [], Input, 'checkbox', 'rememberMe')}

    {captchaUrl && <img className='captchaImg' src={captchaUrl} alt='captcha'/>}
    {captchaUrl && createField('symbols from image', 'captcha', [required], Input)}

    {error && <div className='formSummatyError'>{error}</div>}
    <div><button>Login</button></div>
  </form>
)

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return <div className='content'>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
  </div>
}
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)