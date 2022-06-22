import React from "react"
import Post from "../Post/Post"
import "../BlogStories/blogStories.css"

const BlogStories = (props) => {
  return (
    <div className="stories__blog">
      {props.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default BlogStories
