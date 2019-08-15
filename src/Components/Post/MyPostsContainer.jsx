// import React from 'react'
import { updateNewPostText, addPost} from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText
  }
}

export default compose(
  connect(mapStateToProps, {updateNewPostText, addPost})
)(MyPosts)