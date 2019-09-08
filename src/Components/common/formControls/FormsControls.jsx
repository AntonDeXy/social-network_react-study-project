import React, { useRef } from 'react'
import styles from './formControll.scss'
import { Field } from 'redux-form';

export const FormControl = ({ input, meta: {touched, error}, children }) => {
  const areasDiv = useRef(null)
  const hasError = touched && error

  hasError && areasDiv.current && areasDiv.current.classList.add('error')
  !hasError && areasDiv.current && areasDiv.current.classList.remove('error')

  return (
    <div ref={areasDiv} id='areasDiv' className='formControl' >
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props
  return <FormControl {...props} >
    <textarea {...input} {...restProps} />
  </FormControl>
}

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props
  return <FormControl {...props} >
    <input {...input} {...restProps} />
  </FormControl>
}

export const createField = (placeholder, name, validators, component, type, text = '') => (
  <div>
    <Field component={component} name={name} placeholder={placeholder}
      type={type} validate={validators} />{text}
  </div>

)