import React from 'react'
import {NavLink} from 'react-router-dom'

type DialogItemPropsType = {
  id: number
  name: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) =>{
  const path = "/dialogs/" + props.id;

  return(
    <div className='dialog'>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem