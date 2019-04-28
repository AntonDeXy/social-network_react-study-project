import React from 'react'
import Post from './Post'

const MyPosts = props => {
  debugger
  return (
    <div className='MyPosts'>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      {props.posts.map(post => <Post message={post.message} likeCount={post.likes} />)}
    </div>
  )
}
export default MyPosts