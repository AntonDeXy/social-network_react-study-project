import React from 'react'

type PostPropsType = {
  message: string
  likeCount: number
}

const Post:React.FC<PostPropsType> = ({message, likeCount}) => (
  <div className='item'>
    <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="" />
    {message}
    <div>
      <span>Like: {likeCount}</span>
    </div>
  </div>
)

export default Post