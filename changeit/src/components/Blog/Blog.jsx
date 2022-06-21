import React from "react"
import "./blog.css"
import { BlogForm } from "./BlogForm/BlogForm"
import { BlogNavigation } from "./BlogNavigation/BlogNavigation"

function setPosts  () {
  
} 

export const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-title">TELL US YOUR STORY</div>

      <div className="blog-content">
        <BlogForm setPosts={setPosts} />
        <BlogNavigation />

        <div className="stories__blog"></div>
      </div>
    </div>
  )
}
