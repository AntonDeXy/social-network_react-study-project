import React from 'react'

type PropsType = {
  img: string
  name: string
}

const FrienSideItem:React.FC<PropsType> = ({img, name})  => {
  return (
    <div className='friend' >
      <img src={img} alt="" />
      <h4>{name}</h4>
    </div>
  )
}

export default FrienSideItem