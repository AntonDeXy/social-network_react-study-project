import React from 'react'
// import Post from './Post/Post'
import ProfileInfo from './ProfileInfo'
import MyPosts from './Post/MyPosts'

const Profile = props => {
  return(
    <div className='content'>
      <ProfileInfo />
      <MyPosts 
      dispatch={props.dispatch}
      // newPostText={props.newPostText}
      posts={props.posts}
      // addPost={props.addPost}
      />
    </div>
  )
}

export default Profile