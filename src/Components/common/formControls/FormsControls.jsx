import React, {useRef} from 'react'
import styles from './formControll.scss'

export const FormControl = ({input, meta, child, ...props}) => {
  const areasDiv = useRef(null)
  const hasError = meta.touched && meta.error

  hasError && areasDiv.current && areasDiv.current.classList.add('error')
  !hasError && areasDiv.current && areasDiv.current.classList.remove('error')

  return (
    <div ref={areasDiv} id='areasDiv' className='formControl' >
      <div>
        {props.children}
      </div>
      { hasError && <span>{meta.error}</span> }
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props
  return <FormControl {...props} >
    <textarea {...input} {...restProps} />
  </FormControl>
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props
  return <FormControl {...props} >
    <input {...input} {...restProps} />
  </FormControl>
}
