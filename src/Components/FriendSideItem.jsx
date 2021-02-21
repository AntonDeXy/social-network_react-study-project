import React from 'react'

const FrienSideItem = props => {
  return (
    <div className='friend' >
      <img src={props.img} alt="" />
      <h4>{props.name}</h4>
    </div>
  )
}

export default FrienSideItem