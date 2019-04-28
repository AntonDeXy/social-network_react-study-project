import React from 'react'

const Message = (props) => {
  return(
    <div className="message">{props.message.message}</div>
  )
}

export default Message