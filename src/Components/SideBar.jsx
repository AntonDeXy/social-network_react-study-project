import React from 'react'
import { NavLink } from 'react-router-dom'
import FrienSideItem from './FriendSideItem'

const SideBar = (props) => {
  return (
    <nav>
      <div>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div>
        <NavLink to="/users">Users</NavLink>
      </div>
      <div>
        <NavLink to="/" exact>Music</NavLink>
      </div>
      <div>
        <NavLink to="/" exact>Setting</NavLink>
      </div>
      <br />
      <div className="friends-wrapper">
        <h2>Friends</h2>
        <div className="friends">
          {props.friends.map((friend) => (
            <FrienSideItem name={friend.name} img={friend.img} />
          ))}
        </div>
    
      </div>
    </nav>
  )
}

export default SideBar
