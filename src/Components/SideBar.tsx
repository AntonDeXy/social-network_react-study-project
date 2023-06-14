import React from 'react'
import { NavLink } from 'react-router-dom'
import { FriendsType } from '../redux/profileReducer'
import FrienSideItem from './FriendSideItem'

type SideBarPropsType = {
  friends: Array<FriendsType>
}

class SideBar extends React.Component<SideBarPropsType> {
  render() {
    const { friends } = this.props;

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
            {friends.map((friend) => (
              <FrienSideItem key={friend.id} name={friend.name} img={friend.img} />
            ))}
          </div>
        </div>
      </nav>
    );
  }
}
export default SideBar
