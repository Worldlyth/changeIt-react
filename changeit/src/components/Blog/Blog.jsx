import React, { useState } from "react"
import "./blog.css"
import BlogForm from "./BlogForm/BlogForm"
import BlogNavigation from "./BlogNavigation/BlogNavigation"
import BlogStories from "./BlogStories/BlogStories"

export const Blog = () => {
  const [posts, setPosts] = useState([])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const sortPosts = (sortedPosts) => {
    setPosts([...posts], sortedPosts)
  }

  return (
    <div className="blog" id="blog">
      <div className="blog-title">TELL US YOUR STORY</div>
      <div className="blog-content">
        <BlogForm create={createPost} />
        <BlogNavigation posts={posts} sort={sortPosts}/>
        <BlogStories posts={posts} />
      </div>
    </div>
  )
}
