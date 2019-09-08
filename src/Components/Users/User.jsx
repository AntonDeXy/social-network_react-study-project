import React from 'react'
import userPhoto from '../../imgs/user.png'
import { NavLink } from 'react-router-dom'

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div key={user.id}  >
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className='UsersPhoto' alt='ava' />
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                unfollow(user.id)
              }}>Unfollow</button>
            : <button disabled={followingInProgress.some(id => id === user.id)}
              onClick={
                () => {
                  follow(user.id)
                }}>follow</button>
          }
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  )
}
export default User