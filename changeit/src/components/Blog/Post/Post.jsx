import React from "react"
import "../Post/post.css"

const Post = (props) => {
  const { post } = props

  return (
    <div className="blog__post bg_pink" key={post.id}>
      <div className="post__title">
        {post.title}
        <div className="post__creation-date">{post.date}</div>
      </div>
      <div className="post__text">{post.text}</div>
    </div>
  )
}

export default Post
