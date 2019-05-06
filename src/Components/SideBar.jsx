import React from 'react'
import { NavLink } from 'react-router-dom'
import FrienSideItem from './FriendSideItem'
import StoreContext from '../StoreContext';

const SideBar = () => {
  debugger
  return <StoreContext.Consumer>
    {store => {
      let state = store.getState()

      return (
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
          <br />
          <div className='friends'>
            <NavLink>Friends</NavLink>
            {state.profileReducer.friends.map(friend => <FrienSideItem
              name={friend.name}
              img={friend.img} />)}
          </div>
        </nav>
      )
    }}
  </StoreContext.Consumer>
}

export default SideBar