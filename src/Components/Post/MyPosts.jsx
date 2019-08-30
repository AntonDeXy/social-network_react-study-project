import React from 'react'
import Post from './Post'
import { Field, reduxForm } from 'redux-form';
import { required, maxLenghtCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/formControls/FormsControls';

const maxLenght10 = maxLenghtCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {/* <textarea
          onChange={OnPostChange}
          ref={newPostElement}
          value={props.newPostText}
        /> */}
      <Field name='newPostText' component={Textarea} placeholder={"Post message"} validate={[required, maxLenght10]} />
      <button>Add post</button>
    </form>
  )
}

const MyPosts = props => {
  let newPostElement = React.createRef()

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  // let OnPostChange = () => {
  //   let text = newPostElement.current.value
  //   props.updateNewPostText(text)
  // }

  return (
    <div className='MyPosts'>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {props.posts.map(post => <Post message={post.message} likeCount={post.likes} />)}
    </div>
  )
}

const AddNewPostFormRedux = reduxForm({
  form: "Profile"
})(AddNewPostForm)

export default MyPosts