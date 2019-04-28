import React from 'react'

const FrienSideItem = props => {
  return (
    <div>
      <img src={props.img} alt="" />
      <h4>{props.name}</h4>
    </div>
  )
}

export default FrienSideItem