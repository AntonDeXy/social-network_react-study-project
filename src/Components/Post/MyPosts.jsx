import React from 'react'
import Post from './Post'

const MyPosts = props => {

  let addPost = () => {
    props.addPost()
  }

  let OnPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)  
  }

  let newPostElement = React.createRef()
  return (
    <div className='MyPosts'>
      <h3>My posts</h3>
      <div>
        <textarea
        onChange={ OnPostChange }
        ref={newPostElement}
        value={props.newPostText}
        />
        <button onClick={ addPost } >Add post</button>
      </div>
      {props.posts.map(post => <Post message={post.message} likeCount={post.likes} />)}
    </div>
  )
}
export default MyPosts