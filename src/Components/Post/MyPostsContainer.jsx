// import React from 'react'
import { updateNewPostText, addPost} from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts)

export default MyPostsContainer