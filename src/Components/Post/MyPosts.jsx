import React from 'react'
import Post from './Post'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../redux/state';

const MyPosts = props => {
  let addPost = () => {
    props.dispatch( addPostActionCreator() )
  }

  let OnPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch( updateNewPostTextActionCreator(text) )
  }

  let newPostElement = React.createRef()

  return (
    <div className='MyPosts'>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={OnPostChange}
          ref={newPostElement}
          value={props.posts.newPostText}
        />
        <button onClick={addPost}>Add post</button>
      </div>
      {props.posts.posts.map(post => <Post message={post.message} likeCount={post.likes} />)}
    </div>
  )
}
export default MyPosts