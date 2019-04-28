import React from 'react'

const Post = (props) => (
  <div className='item'>
    <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="" />
    {props.message}
    <div>
      <span>Like: {props.likeCount}</span>
    </div>
  </div>
)

export default Post