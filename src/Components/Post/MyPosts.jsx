import React from 'react'
import Post from './Post'
import { Field, reduxForm } from 'redux-form';
import { required, maxLenghtCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/formControls/FormsControls';

const maxLenght10 = maxLenghtCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='newPostText' component={Textarea} placeholder={"Post message"}
      validate={[required, maxLenght10]} />
      <button>Add post</button>
    </form>
  )
}

// but it works good withouth React.memo
const MyPosts = React.memo(props => {
    let onAddPost = (values) => {
      debugger
      props.addPost(values.newPostText)
    }
    let reversedPosts = [...props.posts].reverse()
    return (
      <div className='MyPosts'>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        {reversedPosts.map(post => <Post key={post.id} message={post.message} likeCount={post.likes} />)}
      </div>
    )
})

const AddNewPostFormRedux = reduxForm({
  form: "Profile"
})(AddNewPostForm)

export default MyPosts