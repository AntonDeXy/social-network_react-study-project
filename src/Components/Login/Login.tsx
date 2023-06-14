import React from 'react'
import { Redirect } from 'react-router-dom';
import { InjectedFormProps, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'

import { Input, createField, GetStringKeys } from '../common/formControls/FormsControls'
import { required } from './../../utils/validators/validators'
import { login } from './../../redux/authReducer'
import { AppStateType } from '../../redux/redux-store'

type LoginFormOwnProps = {
  captchaUrl: string | null
}

type LoginFormType = InjectedFormProps<LoginFromValuesType, LoginFormOwnProps> & LoginFormOwnProps

const LoginForm: React.FC<LoginFormType> = ({ handleSubmit, error, captchaUrl }) => (
  <form onSubmit={handleSubmit}>
    {createField<LoginFromValuesTypeKeys>('Email', 'email', [required], Input, 'text')}
    {createField<LoginFromValuesTypeKeys>('Password', 'password', [required], Input, 'password')}
    {createField<LoginFromValuesTypeKeys>('', 'rememberMe', [], Input, 'checkbox', 'rememberMe')}

    {captchaUrl && <img className='captchaImg' src={captchaUrl} alt='captcha' />}
    {captchaUrl && createField<LoginFromValuesTypeKeys>('symbols from image', 'captcha', [required], Input, '')}

    {error && <div className='formSummatyError'>{error}</div>}
    <div><button>Login</button></div>
  </form>
)

const LoginReduxForm = reduxForm<LoginFromValuesType, LoginFormOwnProps>({
  form: 'login'
})(LoginForm)

type LoginFromValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFromValuesTypeKeys = GetStringKeys<LoginFromValuesType>

export const LoginPage: React.FC = () => {
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)

  const dispatch = useDispatch()

  const onSubmit = (formData: any) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
  }

  if (isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
    <div className='content'>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  ) 
}
