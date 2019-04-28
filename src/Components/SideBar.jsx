import React from 'react'
import {NavLink} from 'react-router-dom'

const SideBar = () => (
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
  </nav>
)

export default SideBar