import React from 'react'
// import Post from './Post/Post'
import ProfileInfo from './ProfileInfo'
import MyPostsContainer from './Post/MyPostsContainer'

const Profile = props => {
  debugger
  return(
    <div className='content'>
      <ProfileInfo />
      <MyPostsContainer 
        // store={props.store}
      />
    </div>
  )
}

export default Profile