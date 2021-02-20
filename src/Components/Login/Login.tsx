import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { Input, createField } from '../common/formControls/FormsControls'
import { required } from './../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from './../../redux/authReducer'
import { Redirect } from 'react-router-dom';
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

    {captchaUrl && <img className='captchaImg' src={captchaUrl} alt='captcha'/>}
    {captchaUrl && createField<LoginFromValuesTypeKeys>('symbols from image', 'captcha', [required], Input, '')}

    {error && <div className='formSummatyError'>{error}</div>}
    <div><button>Login</button></div>
  </form>
)

const LoginReduxForm = reduxForm<LoginFromValuesType, LoginFormOwnProps>({
  form: 'login'
})(LoginForm)


type MapStateToProps = {
  captchaUrl: string | null
  isAuth: boolean
}

type MapDispatchToProps = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFromValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFromValuesTypeKeys = keyof LoginFromValuesType
// in old ts versions:
// type LoginFromValuesTypeKeys = Extract<keyof LoginFromValuesType, string> 

const Login: React.FC<MapStateToProps & MapDispatchToProps> = (props) => {
  const onSubmit = (formData: any) => {
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


const mapStateToProps = (state: AppStateType): MapStateToProps => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)