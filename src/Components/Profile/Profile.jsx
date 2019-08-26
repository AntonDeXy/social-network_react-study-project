import React from 'react'
import ProfileInfo from './ProfileInfo'
import MyPostsContainer from '../Post/MyPostsContainer'

const Profile = (props) => {
  return(
    <div className='content'>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile