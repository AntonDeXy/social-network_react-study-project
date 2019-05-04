import React from 'react'
import Post from './Post'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../redux/profileReducer';

const MyPosts = props => {
  debugger

  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost()
    // props.dispatch( addPostActionCreator() )
  }

  let OnPostChange = () => {
    let text = newPostElement.current.value
    // props.dispatch( updateNewPostTextActionCreator(text) )
    props.updateNewPostText(text)
  }


  return (
    <div className='MyPosts'>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={OnPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add post</button>
      </div>
      {props.posts.map(post => <Post message={post.message} likeCount={post.likes} />)}
    </div>
  )
}
export default MyPosts