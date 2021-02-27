import React from 'react'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import { FieldValidatorType } from '../../../utils/validators/validators'
import './formControll.scss'

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}

export const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error

  return (
    <div className={`formControl ${hasError ? 'error' : ''}`} >
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea:React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props

  return <FormControl {...props} >
    <textarea {...input} {...restProps} />
  </FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props

  return <FormControl {...props} >
    <input {...input} {...restProps} />
  </FormControl>
}

export function createField<FormKeysType extends string> (
  placeholder: string, name: FormKeysType,
  validators: FieldValidatorType[] | [], component: React.FC<WrappedFieldProps>,
  type: string, text:string = ''
)  {
  return (
    <div>
      <Field component={component} name={name} placeholder={placeholder}
        type={type} validate={validators} />{text}
    </div>
  )
}