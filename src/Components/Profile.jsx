import React from 'react'
// import Post from './Post/Post'
import ProfileInfo from './ProfileInfo'
import MyPosts from './Post/MyPosts'

const Profile = props => {
  return(
    <div className='content'>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  )
}

export default Profile