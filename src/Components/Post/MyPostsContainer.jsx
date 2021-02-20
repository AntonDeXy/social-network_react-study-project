import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { addPost} from './../../redux/profileReducer'

const mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (newPostText) => {
      dispatch(addPost(newPostText))
    }
  }
}

const myPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default myPostsContainer