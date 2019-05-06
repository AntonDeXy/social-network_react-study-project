import React from 'react'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../StoreContext';

const MyPostsContainer = () => {
  return <StoreContext.Consumer>
    { store  => {
        let state = store.getState()

        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }

        let OnPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text)
          store.dispatch(action)
        }
        return (
          <MyPosts
            updateNewPostText={OnPostChange}
            addPost={addPost}
            posts={store.getState().profileReducer.posts}
            newPostText={store.getState().profileReducer.newPostText}
          />
        )
      }}
    </StoreContext.Consumer>
}
export default MyPostsContainer