import React from 'react'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
  debugger
  let state = props.store.getState()

  let addPost = () => {
    props.store.dispatch( addPostActionCreator() )
  }

  let OnPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action)
  }

  return (
    <MyPosts
      updateNewPostText={ OnPostChange }
      addPost = { addPost }
      posts = {state.profileReducer.posts}
      newPostText = {state.profileReducer.newPostText}
    />
  )
}
export default MyPostsContainer