import React, { useState } from "react"
import Post from "./Post/Post"
import "./blog.css"
import BlogForm from "./BlogForm/BlogForm"
import BlogNavigation from "./BlogNavigation/BlogNavigation"

export const Blog = () => {
  const [posts, setPosts] = useState([])

  const addPost = (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const title = formData.get("title")
    const text = formData.get("text")

    const newPost = {
      title,
      text,
      date: new Date().toLocaleString(),
      id: Date.now(),
    }

    setPosts([...posts, newPost])
    form.reset()
  }

  const sort = (e) => {
    const select = e.currentTarget
    if (select.value === "AZ") {
      sortByLettersAZ()
    } else if (select.value === "ZA") {
      sortByLettersZA()
    }

    if (select.value === "dateUp") {
      sortByDateUp()
    } else if (select.value === "dateDown") {
      sortByDateDown()
    }
  }

  const sortByLettersAZ = () => {
    setPosts([
      ...posts.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      }),
    ])
  }

  const sortByLettersZA = () => {
    setPosts([
      ...posts.sort((a, b) => {
        if (a.title < b.title) {
          return 1
        }
        if (a.title > b.title) {
          return -1
        }
        return 0
      }),
    ])
  }

  const sortByDateUp = () => {
    setPosts([
      ...posts.sort((a, b) => {
        return a.id - b.id
      }),
    ])
  }

  const sortByDateDown = () => {
    setPosts([
      ...posts.sort((a, b) => {
        return b.id - a.id
      }),
    ])
  }

  const filter = (e) => {
    const filterInput = e.currentTarget
    setPosts([...posts.filter((post)=> {
      if (post.title.includes(filterInput.value)) {
        return post
      }
    })])
  }

  return (
    <div className="blog" id="blog">
      <div className="blog-title">TELL US YOUR STORY</div>
      <div className="blog-content">
        <BlogForm addPost={addPost} />
        <BlogNavigation sort={sort} filter={filter}/>
        <div className="stories__blog">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
