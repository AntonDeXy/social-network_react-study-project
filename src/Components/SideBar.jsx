import React from 'react'
import {NavLink} from 'react-router-dom'
import FrienSideItem from './FriendSideItem'

const SideBar = props => {
  // debugger
  return(
  <nav>
    <div>
      <NavLink to='/profile'>Profile</NavLink>
    </div>
    <div>
      <NavLink to='/dialogs'>Messages</NavLink>
    </div>
    <div>
      <NavLink to='#'>Music</NavLink>
    </div>
    <div>
      <NavLink to='#'>Setting</NavLink>
    </div>
    <br/>
    <div className='friends'>
      <NavLink>Friends</NavLink>
      {props.friends.map ( friend => <FrienSideItem 
        name={friend.name}
        img={friend.img}/> )}
    </div>
  </nav>
  )
}

export default SideBar