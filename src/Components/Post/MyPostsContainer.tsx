import MyPosts, { MyPostsDispatchPropsType, MyPostsPropsType } from './MyPosts'
import { connect } from 'react-redux'
import { actions } from '../../redux/profileReducer'
import { AppStateType } from '../../redux/redux-store'

const mapStateToProps = (state: AppStateType) => ({
  posts: state.profileReducer.posts
})

const mapDispatchToProps = ({
  addPost: actions.addPost
})

const myPostsContainer = connect<MyPostsPropsType, MyPostsDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)

export default myPostsContainer