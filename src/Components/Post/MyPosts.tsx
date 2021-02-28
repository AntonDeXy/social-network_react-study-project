import React from 'react'
import Post from './Post'
import AddNewPostFormRedux, { AddPostFormValuesType } from './AddPostForm'
import { PostType } from '../../types/types'

export type MyPostsPropsType = {
  posts: Array<PostType>
}

export type MyPostsDispatchPropsType = {
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType & MyPostsDispatchPropsType> = React.memo(({addPost, posts}) => {
    const onAddPost = (formData: AddPostFormValuesType) => {
      addPost(formData.newPostText)
    }

    const reversedPosts = [...posts].reverse()

    return (
      <div className='MyPosts'>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        {reversedPosts.map(post => <Post key={post.id} message={post.message} likeCount={post.likes} />)}
      </div>
    )
})

export default MyPosts